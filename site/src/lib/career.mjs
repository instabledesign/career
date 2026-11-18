import missionsData from '../data/missions.json';
import { readCommits } from './git.mjs';
import { assignLanes, edgePath } from './graph.mjs';

const MONTHS = ['janv.', 'févr.', 'mars', 'avr.', 'mai', 'juin', 'juil.', 'août', 'sept.', 'oct.', 'nov.', 'déc.'];
const cap = (s) => s.charAt(0).toUpperCase() + s.slice(1);
const DAY = 86400000;

function findCommit(commits, subject, preferMerge = false) {
  const exact = commits.filter((c) => c.subject === subject);
  const pool = exact.length ? exact : commits.filter((c) => c.subject.startsWith(subject));
  if (!pool.length) throw new Error(`Aucun commit pour « ${subject} »`);
  return (preferMerge && pool.find((c) => c.parents.length > 1)) || pool[0];
}

function durationLabel(months) {
  const m = Math.max(1, Math.round(months));
  const y = Math.floor(m / 12), r = m % 12;
  if (!y) return `${m} mois`;
  return `${y} an${y > 1 ? 's' : ''}${r ? ` ${r} mois` : ''}`;
}

function periodLabel(start, end, ongoing) {
  const s = new Date(start), e = end ? new Date(end) : null;
  const left = `${cap(MONTHS[s.getUTCMonth()])} ${s.getUTCFullYear()}`;
  if (ongoing || !e) return `${left} → aujourd'hui`;
  if (s.getUTCFullYear() === e.getUTCFullYear()) return `${cap(MONTHS[s.getUTCMonth()])} → ${MONTHS[e.getUTCMonth()]} ${e.getUTCFullYear()}`;
  return `${left} → ${MONTHS[e.getUTCMonth()]} ${e.getUTCFullYear()}`;
}

export function buildCareer() {
  const commits = readCommits();                                   // plus récent d'abord
  const now = new Date();
  const missions = missionsData.map((m) => {
    const startC = findCommit(commits, m.start);
    const endC = m.end ? findCommit(commits, m.end, true) : null;
    const startDate = m.startDate ?? startC.date;
    const endDate = m.endDate ?? endC?.date ?? null;
    const ongoing = !endDate;
    const months = m.months ?? ((new Date(endDate ?? now) - new Date(startDate)) / DAY) / 30.44;
    return {
      ...m, startC, endC, startDate, endDate, ongoing, months,
      period: periodLabel(startDate, endDate, ongoing),
      duration: m.durationLabel ?? durationLabel(months),
    };
  });

  // technologies : années cumulées = somme des durées des missions qui les utilisent
  const totals = new Map();
  for (const m of missions) {
    if (m.countStack === false) continue;
    for (const t of m.stack) {
      const [k, n] = [t[0], t.slice(2)];
      const o = totals.get(n) ?? { n, k, months: 0 };
      o.months += m.months;
      totals.set(n, o);
    }
  }
  const years = (o) => Math.round((o.months / 12) * 2) / 2;
  const techs = [...totals.values()].map((o) => ({ ...o, years: years(o) })).sort((a, b) => b.years - a.years || a.n.localeCompare(b.n));
  const langs = techs.filter((t) => t.k === 'l').slice(0, 5);
  const infra = techs.filter((t) => t.k === 'i').slice(0, 10);

  // graphe
  for (const m of missions) m.side = m.side ?? (m.kind === 'formation' ? 'left' : 'right');
  const missionAt = new Map(missions.map((m) => [m.startC.hash, m]));
  const byEnd = new Map();
  for (const m of missions) if (m.endC) byEnd.set(m.endC.hash, [...(byEnd.get(m.endC.hash) ?? []), m]);
  const cmap = new Map(commits.map((c) => [c.hash, c]));
  const chain = (hash) => {            // mission dont la branche porte ce commit (en remontant le 1er parent)
    for (let h = hash, n = 0; h && n < 200; n++) {
      if (missionAt.has(h)) return missionAt.get(h);
      h = cmap.get(h)?.parents[0];
    }
    return null;
  };
  const { place, edges, minLane, maxLane } = assignLanes(commits, (p) => chain(p)?.side ?? 'right');
  const ROW_CARD = 218, ROW_PLAIN = 58;
  const rows = [];
  let acc = 24;
  commits.forEach((c) => {
    const cards = missions.filter((m) => m.startC.hash === c.hash);
    const h = cards.length ? ROW_CARD : ROW_PLAIN;
    rows.push({ c, cards, ends: byEnd.get(c.hash) ?? [], h, top: acc });
    acc += h;
  });
  const PAD = 22, GAP = 22;
  const geom = {
    x: (lane) => PAD + (lane - minLane) * GAP,
    y: (row) => rows[row].top + (rows[row].cards.length ? 44 : ROW_PLAIN / 2),
  };
  const graphWidth = PAD * 2 + (maxLane - minLane) * GAP;
  // repères d'années sur le tronc : première ligne (la plus récente) de chaque année civile
  const yearMarks = [];
  rows.forEach((r, i) => {
    const y = new Date(r.c.date).getUTCFullYear();
    if (i === 0 || y !== new Date(rows[i - 1].c.date).getUTCFullYear()) yearMarks.push({ year: y, top: r.top });
  });
  const leftTops = rows.filter((r) => r.cards.some((m) => m.side === 'left')).map((r) => r.top);
  const sentinelTop = Math.max(0, Math.min(...leftTops) - 160);
  const TRUNK = 'var(--trunk)';
  const paths = edges.map((e) => {
    const from = place.get(e.from), to = place.get(e.to);
    const m = from.lane !== 0 ? chain(e.from) : (e.L !== 0 ? chain(e.to) : null);
    return { d: edgePath(e, place, geom), color: m ? m.color : TRUNK };
  });
  rows.forEach((r) => {
    const p = place.get(r.c.hash);
    const m = r.cards[0] ?? r.ends[0] ?? (p.lane !== 0 ? chain(r.c.hash) : null);
    r.x = geom.x(p.lane); r.y = geom.y(p.row); r.color = m ? m.color : TRUNK;
    r.start = r.cards.length > 0 && r.ends.length === 0; r.end = r.ends.length > 0;
  });

  const first = commits.at(-1), last = commits[0];
  return {
    commits, missions, rows, paths, yearMarks, sentinelTop, height: acc + 24, graphWidth, masterX: geom.x(0),
    langs, infra,
    stats: {
      from: new Date(first.date).getFullYear(), to: new Date(last.date).getFullYear(),
      experiences: missions.filter((m) => m.kind === 'experience').length,
      formations: missions.filter((m) => m.kind === 'formation').length,
    },
  };
}

export const fmtDate = (iso) => { const d = new Date(iso); return `${MONTHS[d.getUTCMonth()]} ${d.getUTCFullYear()}`; };
export const rich = (s) => s.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');

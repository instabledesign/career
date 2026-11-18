// Attribue une voie à chaque commit. Voie 0 = tronc (master), voies négatives = gauche, positives = droite.
// `sideOf(hash)` indique de quel côté ouvrir une nouvelle voie pour la branche dont `hash` est la pointe.
export function assignLanes(commits, sideOf) {
  const slots = new Map();   // voie -> hash attendu
  const place = new Map();   // hash -> { row, lane }
  const edges = [];          // { from, to, L }
  const freeLane = (side) => {
    const step = side === 'left' ? -1 : 1;
    let l = step;
    while (slots.get(l)) l += step;
    return l;
  };
  commits.forEach((c, row) => {
    const mine = [...slots].filter(([, h]) => h === c.hash).map(([l]) => l).sort((a, b) => Math.abs(a) - Math.abs(b));
    const lane = mine.length ? mine[0] : (row === 0 ? 0 : freeLane('right'));
    mine.forEach((l) => slots.delete(l));
    place.set(c.hash, { row, lane });
    c.parents.forEach((p, k) => {
      const ex = [...slots].find(([, h]) => h === p);
      let L;
      if (ex) L = ex[0];
      else if (k === 0) { L = lane; slots.set(L, p); }
      else { L = freeLane(sideOf(p)); slots.set(L, p); }
      edges.push({ from: c.hash, to: p, L });
    });
  });
  const lanes = [...place.values()].map((v) => v.lane).concat(edges.map((e) => e.L));
  return { place, edges, minLane: Math.min(0, ...lanes), maxLane: Math.max(0, ...lanes) };
}

export function edgePath(e, place, geom) {
  const a = place.get(e.from), b = place.get(e.to);
  if (!a || !b) return '';
  const xa = geom.x(a.lane), xb = geom.x(b.lane), xl = geom.x(e.L);
  const ya = geom.y(a.row), yb = geom.y(b.row);
  const h = Math.min(34, (yb - ya) / 2);
  let d = `M${xa} ${ya}`;
  let y = ya;
  if (xa !== xl) { d += ` C${xa} ${ya + h / 2} ${xl} ${ya + h / 2} ${xl} ${ya + h}`; y = ya + h; }
  const yEnd = xl !== xb ? yb - h : yb;
  if (yEnd > y) d += ` L${xl} ${yEnd}`;
  if (xl !== xb) d += ` C${xl} ${yb - h / 2} ${xb} ${yb - h / 2} ${xb} ${yb}`;
  return d;
}

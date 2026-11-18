// Lit l'historique Git du dépôt parent (ou de CAREER_REPO) : un enregistrement par commit.
import { execFileSync } from 'node:child_process';
import path from 'node:path';

const repo = process.env.CAREER_REPO ?? path.resolve(process.cwd(), '..');

// Commits qui ne touchent que le site / la CI : exclus du parcours.
const SITE_PATHS = ['site/', '.github/'];
// En CI seules les branches distantes existent : CAREER_REMOTES=1 les ajoute au scan.
const refs = process.env.CAREER_REMOTES ? ['--branches', '--remotes=origin'] : ['--branches'];

function siteOnlyCommits() {
  const out = execFileSync(
    'git', ['-C', repo, 'log', ...refs, '--exclude=backup/*', '--format=%x01%H', '--name-only'],
    { encoding: 'utf8', maxBuffer: 64 * 1024 * 1024 },
  );
  const skip = new Set();
  for (const chunk of out.split('\x01').filter(Boolean)) {
    const [hash, ...files] = chunk.split('\n').map((l) => l.trim()).filter(Boolean);
    if (files.length && files.every((f) => SITE_PATHS.some((p) => f.startsWith(p)))) skip.add(hash);
  }
  return skip;
}

export function readCommits() {
  const FS = '\x1f', RS = '\x1e';
  const out = execFileSync(
    'git',
    ['-C', repo, 'log', '--date-order', '--exclude=backup/*', ...refs,
     `--format=%H${FS}%P${FS}%aI${FS}%s${FS}%D${RS}`],
    { encoding: 'utf8', maxBuffer: 64 * 1024 * 1024 },
  );
  const all = out.split(RS).map((r) => r.trim()).filter(Boolean).map((r) => {
    const [hash, parents, date, subject, refNames] = r.split(FS);
    return { hash, short: hash.slice(0, 7), parents: parents ? parents.split(' ') : [], date, subject, refs: refNames ?? '' };
  });

  // On retire les commits « site » et on rattache leurs enfants au parent le plus proche conservé.
  const skip = siteOnlyCommits();
  const byHash = new Map(all.map((c) => [c.hash, c]));
  const resolve = (h) => {
    while (skip.has(h)) h = byHash.get(h)?.parents[0];
    return h;
  };
  return all.filter((c) => !skip.has(c.hash)).map((c) => ({
    ...c,
    parents: [...new Set(c.parents.map(resolve).filter(Boolean))],
  }));
}

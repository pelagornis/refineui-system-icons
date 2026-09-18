/**
 * The monorepo gitignores packages/web-icons/dist, so a local docs build has to
 * produce that artifact first. Netlify's site base is docs/ (see netlify.toml)
 * and installs the published @refineui/web-icons from the docs lockfile, so
 * rebuilding the workspace package there would also try to install the repo root.
 */
import { spawnSync } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

if (process.env.NETLIFY) {
  process.exit(0);
}

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const result = spawnSync(
  'npm',
  ['run', 'build', '--workspace=@refineui/web-icons', `--prefix=${repoRoot}`],
  { stdio: 'inherit' },
);
process.exit(result.status ?? 1);

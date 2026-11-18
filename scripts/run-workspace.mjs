/**
 * Runs one workspace script using the package manager that invoked this command.
 * This keeps `bun run dev:docs` from silently switching back to npm.
 */
import { spawnSync } from 'node:child_process';
import { existsSync } from 'node:fs';

const [workspace, script] = process.argv.slice(2);
if (!workspace || !script) {
  console.error('Usage: node scripts/run-workspace.mjs <workspace> <script>');
  process.exit(1);
}

function packageManager() {
  const userAgent = process.env.npm_config_user_agent ?? '';
  if (userAgent.includes('bun')) return 'bun';
  if (userAgent.includes('pnpm')) return 'pnpm';
  if (userAgent.includes('yarn')) return 'yarn';
  if (existsSync('bun.lock')) return 'bun';
  if (existsSync('pnpm-lock.yaml')) return 'pnpm';
  return 'npm';
}

const manager = packageManager();
const args = {
  bun: ['run', '--filter', workspace, script],
  pnpm: ['--filter', workspace, 'run', script],
  yarn: ['workspace', workspace, 'run', script],
  npm: ['run', script, `--workspace=${workspace}`],
}[manager];

const result = spawnSync(manager, args, { stdio: 'inherit' });
process.exit(result.status ?? 1);

import type { CSSProperties } from 'react';

/**
 * Merge user styles into font-icon base styles.
 * Strips flex centering props often injected by design-system wrappers (buttons, slots),
 * which misalign font glyphs.
 */
export function mergeFontIconStyles(base: CSSProperties, user?: CSSProperties): CSSProperties {
  const out: CSSProperties = { ...base, ...(user || {}) };
  delete (out as Record<string, unknown>).justifyContent;
  const d = String(out.display ?? '');
  if (d === 'flex' || d === 'inline-flex') {
    out.display = 'inline-block';
  }
  return out;
}

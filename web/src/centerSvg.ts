const NUM = /-?\d*\.(?:\d+)?|-?\d+(?:\.\d*)?/g;

function pathNumbers(d: string): number[] {
  return (d.match(NUM) ?? []).map(Number).filter((n) => Number.isFinite(n));
}

function estimateContentBox(svg: string): { minX: number; minY: number; maxX: number; maxY: number } | null {
  const boxes: Array<{ minX: number; minY: number; maxX: number; maxY: number }> = [];

  for (const match of svg.matchAll(/\sd="([^"]+)"/g)) {
    const nums = pathNumbers(match[1]);
    const xs: number[] = [];
    const ys: number[] = [];
    for (let i = 0; i + 1 < nums.length; i += 2) {
      xs.push(nums[i]);
      ys.push(nums[i + 1]);
    }
    if (!xs.length) continue;
    boxes.push({
      minX: Math.min(...xs),
      minY: Math.min(...ys),
      maxX: Math.max(...xs),
      maxY: Math.max(...ys),
    });
  }

  if (!boxes.length) return null;

  return {
    minX: Math.min(...boxes.map((b) => b.minX)),
    minY: Math.min(...boxes.map((b) => b.minY)),
    maxX: Math.max(...boxes.map((b) => b.maxX)),
    maxY: Math.max(...boxes.map((b) => b.maxY)),
  };
}

function parseViewBoxSize(svg: string): number {
  const viewBox = svg.match(/viewBox="([^"]+)"/)?.[1];
  if (viewBox) {
    const parts = viewBox.trim().split(/\s+/).map(Number);
    if (parts.length === 4 && parts.every((n) => Number.isFinite(n))) {
      return Math.max(parts[2], parts[3]);
    }
  }

  const width = Number(svg.match(/\swidth="(\d+)"/)?.[1]);
  return Number.isFinite(width) && width > 0 ? width : 24;
}

/** Center SVG artwork inside its viewBox (matches font glyph normalization). */
export function centerSvgContent(svg: string): string {
  if (svg.includes('data-refineui-centered="true"')) return svg;

  const box = estimateContentBox(svg);
  if (!box) return svg;

  const size = parseViewBoxSize(svg);
  const contentW = box.maxX - box.minX;
  const contentH = box.maxY - box.minY;
  if (contentW <= 0 || contentH <= 0) return svg;

  const offsetX = (size - contentW) / 2 - box.minX;
  const offsetY = (size - contentH) / 2 - box.minY;
  if (Math.abs(offsetX) < 0.01 && Math.abs(offsetY) < 0.01) return svg;

  const openTag = svg.match(/<svg[^>]*>/)?.[0];
  const closeIdx = svg.lastIndexOf('</svg>');
  if (!openTag || closeIdx < 0) return svg;

  const inner = svg.slice(openTag.length, closeIdx);
  const centeredOpen = openTag.replace('<svg', '<svg data-refineui-centered="true"');

  return `${centeredOpen}<g transform="translate(${offsetX} ${offsetY})">${inner}</g></svg>`;
}

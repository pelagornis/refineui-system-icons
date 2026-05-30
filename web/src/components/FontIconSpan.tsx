import { getFontFamily, getIconChar } from '@refineui/react-icons/utils';
import type { IconStyle } from '../sample-icons';

interface FontIconSpanProps {
  iconId: string;
  size: number;
  style: IconStyle;
  color: string;
}

export function FontIconSpan({ iconId, size, style, color }: FontIconSpanProps) {
  const iconChar = getIconChar(iconId, style, size);
  if (!iconChar) {
    return <span className="icon-meta">glyph 없음</span>;
  }

  return (
    <span
      style={{
        fontFamily: getFontFamily(style),
        fontSize: size,
        color,
        lineHeight: 1,
        verticalAlign: 'middle',
        display: 'inline-block',
      }}
    >
      {iconChar}
    </span>
  );
}

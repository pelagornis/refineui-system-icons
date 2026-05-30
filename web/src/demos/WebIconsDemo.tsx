import { getFontFamily, getIconChar } from '@refineui/web-icons/utils';
import type { IconStyle } from '../sample-icons';

interface WebIconsDemoProps {
  iconId: string;
  size: number;
  style: IconStyle;
  color: string;
}

export function WebIconsDemo({ iconId, size, style, color }: WebIconsDemoProps) {
  const iconChar = getIconChar(iconId, style, size);
  if (!iconChar) {
    return <span className="icon-meta">glyph 없음</span>;
  }

  return (
    <span
      className="icon-preview"
      style={{
        fontFamily: getFontFamily(style),
        fontSize: size,
        color,
        lineHeight: 1,
        display: 'inline-block',
        verticalAlign: 'middle',
      }}
    >
      {iconChar}
    </span>
  );
}

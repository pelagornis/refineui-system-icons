import { FontIconSpan } from '../components/FontIconSpan';
import type { IconStyle } from '../sample-icons';

interface ReactIconsDemoProps {
  iconId: string;
  size: number;
  style: IconStyle;
  color: string;
}

export function ReactIconsDemo({ iconId, size, style, color }: ReactIconsDemoProps) {
  return (
    <span className="icon-preview">
      <FontIconSpan iconId={iconId} size={size} style={style} color={color} />
    </span>
  );
}

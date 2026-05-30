import { FontIconNative } from '../components/FontIconNative';
import type { IconStyle } from '../sample-icons';

interface ReactNativeIconsDemoProps {
  iconId: string;
  size: number;
  style: IconStyle;
  color: string;
}

export function ReactNativeIconsDemo({
  iconId,
  size,
  style,
  color,
}: ReactNativeIconsDemoProps) {
  return (
    <span className="icon-preview">
      <FontIconNative iconId={iconId} size={size} style={style} color={color} />
    </span>
  );
}

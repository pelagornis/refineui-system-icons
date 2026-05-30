import type { IconStyle } from '../sample-icons';
import { getLocalIconUrl } from '../sample-icons';

const REMOTE_CDN_BASE = 'https://jihoonahn.github.io/refineui-system-icons/cdn/icons';

interface IconCdnDemoProps {
  iconId: string;
  size: number;
  style: IconStyle;
  useRemoteCdn: boolean;
}

export function IconCdnDemo({ iconId, size, style, useRemoteCdn }: IconCdnDemoProps) {
  const localUrl = getLocalIconUrl(iconId, size, style);
  const remoteUrl = `${REMOTE_CDN_BASE}/${size}/${iconId}-${style}.svg`;
  const src = useRemoteCdn ? remoteUrl : localUrl;

  return (
    <>
      <span className="icon-preview icon-preview--cdn">
        <img
          className="cdn-image"
          src={src}
          alt={iconId}
          width={size}
          height={size}
          style={{ width: size, height: size }}
        />
      </span>
      <span className="icon-meta">
        {useRemoteCdn ? `remote: ${remoteUrl}` : `local: ${localUrl}`}
      </span>
    </>
  );
}

export interface IconInfo {
  name: string;
  slug: string;
  size: number;
  url: string;
  svg: string;
}

export interface IconSet {
  [key: string]: IconInfo;
}

export interface IconMetadata {
  name: string;
  slug: string;
  size: number;
  node_id: string;
  platform: string;
  file_path: string;
}

export interface IconGalleryProps {
  icons: IconInfo[];
  onIconClick?: (icon: IconInfo) => void;
  searchTerm?: string;
}

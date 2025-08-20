/**
 * RefineUI System Icons Web Package Types
 */

/** Available icon sizes */
export type IconSize = 16 | 20 | 24 | 28 | 32 | 48;

/** Available icon styles */
export type IconStyle = 'regular' | 'filled';

/** Icon information interface */
export interface IconInfo {
  /** Display name of the icon */
  name: string;
  /** URL slug for the icon */
  slug: string;
  /** Icon size in pixels */
  size: IconSize;
  /** Icon style variant */
  style: IconStyle;
  /** Full URL to the icon */
  url: string;
  /** SVG content of the icon */
  svg?: string;
  /** File name of the icon */
  fileName: string;
}

/** Collection of icons indexed by name */
export interface IconSet {
  [key: string]: IconInfo;
}

/** Icon metadata from source */
export interface IconMetadata {
  /** Icon name */
  name: string;
  /** Icon slug */
  slug: string;
  /** Icon size */
  size: number;
  /** Node ID */
  node_id: string;
  /** Platform */
  platform: string;
  /** File path */
  file_path: string;
}

/** Icon gallery component props */
export interface IconGalleryProps {
  /** Array of icons to display */
  icons: IconInfo[];
  /** Callback when icon is clicked */
  onIconClick?: (icon: IconInfo) => void;
  /** Search term for filtering */
  searchTerm?: string;
  /** Selected icon size */
  selectedSize?: IconSize;
  /** Selected icon style */
  selectedStyle?: IconStyle;
}

/** Icon search options */
export interface IconSearchOptions {
  /** Search query */
  query?: string;
  /** Filter by size */
  size?: IconSize;
  /** Filter by style */
  style?: IconStyle;
  /** Maximum number of results */
  limit?: number;
}

/** Icon search result */
export interface IconSearchResult {
  /** Matching icons */
  icons: IconInfo[];
  /** Total count of results */
  totalCount: number;
  /** Search query used */
  query: string;
}

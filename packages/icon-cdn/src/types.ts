/**
 * RefineUI System Icons CDN Package Types
 */

export interface IconInfo {
  /** Icon name in snake_case format */
  name: string;
  /** Icon size in pixels */
  size: number;
  /** Icon style variant */
  style: 'regular' | 'filled';
  /** Full CDN URL for the icon */
  url: string;
  /** Generated filename for the icon */
  fileName: string;
}

export interface IconMetadata {
  /** Package version */
  version: string;
  /** Total number of available icons */
  totalIcons: number;
  /** Available icon sizes */
  sizes: number[];
  /** Available icon styles */
  styles: ('regular' | 'filled')[];
  /** List of all available icons */
  icons: IconInfo[];
}

export interface CDNConfig {
  /** NPM package name */
  packageName: string;
  /** Package version */
  version: string;
  /** CDN base URL */
  baseUrl: string;
}

export interface BuildConfig {
  /** Source directory path */
  sourceDir: string;
  /** Output directory path */
  outputDir: string;
  /** Available icon sizes */
  sizes: number[];
  /** Available icon styles */
  styles: ('regular' | 'filled')[];
}

/** Available icon sizes */
export type IconSize = 16 | 20 | 24 | 28 | 32 | 48;

/** Available icon styles */
export type IconStyle = 'regular' | 'filled';

/** Icon name type */
export type IconName = string;

/** Icon search result */
export interface IconSearchResult {
  /** Matching icons */
  icons: IconInfo[];
  /** Total count of matching icons */
  totalCount: number;
  /** Search query used */
  query: string;
}

/** Icon filter options */
export interface IconFilterOptions {
  /** Filter by size */
  size?: IconSize;
  /** Filter by style */
  style?: IconStyle;
  /** Search query */
  query?: string;
  /** Maximum number of results */
  limit?: number;
}

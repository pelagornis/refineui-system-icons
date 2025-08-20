/**
 * RefineUI System Icons React Package Types
 */

import React from 'react';

/** Available icon sizes */
export type IconSize = 16 | 20 | 24 | 28 | 32 | 48;

/** Available icon styles */
export type IconStyle = 'regular' | 'filled';

/** Icon component props interface */
export interface IconProps {
  /** Icon name in snake_case format */
  name: string;
  /** Icon size in pixels */
  size?: IconSize;
  /** Icon style variant */
  style?: IconStyle;
  /** CSS class name */
  className?: string;
  /** Inline styles */
  inlineStyle?: React.CSSProperties;
  /** Click handler */
  onClick?: (event: React.MouseEvent<HTMLImageElement>) => void;
  /** Alt text for accessibility */
  alt?: string;
  /** Title attribute for tooltip */
  title?: string;
  /** Loading state */
  loading?: 'lazy' | 'eager';
  /** Error handler */
  onError?: (event: React.SyntheticEvent<HTMLImageElement, Event>) => void;
  /** Load handler */
  onLoad?: (event: React.SyntheticEvent<HTMLImageElement, Event>) => void;
}

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
  /** Icon unicode character */
  unicode: string;
  /** File name of the icon */
  fileName: string;
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

/** Icon metadata */
export interface IconMetadata {
  /** Icon name */
  name: string;
  /** Icon slug */
  slug: string;
  /** Icon tags */
  tags?: string[];
  /** Icon description */
  description?: string;
}

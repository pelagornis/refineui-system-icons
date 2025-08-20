/**
 * RefineUI System Icons React Native Package Types
 */

import React from 'react';
import { ViewStyle, TextStyle } from 'react-native';

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
  /** Container style */
  containerStyle?: ViewStyle;
  /** Icon style */
  iconStyle?: TextStyle;
  /** Click handler */
  onPress?: () => void;
  /** Accessibility label */
  accessibilityLabel?: string;
  /** Accessibility hint */
  accessibilityHint?: string;
  /** Whether the icon is accessible */
  accessible?: boolean;
  /** Test ID for testing */
  testID?: string;
  /** Color of the icon */
  color?: string;
  /** Background color */
  backgroundColor?: string;
  /** Border radius */
  borderRadius?: number;
  /** Padding around the icon */
  padding?: number;
  /** Margin around the icon */
  margin?: number;
}

/** Icon information interface */
export interface IconInfo {
  /** Display name of the icon */
  name: string;
  /** Icon slug */
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

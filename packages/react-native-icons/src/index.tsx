import React from 'react';
import { Text, TextProps } from 'react-native';

// === Import and export all icons ===
export * from './regular-icons';
export * from './filled-icons';

// === Import and export utility functions ===
export { 
  createIconComponent, 
  getIconChar, 
  getIconClass, 
  getFontFamily
} from './utils';

// === Type export ===
export type { IconProps } from './utils';

// === IconUtils export ===
export { default as IconUtils } from './IconUtils';

// === Type export ===
export type { IconData } from './IconUtils';
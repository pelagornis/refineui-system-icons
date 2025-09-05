import React from 'react';

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

// === IconUtils export ===
export { default as IconUtils } from './IconUtils';

// === Type export ===
export type { IconData } from './IconUtils';

// === IconProps interface export ===
export interface IconProps {
  size?: number;
  color?: string;
  style?: 'regular' | 'filled';
  className?: string;
  onClick?: () => void;
  [key: string]: any;
}
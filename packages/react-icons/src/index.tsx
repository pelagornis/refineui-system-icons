import React from 'react';

// === 모든 아이콘들을 import 및 export ===
export * from './regular-icons';
export * from './filled-icons';

// === 유틸리티 함수들 import 및 export ===
export { 
  createIconComponent, 
  getIconChar, 
  getIconClass, 
  getFontFamily 
} from './utils';

// === IconUtils export ===
export { default as IconUtils } from './IconUtils';

// === 타입 export ===
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
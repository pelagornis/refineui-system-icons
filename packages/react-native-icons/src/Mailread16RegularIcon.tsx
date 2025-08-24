import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Mailread16RegularIcon: React.FC<IconProps> = ({ 
  size = 16, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <Svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 16 16"
      fill="none"
      {{...props}}
    >
      width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.95328 3.1011C8.18896 2.96635 8.47832 2.9663 8.71405 3.10095L13.3315 5.73851C13.5392 5.85718 13.6674 6.07809 13.6674 6.31736V12.9C13.6674 13.3234 13.3242 13.6667 12.9008 13.6667H3.76663C3.34323 13.6667 3 13.3234 3 12.9V6.31992C3 6.08075 3.12812 5.85991 3.33575 5.7412L7.95328 3.1011ZM8.41652 3.92904C8.36528 3.89977 8.30237 3.89978 8.25114 3.92908L4.46036 6.09647C4.35491 6.15676 4.3473 6.30597 4.44607 6.37667L8.23596 9.0898C8.29398 9.13134 8.37201 9.13133 8.43002 9.08978L12.2213 6.37438C12.32 6.30365 12.3124 6.15443 12.2069 6.09418L8.41652 3.92904ZM12.8008 7.02527L8.77941 9.90552C8.51256 10.0966 8.15365 10.0967 7.88676 9.90562L3.86662 7.02766V12.8H12.8008V7.02527Z" fill="black"/>
    </Svg>
  );
};

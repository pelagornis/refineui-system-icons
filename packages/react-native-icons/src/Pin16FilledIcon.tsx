import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Pin16FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.84595 8.82286C3.50755 8.47797 3.63519 7.89161 4.08494 7.72493L6.47237 6.84012C6.62966 6.78182 6.75904 6.6643 6.83389 6.51173L8.19501 3.73727C8.59435 2.92327 9.65878 2.74722 10.2902 3.39074L13.2833 6.44125C13.9147 7.08478 13.742 8.16963 12.9433 8.57663L10.221 9.96386C10.0713 10.0401 9.95603 10.172 9.89884 10.3323L9.03068 12.7656C8.86713 13.2239 8.29181 13.354 7.95341 13.0091L6.12634 11.147L3.65412 13.6667H3V13L5.47223 10.4803L3.84595 8.82286Z" fill="black"/>
    </Svg>
  );
};

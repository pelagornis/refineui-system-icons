import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Keyboardoption16FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M3.66661 5C3.29845 5 3 5.29845 3 5.6666C3 6.03475 3.29845 6.3332 3.66661 6.3332H6.41128C6.53887 6.3332 6.65527 6.40603 6.71105 6.52078L9.03011 11.2915C9.14167 11.521 9.37446 11.6667 9.62964 11.6667H13.0001C13.3682 11.6667 13.6667 11.3682 13.6667 11.0001C13.6667 10.6319 13.3682 10.3335 13.0001 10.3335H10.2554C10.1278 10.3335 10.0114 10.2606 9.95562 10.1459L7.63656 5.37517C7.525 5.14567 7.29221 5 7.03702 5H3.66661Z" fill="black"/>
<path d="M9.26666 5C8.8985 5 8.60005 5.29845 8.60005 5.6666C8.60005 6.03475 8.8985 6.3332 9.26666 6.3332H13C13.3682 6.3332 13.6667 6.03475 13.6667 5.6666C13.6667 5.29845 13.3682 5 13 5H9.26666Z" fill="black"/>
    </Svg>
  );
};

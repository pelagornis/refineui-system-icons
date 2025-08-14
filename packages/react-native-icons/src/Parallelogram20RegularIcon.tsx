import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Parallelogram20RegularIcon: React.FC<IconProps> = ({ 
  size = 20, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <Svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 20 20"
      fill="none"
      {{...props}}
    >
      width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.5128 5.76345C6.72232 5.30114 7.21365 5 7.75841 5H14.9825C15.9454 5 16.5985 5.90059 16.2281 6.71776L12.8205 14.2366C12.611 14.6989 12.1197 15 11.5749 15H4.35081C3.3879 15 2.73485 14.0994 3.1052 13.2822L6.5128 5.76345ZM7.75841 5.97744C7.64286 5.97744 7.53864 6.04132 7.49419 6.13939L4.08659 13.6582C4.00803 13.8315 4.14656 14.0226 4.35081 14.0226H11.5749C11.6905 14.0226 11.7947 13.9587 11.8391 13.8606L15.2467 6.34182C15.3253 6.16848 15.1868 5.97744 14.9825 5.97744H7.75841Z" fill="black"/>
    </Svg>
  );
};

import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Doctor16FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M6.70776 3C6.28426 3 5.94095 3.34331 5.94095 3.76681V5.77425C5.94095 5.86632 5.86632 5.94095 5.77425 5.94095H3.76681C3.34331 5.94095 3 6.28426 3 6.70776V9.96224C3 10.3857 3.34331 10.729 3.76681 10.729H5.77425C5.86632 10.729 5.94095 10.8037 5.94095 10.8957V12.9032C5.94095 13.3267 6.28426 13.67 6.70776 13.67H9.96224C10.3857 13.67 10.729 13.3267 10.729 12.9032V10.8957C10.729 10.8037 10.8037 10.729 10.8957 10.729H12.9032C13.3267 10.729 13.67 10.3857 13.67 9.96224V6.70776C13.67 6.28426 13.3267 5.94095 12.9032 5.94095H10.8957C10.8037 5.94095 10.729 5.86632 10.729 5.77425V3.76681C10.729 3.34331 10.3857 3 9.96224 3H6.70776Z" fill="black"/>
    </Svg>
  );
};

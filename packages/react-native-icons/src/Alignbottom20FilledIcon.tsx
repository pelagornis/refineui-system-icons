import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Alignbottom20FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M3 15.7943C3 15.4951 3.24259 15.2525 3.54183 15.2525H15.7915C16.0907 15.2525 16.3333 15.4951 16.3333 15.7943C16.3333 16.0935 16.0907 16.3361 15.7915 16.3361H3.54183C3.24259 16.3361 3 16.0935 3 15.7943Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.7713 14.4708C10.8506 14.4708 10.1042 13.7244 10.1042 12.8036V7.31428C10.1042 6.39353 10.8506 5.64711 11.7713 5.64711H13.2494C14.1701 5.64711 14.9165 6.39352 14.9165 7.31428V12.8036C14.9165 13.7244 14.1701 14.4708 13.2494 14.4708H11.7713Z" fill="black"/>
<path d="M6.08399 14.4708C5.16324 14.4708 4.41682 13.7244 4.41682 12.8036L4.41682 4.66717C4.41682 3.74642 5.16324 3 6.08399 3L7.56202 3C8.48277 3 9.22919 3.74642 9.22919 4.66717L9.22919 12.8036C9.22919 13.7244 8.48277 14.4708 7.56202 14.4708H6.08399Z" fill="black"/>
    </Svg>
  );
};

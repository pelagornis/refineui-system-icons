import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Wifi424RegularIcon: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <Svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 24 24"
      fill="none"
      {{...props}}
    >
      width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.3479 18.2254C13.0245 18.2254 13.5729 17.6769 13.5729 17.0004C13.5729 16.3238 13.0245 15.7754 12.3479 15.7754C11.6714 15.7754 11.1229 16.3238 11.1229 17.0004C11.1229 17.6769 11.6714 18.2254 12.3479 18.2254Z" fill="black"/>
    </Svg>
  );
};

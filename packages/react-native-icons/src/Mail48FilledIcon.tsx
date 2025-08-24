import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Mail48FilledIcon: React.FC<IconProps> = ({ 
  size = 48, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <Svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 48 48"
      fill="none"
      {{...props}}
    >
      width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M39.3496 34C39.3496 34.7456 38.7456 35.3496 38 35.3496H10C9.25442 35.3496 8.65039 34.7456 8.65039 34V14.9248L21.6299 24.6602C23.0343 25.7135 24.9657 25.7135 26.3701 24.6602L39.3496 14.9248V34ZM35.8828 12.6504L24.0303 21.54C24.0125 21.5534 23.9875 21.5534 23.9697 21.54L12.1172 12.6504H35.8828Z" fill="black" stroke="black" stroke-width="1.3"/>
    </Svg>
  );
};

import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Cursor48RegularIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.9177 8.11743C9.18705 7.54054 7.54054 9.18705 8.11743 10.9177L17.307 38.4862C17.9617 40.4505 20.7143 40.5211 21.4688 38.5929L25.5791 28.0888C26.029 26.9388 26.9389 26.029 28.0888 25.579L38.5929 21.4687C40.5211 20.7142 40.4505 17.9617 38.4862 17.3069L10.9177 8.11743ZM10.8283 10.8282L19.4362 36.6521L23.1578 27.1414C23.8721 25.3161 25.3161 23.872 27.1414 23.1578L36.6521 19.4362L10.8283 10.8282Z" fill="black"/>
    </Svg>
  );
};

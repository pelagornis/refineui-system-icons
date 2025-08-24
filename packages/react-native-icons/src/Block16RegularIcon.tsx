import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Block16RegularIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.6667 8.33333C13.6667 11.2789 11.2789 13.6667 8.33333 13.6667C5.38781 13.6667 3 11.2789 3 8.33333C3 5.38781 5.38781 3 8.33333 3C11.2789 3 13.6667 5.38781 13.6667 8.33333ZM11.0407 11.6535C11.1103 11.7231 11.1049 11.8377 11.0264 11.8971C10.2777 12.4638 9.34477 12.8 8.33333 12.8C5.86646 12.8 3.86667 10.8002 3.86667 8.33333C3.86667 7.3219 4.20284 6.38899 4.76955 5.64023C4.82894 5.56177 4.94356 5.55639 5.01314 5.62597L11.0407 11.6535ZM11.8971 11.0264C11.8377 11.1049 11.7231 11.1103 11.6535 11.0407L5.62597 5.01314C5.55639 4.94356 5.56177 4.82894 5.64023 4.76955C6.38899 4.20284 7.3219 3.86667 8.33333 3.86667C10.8002 3.86667 12.8 5.86646 12.8 8.33333C12.8 9.34477 12.4638 10.2777 11.8971 11.0264Z" fill="black"/>
    </Svg>
  );
};

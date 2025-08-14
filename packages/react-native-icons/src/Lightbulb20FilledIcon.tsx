import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Lightbulb20FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M5 8C5 9.60317 5.75451 11.0301 6.92781 11.9451C7.06219 12.0499 7.25446 12.5369 7.46748 13.1508C7.49669 13.2349 7.57586 13.2917 7.66495 13.2917H12.3351C12.4241 13.2917 12.5033 13.2349 12.5325 13.1508C12.7455 12.5369 12.9378 12.0499 13.0722 11.9451C14.2455 11.0301 15 9.60317 15 8C15 5.23858 12.7614 3 10 3C7.23858 3 5 5.23858 5 8Z" fill="black"/>
<path d="M11.25 16.3333C11.4326 16.3333 11.7246 15.5531 12.0303 14.6491C12.0758 14.5144 11.9754 14.375 11.8332 14.375H8.16682C8.02461 14.375 7.92416 14.5144 7.96971 14.6491C8.27542 15.5531 8.56736 16.3333 8.75 16.3333H11.25Z" fill="black"/>
    </Svg>
  );
};

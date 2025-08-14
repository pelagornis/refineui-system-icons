import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Piano24FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M13 12.5V4.5C13 4.22386 12.7761 4 12.5 4H11.5C11.2239 4 11 4.22386 11 4.5V12.5C11 13.0395 10.7152 13.5125 10.2877 13.7768C10.206 13.8273 10.15 13.9133 10.15 14.0093V19.5C10.15 19.7761 10.3739 20 10.65 20H13.35C13.6261 20 13.85 19.7761 13.85 19.5V14.0093C13.85 13.9133 13.794 13.8273 13.7123 13.7768C13.2848 13.5125 13 13.0395 13 12.5Z" fill="black"/>
<path d="M16.5 4C16.2239 4 16 4.22386 16 4.5V12.5C16 13.0395 15.7152 13.5125 15.2877 13.7768C15.206 13.8273 15.15 13.9133 15.15 14.0093V19.5C15.15 19.7761 15.3739 20 15.65 20H18C19.1046 20 20 19.1046 20 18V6C20 4.89543 19.1046 4 18 4H16.5Z" fill="black"/>
<path d="M8.35 20C8.62614 20 8.85 19.7761 8.85 19.5V14.0093C8.85 13.9133 8.79398 13.8273 8.7123 13.7768C8.28482 13.5125 8 13.0395 8 12.5V4.5C8 4.22386 7.77614 4 7.5 4H6C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20H8.35Z" fill="black"/>
    </Svg>
  );
};

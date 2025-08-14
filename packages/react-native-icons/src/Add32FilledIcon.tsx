import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Add32FilledIcon: React.FC<IconProps> = ({ 
  size = 32, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <Svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 32 32"
      fill="none"
      {{...props}}
    >
      width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.2 14.3319C14.2736 14.3319 14.3333 14.2722 14.3333 14.1986V6.33312C14.3333 5.59686 14.9303 5 15.6667 5C16.403 5 17 5.59686 17 6.33312V14.1986C17 14.2722 17.0597 14.3319 17.1333 14.3319H25C25.7364 14.3319 26.3333 14.9287 26.3333 15.665C26.3333 16.4013 25.7364 16.9981 25 16.9981H17.1333C17.0597 16.9981 17 17.0578 17 17.1314V24.9969C17 25.7331 16.403 26.33 15.6667 26.33C14.9303 26.33 14.3333 25.7331 14.3333 24.9969V17.1314C14.3333 17.0578 14.2736 16.9981 14.2 16.9981H6.33333C5.59695 16.9981 5 16.4013 5 15.665C5 14.9287 5.59695 14.3319 6.33333 14.3319H14.2Z" fill="black"/>
    </Svg>
  );
};

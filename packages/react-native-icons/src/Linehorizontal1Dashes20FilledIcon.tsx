import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Linehorizontal1Dashes20FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M3 9.83327C3 9.37307 3.37307 9 3.83327 9H4.8055C5.2657 9 5.63876 9.37307 5.63876 9.83327C5.63876 10.2935 5.2657 10.6665 4.8055 10.6665H3.83327C3.37307 10.6665 3 10.2935 3 9.83327Z" fill="black"/>
<path d="M5.9167 9.83327C5.9167 9.37307 6.28977 9 6.74997 9H8.69443C9.15463 9 9.5277 9.37307 9.5277 9.83327C9.5277 10.2935 9.15463 10.6665 8.69443 10.6665H6.74997C6.28977 10.6665 5.9167 10.2935 5.9167 9.83327Z" fill="black"/>
<path d="M9.80564 9.83327C9.80564 9.37307 10.1787 9 10.6389 9H12.5834C13.0436 9 13.4166 9.37307 13.4166 9.83327C13.4166 10.2935 13.0436 10.6665 12.5834 10.6665H10.6389C10.1787 10.6665 9.80564 10.2935 9.80564 9.83327Z" fill="black"/>
<path d="M13.6946 9.83327C13.6946 9.37307 14.0676 9 14.5278 9H15.5001C15.9603 9 16.3333 9.37307 16.3333 9.83327C16.3333 10.2935 15.9603 10.6665 15.5001 10.6665H14.5278C14.0676 10.6665 13.6946 10.2935 13.6946 9.83327Z" fill="black"/>
    </Svg>
  );
};

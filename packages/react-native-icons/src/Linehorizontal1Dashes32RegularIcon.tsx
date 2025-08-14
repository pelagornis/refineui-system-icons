import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Linehorizontal1Dashes32RegularIcon: React.FC<IconProps> = ({ 
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
<path d="M5 15.8666C5 15.388 5.38797 15 5.86656 15H7.49991C7.9785 15 8.36647 15.388 8.36647 15.8666C8.36647 16.3452 7.9785 16.7331 7.49991 16.7331H5.86656C5.38797 16.7331 5 16.3452 5 15.8666Z" fill="black"/>
<path d="M9.90005 15.8666C9.90005 15.388 10.288 15 10.7666 15H14.0333C14.5119 15 14.8999 15.388 14.8999 15.8666C14.8999 16.3452 14.5119 16.7331 14.0333 16.7331H10.7666C10.288 16.7331 9.90005 16.3452 9.90005 15.8666Z" fill="black"/>
<path d="M16.4335 15.8666C16.4335 15.388 16.8214 15 17.3 15H20.5667C21.0453 15 21.4333 15.388 21.4333 15.8666C21.4333 16.3452 21.0453 16.7331 20.5667 16.7331H17.3C16.8214 16.7331 16.4335 16.3452 16.4335 15.8666Z" fill="black"/>
<path d="M22.9669 15.8666C22.9669 15.388 23.3548 15 23.8334 15H25.4668C25.9454 15 26.3333 15.388 26.3333 15.8666C26.3333 16.3452 25.9454 16.7331 25.4668 16.7331H23.8334C23.3548 16.7331 22.9669 16.3452 22.9669 15.8666Z" fill="black"/>
    </Svg>
  );
};

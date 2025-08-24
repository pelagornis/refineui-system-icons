import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Kotlin28FilledIcon: React.FC<IconProps> = ({ 
  size = 28, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <Svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 28 28"
      fill="none"
      {{...props}}
    >
      width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22.3609 5C23.5188 5 24.0862 6.28108 23.2506 7.00888L15.496 13.7636L6.08194 21.7697C5.67145 22.1188 5 21.8546 5 21.3439V15.4406C5 15.2858 5.06773 15.1374 5.18829 15.028L16.0488 5.17082C16.1693 5.06144 16.3327 5 16.5031 5H22.3609Z" fill="black"/>
<path d="M23.2708 21.663C24.1034 22.3917 23.5353 23.67 22.3788 23.67H7.89629C7.31359 23.67 7.0317 23.0224 7.45697 22.6608L15.6099 15.7272C15.8596 15.5148 16.2489 15.5173 16.4952 15.733L23.2708 21.663Z" fill="black"/>
<path d="M12.3428 5C12.9153 5 13.202 5.62853 12.7971 5.99605L6.09696 12.0772C5.6921 12.4447 5 12.1844 5 11.6646V6.16688C5 5.52243 5.57542 5 6.28525 5H12.3428Z" fill="black"/>
    </Svg>
  );
};

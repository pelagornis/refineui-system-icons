import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Hourglassthreequarter16FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.05427 3C3.20686 3 2.7069 3.90303 3.187 4.56653L5.50264 7.76681C5.74955 8.10806 5.74955 8.55862 5.50264 8.89987L3.187 12.1002C2.7069 12.7637 3.20686 13.6667 4.05427 13.6667H11.2791C12.1265 13.6667 12.6264 12.7637 12.1463 12.1002L9.83069 8.89987C9.58378 8.55862 9.58378 8.10806 9.83069 7.76681L12.1463 4.56653C12.6264 3.90303 12.1265 3 11.2791 3H4.05427ZM8.86857 9.50286C8.35091 8.80583 8.34208 7.85443 8.84672 7.14792L9.2902 6.52709C9.44776 6.30646 9.29008 6.00001 9.01892 6.00001H6.31441C6.04329 6.00001 5.88558 6.30646 6.04317 6.52709L6.48661 7.14792C6.99125 7.85443 6.98242 8.80584 6.46476 9.50286L4.61193 11.9977C4.44429 12.217 4.6007 12.5334 4.87679 12.5334H10.4565C10.7326 12.5334 10.889 12.217 10.7214 11.9977L8.86857 9.50286Z" fill="black"/>
    </Svg>
  );
};

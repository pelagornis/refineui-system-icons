import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Togglemultiple24RegularIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M16 9.75C17.1046 9.75 18 8.85457 18 7.75C18 6.64543 17.1046 5.75 16 5.75C14.8954 5.75 14 6.64543 14 7.75C14 8.85457 14.8954 9.75 16 9.75ZM16 8.45C16.3866 8.45 16.7 8.1366 16.7 7.75C16.7 7.3634 16.3866 7.05 16 7.05C15.6134 7.05 15.3 7.3634 15.3 7.75C15.3 8.1366 15.6134 8.45 16 8.45Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M4 7.75C4 5.67893 5.67893 4 7.75 4H16.25C18.3211 4 20 5.67893 20 7.75C20 9.82107 18.3211 11.5 16.25 11.5H7.75C5.67893 11.5 4 9.82107 4 7.75ZM7.75 5.3H16.25C17.6031 5.3 18.7 6.3969 18.7 7.75C18.7 9.1031 17.6031 10.2 16.25 10.2H7.75C6.3969 10.2 5.3 9.1031 5.3 7.75C5.3 6.3969 6.3969 5.3 7.75 5.3Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10 16.25C10 17.3546 9.10457 18.25 8 18.25C6.89543 18.25 6 17.3546 6 16.25C6 15.1454 6.89543 14.25 8 14.25C9.10457 14.25 10 15.1454 10 16.25ZM8.7 16.25C8.7 16.6366 8.3866 16.95 8 16.95C7.6134 16.95 7.3 16.6366 7.3 16.25C7.3 15.8634 7.6134 15.55 8 15.55C8.3866 15.55 8.7 15.8634 8.7 16.25Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M4 16.25C4 14.1789 5.67893 12.5 7.75 12.5H16.25C18.3211 12.5 20 14.1789 20 16.25C20 18.3211 18.3211 20 16.25 20H7.75C5.67893 20 4 18.3211 4 16.25ZM7.75 13.8H16.25C17.6031 13.8 18.7 14.8969 18.7 16.25C18.7 17.6031 17.6031 18.7 16.25 18.7H7.75C6.3969 18.7 5.3 17.6031 5.3 16.25C5.3 14.8969 6.3969 13.8 7.75 13.8Z" fill="black"/>
    </Svg>
  );
};

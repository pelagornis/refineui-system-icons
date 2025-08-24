import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Openoff24RegularIcon: React.FC<IconProps> = ({ 
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
<path d="M4.10962 3.19038C3.85578 2.93654 3.44422 2.93654 3.19038 3.19038C2.93654 3.44422 2.93654 3.85578 3.19038 4.10962L19.8908 20.8101C20.1447 21.0639 20.5562 21.0639 20.8101 20.8101C21.0639 20.5562 21.0639 20.1447 20.8101 19.8908L4.10962 3.19038Z" fill="black"/>
<path d="M4 18V6L5.29922 7.29922V18C5.29922 18.3866 5.61243 18.7 5.9988 18.7H16.7L18 20L17.9916 20H5.9988C4.89489 20 4 19.1046 4 18Z" fill="black"/>
<path d="M6 4L7.3 5.3H12.345C12.7037 5.3 12.9946 5.00899 12.9946 4.65C12.9946 4.29102 12.7037 4 12.345 4H6Z" fill="black"/>
<path d="M12.5426 10.5426L13.4616 11.4616L18.7008 6.21924V8.7C18.7008 9.05898 18.9916 9.35 19.3504 9.35C19.7092 9.35 20 9.05898 20 8.7V4.65C20 4.29101 19.7092 4 19.3504 4H15.3028C14.9441 4 14.6532 4.29102 14.6532 4.65C14.6532 5.00899 14.9441 5.3 15.3028 5.3H17.7821L12.5426 10.5426Z" fill="black"/>
<path d="M19.9904 11.65V17.9904L18.6912 16.6912V11.65C18.6912 11.291 18.982 11 19.3408 11C19.6995 11 19.9904 11.291 19.9904 11.65Z" fill="black"/>
    </Svg>
  );
};

import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Openoff24FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M4 18V6L6 8V17.5C6 17.7761 6.22386 18 6.5 18H16L18 20H6C4.89543 20 4 19.1046 4 18Z" fill="black"/>
<path d="M6 4L8 6H12C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4H6Z" fill="black"/>
<path d="M12.2929 10.2929L13.7071 11.7071L17.8293 7.58492C17.8923 7.52193 18 7.56654 18 7.65563V9C18 9.55228 18.4477 10 19 10C19.5523 10 20 9.55228 20 9V5C20 4.44772 19.5523 4 19 4H15C14.4477 4 14 4.44772 14 5C14 5.55228 14.4477 6 15 6H16.3444C16.4335 6 16.4781 6.10771 16.4151 6.17071L12.2929 10.2929Z" fill="black"/>
<path d="M20 18L18 16V12C18 11.4477 18.4477 11 19 11C19.5523 11 20 11.4477 20 12V18Z" fill="black"/>
    </Svg>
  );
};

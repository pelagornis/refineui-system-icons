import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Apptitle24RegularIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.00466 6C5.00466 4.89543 5.90009 4 7.00466 4H16.0047C17.1092 4 18.0047 4.89543 18.0047 6V15C18.0047 16.1046 17.1092 17 16.0047 17H7.00466C5.90009 17 5.00466 16.1046 5.00466 15V6ZM7.00466 5.3H16.0047C16.3913 5.3 16.7047 5.6134 16.7047 6V15C16.7047 15.3866 16.3913 15.7 16.0047 15.7H7.00466C6.61806 15.7 6.30466 15.3866 6.30466 15V6C6.30466 5.6134 6.61806 5.3 7.00466 5.3Z" fill="black"/>
<path d="M5 19.3503C5 19.7092 5.29101 20.0002 5.65 20.0002H17.35C17.709 20.0002 18 19.7092 18 19.3503C18 18.9913 17.709 18.7003 17.35 18.7003H5.65C5.29101 18.7003 5 18.9913 5 19.3503Z" fill="black"/>
    </Svg>
  );
};

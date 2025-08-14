import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Keyboardreturn48RegularIcon: React.FC<IconProps> = ({ 
  size = 48, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <Svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 48 48"
      fill="none"
      {{...props}}
    >
      width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.184 14.4406C20.6742 14.9792 20.6205 15.8004 20.064 16.2749L12.5279 22.7003H37.3142V16.1697C37.3142 15.4519 37.9155 14.87 38.6571 14.87C39.3988 14.87 40 15.4519 40 16.1697V23.3002C40 24.4045 39.075 25.2997 37.934 25.2997H12.5279L20.064 31.7251C20.6205 32.1996 20.6742 33.0208 20.184 33.5594C19.6937 34.098 18.8451 34.15 18.2886 33.6755L8.70029 25.5003C7.76657 24.7042 7.76657 23.2958 8.70029 22.4997L18.2886 14.3245C18.8451 13.85 19.6937 13.902 20.184 14.4406Z" fill="black"/>
    </Svg>
  );
};

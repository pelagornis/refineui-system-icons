import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Star32FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.2919 5.84274C14.8583 4.71909 16.475 4.71908 17.0414 5.84274L19.202 10.1286C19.3975 10.5165 19.7504 10.8035 20.1723 10.9176L25.1999 12.2776C26.3827 12.5975 26.7303 14.0949 25.8076 14.8957L22.4597 17.8013C22.0589 18.1492 21.8682 18.6781 21.9557 19.1992L22.8557 24.555C23.0622 25.784 21.7758 26.7265 20.6522 26.1692L16.3541 24.0377C15.9213 23.8231 15.412 23.8231 14.9793 24.0377L10.6812 26.1692C9.55758 26.7264 8.27112 25.784 8.47764 24.555L9.3776 19.1992C9.46516 18.6781 9.27447 18.1492 8.87361 17.8013L5.52573 14.8957C4.60304 14.0949 4.95062 12.5975 6.13346 12.2776L11.161 10.9176C11.5829 10.8035 11.9358 10.5165 12.1314 10.1286L14.2919 5.84274Z" fill="black"/>
    </Svg>
  );
};

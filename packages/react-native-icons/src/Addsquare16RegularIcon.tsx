import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Addsquare16RegularIcon: React.FC<IconProps> = ({ 
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
      width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.25 6.25C4.11193 6.25 4 6.13807 4 6C4 5.86193 4.11193 5.75 4.25 5.75H5.75V4.25C5.75 4.11193 5.86193 4 6 4C6.13807 4 6.25 4.11193 6.25 4.25V5.75H7.75C7.88807 5.75 8 5.86193 8 6C8 6.13807 7.88807 6.25 7.75 6.25H6.25V7.75C6.25 7.88807 6.13807 8 6 8C5.86193 8 5.75 7.88807 5.75 7.75V6.25H4.25Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M2 3.5C2 2.67157 2.67157 2 3.5 2H8.5C9.32843 2 10 2.67157 10 3.5V8.5C10 9.32843 9.32843 10 8.5 10H3.5C2.67157 10 2 9.32843 2 8.5V3.5ZM3.5 2.65H8.5C8.96944 2.65 9.35 3.03056 9.35 3.5V8.5C9.35 8.96944 8.96944 9.35 8.5 9.35H3.5C3.03056 9.35 2.65 8.96944 2.65 8.5V3.5C2.65 3.03056 3.03056 2.65 3.5 2.65Z" fill="black"/>
    </Svg>
  );
};

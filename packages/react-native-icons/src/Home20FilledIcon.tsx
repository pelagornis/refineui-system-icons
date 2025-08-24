import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Home20FilledIcon: React.FC<IconProps> = ({ 
  size = 20, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <Svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 20 20"
      fill="none"
      {{...props}}
    >
      width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.6109 6.73008L10.6109 3.29321C10.0421 2.90226 9.29121 2.90226 8.72245 3.29321L3.72245 6.73008C3.27019 7.04095 3 7.55451 3 8.10323V13.8921C3 15.2726 4.11929 16.3917 5.5 16.3917H7.58333C8.04357 16.3917 8.41667 16.0186 8.41667 15.5585V13.0589C8.41667 12.5988 8.78976 12.2258 9.25 12.2258H10.0833C10.5436 12.2258 10.9167 12.5988 10.9167 13.0589V15.5585C10.9167 16.0186 11.2898 16.3917 11.75 16.3917H13.8333C15.214 16.3917 16.3333 15.2726 16.3333 13.8921V8.10323C16.3333 7.55451 16.0631 7.04095 15.6109 6.73008Z" fill="black"/>
    </Svg>
  );
};

import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Notebook24FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M19 7.25C19 6.89102 18.709 6.6 18.35 6.6C17.991 6.6 17.7 6.89101 17.7 7.25V8.75C17.7 9.10898 17.991 9.4 18.35 9.4C18.709 9.4 19 9.10898 19 8.75V7.25Z" fill="black"/>
<path d="M18.35 10.6C18.709 10.6 19 10.891 19 11.25V12.75C19 13.109 18.709 13.4 18.35 13.4C17.991 13.4 17.7 13.109 17.7 12.75V11.25C17.7 10.891 17.991 10.6 18.35 10.6Z" fill="black"/>
<path d="M19 15.25C19 14.891 18.709 14.6 18.35 14.6C17.991 14.6 17.7 14.891 17.7 15.25V16.75C17.7 17.109 17.991 17.4 18.35 17.4C18.709 17.4 19 17.109 19 16.75V15.25Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5 5C5 4.44772 5.44772 4 6 4H16C16.5523 4 17 4.44772 17 5V19C17 19.5523 16.5523 20 16 20H6C5.44772 20 5 19.5523 5 19V5ZM9 6C7.89543 6 7 6.89543 7 8C7 9.10457 7.89543 10 9 10H13C14.1046 10 15 9.10457 15 8C15 6.89543 14.1046 6 13 6H9Z" fill="black"/>
    </Svg>
  );
};

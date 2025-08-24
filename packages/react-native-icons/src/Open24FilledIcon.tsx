import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Open24FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4H6C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20H18C19.1046 20 20 19.1046 20 18V12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12V17.5C18 17.7761 17.7761 18 17.5 18H6.5C6.22386 18 6 17.7761 6 17.5V6.5C6 6.22386 6.22386 6 6.5 6H12Z" fill="black"/>
<path d="M15 4C14.4477 4 14 4.44772 14 5C14 5.55228 14.4477 6 15 6H16.3444C16.4335 6 16.4781 6.10771 16.4151 6.17071L12 10.5858C11.6095 10.9763 11.6095 11.6095 12 12C12.3905 12.3905 13.0237 12.3905 13.4142 12L17.8293 7.58492C17.8923 7.52193 18 7.56654 18 7.65563V9C18 9.55228 18.4477 10 19 10C19.5523 10 20 9.55228 20 9V5C20 4.44772 19.5523 4 19 4H15Z" fill="black"/>
    </Svg>
  );
};

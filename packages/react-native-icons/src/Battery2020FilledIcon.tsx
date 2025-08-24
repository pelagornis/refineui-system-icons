import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Battery2020FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M3 7.66667C3 6.74619 3.74619 6 4.66667 6H13.4335C14.354 6 15.1002 6.74619 15.1002 7.66667V8.44648C15.7812 8.44648 16.3333 8.99858 16.3333 9.67963V10.6537C16.3333 11.3348 15.7812 11.8869 15.1002 11.8869V12.6667C15.1002 13.5871 14.354 14.3333 13.4335 14.3333H4.66667C3.74619 14.3333 3 13.5871 3 12.6667V7.66667ZM5.5 7.66667C5.03976 7.66667 4.66667 8.03976 4.66667 8.5V11.8333C4.66667 12.2936 5.03976 12.6667 5.5 12.6667H6C6.46024 12.6667 6.83333 12.2936 6.83333 11.8333V8.5C6.83333 8.03976 6.46024 7.66667 6 7.66667H5.5Z" fill="black"/>
    </Svg>
  );
};

import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Usb20RegularIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.66667 6.14225V3.84926C7.66667 3.38023 8.03976 3 8.5 3H11.8333C12.2936 3 12.6667 3.38023 12.6667 3.84926V6.14225C13.5871 6.14225 14.3333 6.9027 14.3333 7.84076V14.6348C14.3333 15.5729 13.5871 16.3333 12.6667 16.3333H7.66667C6.74619 16.3333 6 15.5729 6 14.6348V7.84076C6 6.9027 6.74619 6.14225 7.66667 6.14225ZM8.75 6.14225V4.10403H11.5833V6.14225L8.75 6.14225ZM7.66667 7.24629C7.3445 7.24628 7.08333 7.51244 7.08333 7.84076V14.6348C7.08333 14.9631 7.3445 15.2293 7.66667 15.2293H12.6667C12.9888 15.2293 13.25 14.9631 13.25 14.6348V7.84076C13.25 7.51244 12.9888 7.24628 12.6667 7.24629" fill="black"/>
    </Svg>
  );
};

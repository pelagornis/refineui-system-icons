import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Morecircle28FilledIcon: React.FC<IconProps> = ({ 
  size = 28, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <Svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 28 28"
      fill="none"
      {{...props}}
    >
      width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.3333 5C19.488 5 23.6667 9.17868 23.6667 14.3333C23.6667 19.488 19.488 23.6667 14.3333 23.6667C9.17868 23.6667 5 19.488 5 14.3333C5 9.17868 9.17868 5 14.3333 5ZM9.66667 13.1667C9.02233 13.1667 8.5 13.689 8.5 14.3333C8.5 14.9777 9.02233 15.5 9.66667 15.5C10.311 15.5 10.8333 14.9777 10.8333 14.3333C10.8333 13.689 10.311 13.1667 9.66667 13.1667ZM14.3333 13.1667C13.689 13.1667 13.1667 13.689 13.1667 14.3333C13.1667 14.9777 13.689 15.5 14.3333 15.5C14.9777 15.5 15.5 14.9777 15.5 14.3333C15.5 13.689 14.9777 13.1667 14.3333 13.1667ZM19 13.1667C18.3557 13.1667 17.8333 13.689 17.8333 14.3333C17.8333 14.9777 18.3557 15.5 19 15.5C19.6443 15.5 20.1667 14.9777 20.1667 14.3333C20.1667 13.689 19.6443 13.1667 19 13.1667Z" fill="black"/>
    </Svg>
  );
};

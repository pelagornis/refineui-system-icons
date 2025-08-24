import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Clock28FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.3333 23.6667C19.488 23.6667 23.6667 19.488 23.6667 14.3333C23.6667 9.17868 19.488 5 14.3333 5C9.17868 5 5 9.17868 5 14.3333C5 19.488 9.17868 23.6667 14.3333 23.6667ZM15.0917 9.08333C15.0917 8.66453 14.7522 8.32501 14.3333 8.32501C13.9145 8.32501 13.575 8.66453 13.575 9.08333V14.4058C13.575 14.5605 13.6364 14.7089 13.7458 14.8183L17.2971 18.3696C17.5933 18.6657 18.0734 18.6657 18.3695 18.3696C18.6657 18.0734 18.6657 17.5933 18.3695 17.2971L15.2625 14.1901C15.1532 14.0807 15.0917 13.9323 15.0917 13.7776V9.08333Z" fill="black"/>
    </Svg>
  );
};

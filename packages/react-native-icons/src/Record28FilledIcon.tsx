import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Record28FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.3333 23.6667C19.488 23.6667 23.6667 19.488 23.6667 14.3333C23.6667 9.17868 19.488 5 14.3333 5C9.17868 5 5 9.17868 5 14.3333C5 19.488 9.17868 23.6667 14.3333 23.6667ZM14.3333 20.1667C17.555 20.1667 20.1667 17.555 20.1667 14.3333C20.1667 11.1117 17.555 8.5 14.3333 8.5C11.1117 8.5 8.5 11.1117 8.5 14.3333C8.5 17.555 11.1117 20.1667 14.3333 20.1667Z" fill="black"/>
    </Svg>
  );
};

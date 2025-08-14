import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Keyboardtab16FilledIcon: React.FC<IconProps> = ({ 
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
      width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.82471 3.21617C7.57588 2.94473 7.15417 2.92645 6.88279 3.17533C6.61141 3.42422 6.59313 3.84603 6.84196 4.11747L9.48424 6.99985H3.66667C3.29848 6.99985 3 7.29839 3 7.66667C3 8.03494 3.29848 8.33348 3.66667 8.33348H9.48424L6.84196 11.2159C6.59313 11.4873 6.61141 11.9091 6.88279 12.158C7.15417 12.4069 7.57588 12.3886 7.82471 12.1172L11.4914 8.11732C11.7251 7.86236 11.7251 7.47097 11.4914 7.21602L7.82471 3.21617Z" fill="black"/>
<path d="M13.6667 3.66682C13.6667 3.29855 13.3682 3 13 3C12.6318 3 12.3333 3.29855 12.3333 3.66682V11.6665C12.3333 12.0348 12.6318 12.3333 13 12.3333C13.3682 12.3333 13.6667 12.0348 13.6667 11.6665V3.66682Z" fill="black"/>
    </Svg>
  );
};

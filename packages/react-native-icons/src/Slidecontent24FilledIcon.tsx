import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Slidecontent24FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M4 8C4 6.89543 4.89543 6 6 6H18C19.1046 6 20 6.89543 20 8V16C20 17.1046 19.1046 18 18 18H6C4.89543 18 4 17.1046 4 16V8ZM6.25 10C6.25 9.44772 6.69772 9 7.25 9H11.25C11.8023 9 12.25 9.44772 12.25 10V14C12.25 14.5523 11.8023 15 11.25 15H7.25C6.69772 15 6.25 14.5523 6.25 14V10ZM14 9.1C13.641 9.1 13.35 9.39102 13.35 9.75C13.35 10.109 13.641 10.4 14 10.4H17C17.359 10.4 17.65 10.109 17.65 9.75C17.65 9.39102 17.359 9.1 17 9.1H14ZM13.35 12C13.35 11.641 13.641 11.35 14 11.35H17C17.359 11.35 17.65 11.641 17.65 12C17.65 12.359 17.359 12.65 17 12.65H14C13.641 12.65 13.35 12.359 13.35 12ZM14 13.6C13.641 13.6 13.35 13.891 13.35 14.25C13.35 14.609 13.641 14.9 14 14.9H17C17.359 14.9 17.65 14.609 17.65 14.25C17.65 13.891 17.359 13.6 17 13.6H14Z" fill="black"/>
    </Svg>
  );
};

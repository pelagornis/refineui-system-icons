import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Pausecircle24FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM10.65 9C10.65 8.64102 10.359 8.35 10 8.35C9.64102 8.35 9.35 8.64102 9.35 9V15C9.35 15.359 9.64102 15.65 10 15.65C10.359 15.65 10.65 15.359 10.65 15V9ZM14.65 9C14.65 8.64102 14.359 8.35 14 8.35C13.641 8.35 13.35 8.64102 13.35 9V15C13.35 15.359 13.641 15.65 14 15.65C14.359 15.65 14.65 15.359 14.65 15V9Z" fill="black"/>
    </Svg>
  );
};

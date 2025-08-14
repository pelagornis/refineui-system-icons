import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Textboxalignbottomright24FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M6 4C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20H18C19.1046 20 20 19.1046 20 18V6C20 4.89543 19.1046 4 18 4H6ZM9.85 15.5C9.85 15.141 10.141 14.85 10.5 14.85H16.5C16.859 14.85 17.15 15.141 17.15 15.5C17.15 15.859 16.859 16.15 16.5 16.15H10.5C10.141 16.15 9.85 15.859 9.85 15.5ZM7.35 12C7.35 11.641 7.64102 11.35 8 11.35H16.5C16.859 11.35 17.15 11.641 17.15 12C17.15 12.359 16.859 12.65 16.5 12.65H8C7.64102 12.65 7.35 12.359 7.35 12Z" fill="black"/>
    </Svg>
  );
};

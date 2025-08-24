import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Textboxalignbottomcenter24RegularIcon: React.FC<IconProps> = ({ 
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
<path d="M7.1 12C7.1 11.641 7.39102 11.35 7.75 11.35H16.25C16.609 11.35 16.9 11.641 16.9 12C16.9 12.359 16.609 12.65 16.25 12.65H7.75C7.39102 12.65 7.1 12.359 7.1 12Z" fill="black"/>
<path d="M9 14.85C8.64102 14.85 8.35 15.141 8.35 15.5C8.35 15.859 8.64102 16.15 9 16.15H15C15.359 16.15 15.65 15.859 15.65 15.5C15.65 15.141 15.359 14.85 15 14.85H9Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6 4C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20H18C19.1046 20 20 19.1046 20 18V6C20 4.89543 19.1046 4 18 4H6ZM18 5.3H6C5.6134 5.3 5.3 5.6134 5.3 6V18C5.3 18.3866 5.6134 18.7 6 18.7H18C18.3866 18.7 18.7 18.3866 18.7 18V6C18.7 5.6134 18.3866 5.3 18 5.3Z" fill="black"/>
    </Svg>
  );
};

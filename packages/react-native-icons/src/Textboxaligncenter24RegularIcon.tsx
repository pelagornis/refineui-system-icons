import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Textboxaligncenter24RegularIcon: React.FC<IconProps> = ({ 
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
<path d="M7.1 10.25C7.1 9.89102 7.39102 9.6 7.75 9.6H16.25C16.609 9.6 16.9 9.89102 16.9 10.25C16.9 10.609 16.609 10.9 16.25 10.9H7.75C7.39102 10.9 7.1 10.609 7.1 10.25Z" fill="black"/>
<path d="M9 13.1C8.64102 13.1 8.35 13.391 8.35 13.75C8.35 14.109 8.64102 14.4 9 14.4H15C15.359 14.4 15.65 14.109 15.65 13.75C15.65 13.391 15.359 13.1 15 13.1H9Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6 4C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20H18C19.1046 20 20 19.1046 20 18V6C20 4.89543 19.1046 4 18 4H6ZM18 5.3H6C5.6134 5.3 5.3 5.6134 5.3 6V18C5.3 18.3866 5.6134 18.7 6 18.7H18C18.3866 18.7 18.7 18.3866 18.7 18V6C18.7 5.6134 18.3866 5.3 18 5.3Z" fill="black"/>
    </Svg>
  );
};

import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Textboxaligntopright24RegularIcon: React.FC<IconProps> = ({ 
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
<path d="M7.1 8.25C7.1 7.89102 7.39102 7.6 7.75 7.6H16.25C16.609 7.6 16.9 7.89102 16.9 8.25C16.9 8.60898 16.609 8.9 16.25 8.9H7.75C7.39102 8.9 7.1 8.60898 7.1 8.25Z" fill="black"/>
<path d="M10.25 11.1C9.89102 11.1 9.6 11.391 9.6 11.75C9.6 12.109 9.89102 12.4 10.25 12.4H16.25C16.609 12.4 16.9 12.109 16.9 11.75C16.9 11.391 16.609 11.1 16.25 11.1H10.25Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6 4C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20H18C19.1046 20 20 19.1046 20 18V6C20 4.89543 19.1046 4 18 4H6ZM18 5.3H6C5.6134 5.3 5.3 5.6134 5.3 6V18C5.3 18.3866 5.6134 18.7 6 18.7H18C18.3866 18.7 18.7 18.3866 18.7 18V6C18.7 5.6134 18.3866 5.3 18 5.3Z" fill="black"/>
    </Svg>
  );
};

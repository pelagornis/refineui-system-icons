import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Oven24RegularIcon: React.FC<IconProps> = ({ 
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
<path d="M10 8C10 8.55228 9.55228 9 9 9C8.44772 9 8 8.55228 8 8C8 7.44772 8.44772 7 9 7C9.55228 7 10 7.44772 10 8Z" fill="black"/>
<path d="M12 9C12.5523 9 13 8.55228 13 8C13 7.44772 12.5523 7 12 7C11.4477 7 11 7.44772 11 8C11 8.55228 11.4477 9 12 9Z" fill="black"/>
<path d="M16 8C16 8.55228 15.5523 9 15 9C14.4477 9 14 8.55228 14 8C14 7.44772 14.4477 7 15 7C15.5523 7 16 7.44772 16 8Z" fill="black"/>
<path d="M9.5 11.85C9.14102 11.85 8.85 12.141 8.85 12.5C8.85 12.859 9.14102 13.15 9.5 13.15H14.5C14.859 13.15 15.15 12.859 15.15 12.5C15.15 12.141 14.859 11.85 14.5 11.85H9.5Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7 11C7 10.4477 7.44772 10 8 10H16C16.5523 10 17 10.4477 17 11V16C17 16.5523 16.5523 17 16 17H8C7.44772 17 7 16.5523 7 16V11ZM8.8 15.7C8.52386 15.7 8.3 15.4761 8.3 15.2V11.8C8.3 11.5239 8.52386 11.3 8.8 11.3H15.2C15.4761 11.3 15.7 11.5239 15.7 11.8V15.2C15.7 15.4761 15.4761 15.7 15.2 15.7H8.8Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M4 6C4 4.89543 4.89543 4 6 4H18C19.1046 4 20 4.89543 20 6V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18V6ZM6 5.3H18C18.3866 5.3 18.7 5.6134 18.7 6V18C18.7 18.3866 18.3866 18.7 18 18.7H6C5.6134 18.7 5.3 18.3866 5.3 18V6C5.3 5.6134 5.6134 5.3 6 5.3Z" fill="black"/>
    </Svg>
  );
};

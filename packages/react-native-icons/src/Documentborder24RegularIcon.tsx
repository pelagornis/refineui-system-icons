import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Documentborder24RegularIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M8 7C8 6.44772 8.44772 6 9 6H15C15.5523 6 16 6.44772 16 7V17C16 17.5523 15.5523 18 15 18H9C8.44772 18 8 17.5523 8 17V7ZM9.8 16.7C9.52386 16.7 9.3 16.4761 9.3 16.2V7.8C9.3 7.52386 9.52386 7.3 9.8 7.3H14.2C14.4761 7.3 14.7 7.52386 14.7 7.8V16.2C14.7 16.4761 14.4761 16.7 14.2 16.7H9.8Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6 6C6 4.89543 6.89543 4 8 4H16C17.1046 4 18 4.89543 18 6V18C18 19.1046 17.1046 20 16 20H8C6.89543 20 6 19.1046 6 18V6ZM8 5.3H16C16.3866 5.3 16.7 5.6134 16.7 6V18C16.7 18.3866 16.3866 18.7 16 18.7H8C7.6134 18.7 7.3 18.3866 7.3 18V6C7.3 5.6134 7.6134 5.3 8 5.3Z" fill="black"/>
    </Svg>
  );
};

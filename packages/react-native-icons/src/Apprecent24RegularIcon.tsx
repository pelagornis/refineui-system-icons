import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Apprecent24RegularIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.5 6C16.5 4.89543 15.6046 4 14.5 4H9.5C8.39543 4 7.5 4.89543 7.5 6H6C4.89543 6 4 6.89543 4 8V16C4 17.1046 4.89543 18 6 18H7.5C7.5 19.1046 8.39543 20 9.5 20H14.5C15.6046 20 16.5 19.1046 16.5 18H18C19.1046 18 20 17.1046 20 16V8C20 6.89543 19.1046 6 18 6H16.5ZM14.5 5.3H9.5C9.1134 5.3 8.8 5.6134 8.8 6V7.3V16.7V18C8.8 18.3866 9.1134 18.7 9.5 18.7H14.5C14.8866 18.7 15.2 18.3866 15.2 18V16.7V7.3V6C15.2 5.6134 14.8866 5.3 14.5 5.3ZM16.5 16.7V7.3H18C18.3866 7.3 18.7 7.6134 18.7 8V16C18.7 16.3866 18.3866 16.7 18 16.7H16.5ZM6 16.7H7.5V7.3H6C5.6134 7.3 5.3 7.6134 5.3 8V16C5.3 16.3866 5.6134 16.7 6 16.7Z" fill="black"/>
    </Svg>
  );
};

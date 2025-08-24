import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Emojisurprise20FilledIcon: React.FC<IconProps> = ({ 
  size = 20, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <Svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 20 20"
      fill="none"
      {{...props}}
    >
      width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.66667 16.3333C13.3486 16.3333 16.3333 13.3486 16.3333 9.66667C16.3333 5.98477 13.3486 3 9.66667 3C5.98477 3 3 5.98477 3 9.66667C3 13.3486 5.98477 16.3333 9.66667 16.3333ZM7.16667 9.66667C7.6269 9.66667 8 9.29357 8 8.83333C8 8.3731 7.6269 8 7.16667 8C6.70643 8 6.33333 8.3731 6.33333 8.83333C6.33333 9.29357 6.70643 9.66667 7.16667 9.66667ZM13 8.83333C13 9.29357 12.6269 9.66667 12.1667 9.66667C11.7064 9.66667 11.3333 9.29357 11.3333 8.83333C11.3333 8.3731 11.7064 8 12.1667 8C12.6269 8 13 8.3731 13 8.83333ZM9.66667 13.8333C10.5871 13.8333 11.3333 13.0871 11.3333 12.1667C11.3333 11.2462 10.5871 10.5 9.66667 10.5C8.74619 10.5 8 11.2462 8 12.1667C8 13.0871 8.74619 13.8333 9.66667 13.8333Z" fill="black"/>
    </Svg>
  );
};

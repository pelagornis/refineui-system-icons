import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Textboxalignbottomright28RegularIcon: React.FC<IconProps> = ({ 
  size = 28, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <Svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 28 28"
      fill="none"
      {{...props}}
    >
      width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.90833 14.3333C8.90833 13.9145 9.24785 13.575 9.66667 13.575H19.5833C20.0021 13.575 20.3417 13.9145 20.3417 14.3333C20.3417 14.7521 20.0021 15.0917 19.5833 15.0917H9.66667C9.24785 15.0917 8.90833 14.7521 8.90833 14.3333Z" fill="black"/>
<path d="M12.5833 17.6583C12.1645 17.6583 11.825 17.9979 11.825 18.4167C11.825 18.8355 12.1645 19.175 12.5833 19.175H19.5833C20.0021 19.175 20.3417 18.8355 20.3417 18.4167C20.3417 17.9979 20.0021 17.6583 19.5833 17.6583H12.5833Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.33333 5C6.04467 5 5 6.04467 5 7.33333V21.3333C5 22.622 6.04467 23.6667 7.33333 23.6667H21.3333C22.622 23.6667 23.6667 22.622 23.6667 21.3333V7.33333C23.6667 6.04467 22.622 5 21.3333 5H7.33333ZM21.3333 6.51667H7.33333C6.8823 6.51667 6.51667 6.8823 6.51667 7.33333V21.3333C6.51667 21.7844 6.8823 22.15 7.33333 22.15H21.3333C21.7844 22.15 22.15 21.7844 22.15 21.3333V7.33333C22.15 6.8823 21.7844 6.51667 21.3333 6.51667Z" fill="black"/>
    </Svg>
  );
};

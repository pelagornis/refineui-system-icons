import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Ioschevronrtl28FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M16.5068 18.7665C15.9916 18.3798 15.8874 17.6488 16.274 17.1336L18.1128 14.6834C18.2685 14.476 18.2685 14.1907 18.1128 13.9833L16.274 11.5331C15.8874 11.0179 15.9916 10.2868 16.5068 9.9002C17.022 9.51357 17.7531 9.61779 18.1397 10.133L20.7665 13.6333C21.0778 14.0481 21.0778 14.6186 20.7665 15.0334L18.1397 18.5337C17.7531 19.0489 17.022 19.1531 16.5068 18.7665Z" fill="black"/>
    </Svg>
  );
};

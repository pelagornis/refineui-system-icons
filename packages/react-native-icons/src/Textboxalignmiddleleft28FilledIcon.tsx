import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Textboxalignmiddleleft28FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M5 7.33333C5 6.04467 6.04467 5 7.33333 5H21.3333C22.622 5 23.6667 6.04467 23.6667 7.33333V21.3333C23.6667 22.622 22.622 23.6667 21.3333 23.6667H7.33333C6.04467 23.6667 5 22.622 5 21.3333V7.33333ZM8.61667 12.2917C8.61667 11.8729 8.95618 11.5333 9.375 11.5333H19.2917C19.7105 11.5333 20.05 11.8729 20.05 12.2917C20.05 12.7105 19.7105 13.05 19.2917 13.05H9.375C8.95618 13.05 8.61667 12.7105 8.61667 12.2917ZM9.375 15.6167C8.95618 15.6167 8.61667 15.9562 8.61667 16.375C8.61667 16.7938 8.95618 17.1333 9.375 17.1333H16.375C16.7938 17.1333 17.1333 16.7938 17.1333 16.375C17.1333 15.9562 16.7938 15.6167 16.375 15.6167H9.375Z" fill="black"/>
    </Svg>
  );
};

import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Textboxalignmiddle28FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.33333 5C5.04467 5 4 6.04467 4 7.33333V21.3333C4 22.622 5.04467 23.6667 6.33333 23.6667H20.3333C21.622 23.6667 22.6667 22.622 22.6667 21.3333V7.33333C22.6667 6.04467 21.622 5 20.3333 5H6.33333ZM8.375 11.5333C7.95618 11.5333 7.61667 11.8729 7.61667 12.2917C7.61667 12.7105 7.95618 13.05 8.375 13.05H18.2917C18.7105 13.05 19.05 12.7105 19.05 12.2917C19.05 11.8729 18.7105 11.5333 18.2917 11.5333H8.375ZM8.375 15.6167C7.95618 15.6167 7.61667 15.9562 7.61667 16.375C7.61667 16.7938 7.95618 17.1333 8.375 17.1333H18.2917C18.7105 17.1333 19.05 16.7938 19.05 16.375C19.05 15.9562 18.7105 15.6167 18.2917 15.6167H8.375Z" fill="black"/>
    </Svg>
  );
};

import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Bookmark28FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M7 7.41942C7 6.08321 8.04467 5 9.33333 5H18.6667C19.9553 5 21 6.08321 21 7.41942V23.064C21 23.5768 20.4232 23.8569 20.0432 23.5287L14.3734 18.6295C14.1571 18.4426 13.8429 18.4426 13.6266 18.6295L7.95677 23.5287C7.57683 23.8569 7 23.5768 7 23.064V7.41942Z" fill="black"/>
    </Svg>
  );
};

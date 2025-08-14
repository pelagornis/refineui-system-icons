import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Checkmark24FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M19.7404 6.28448C20.0988 6.65109 20.0843 7.23132 19.7079 7.58046L9.82556 16.7471C9.45563 17.0903 8.87219 17.0833 8.51096 16.7315L4.27566 12.6065C3.90811 12.2485 3.90811 11.6681 4.27566 11.3102C4.64322 10.9522 5.23914 10.9522 5.60669 11.3102L9.03013 14.6444C9.12044 14.7324 9.2663 14.7341 9.35878 14.6483L18.4097 6.25288C18.7861 5.90373 19.3819 5.91788 19.7404 6.28448Z" fill="black"/>
    </Svg>
  );
};

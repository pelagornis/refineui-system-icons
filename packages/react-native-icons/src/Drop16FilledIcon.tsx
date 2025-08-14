import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Drop16FilledIcon: React.FC<IconProps> = ({ 
  size = 16, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <Svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 16 16"
      fill="none"
      {{...props}}
    >
      width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8 13.6667C10.2091 13.6667 12 11.5566 12 8.95372C12 6.71322 9.03626 3.84016 8.21101 3.08359C8.08944 2.97214 7.91056 2.97214 7.78899 3.08359C6.96374 3.84016 4 6.71322 4 8.95372C4 11.5566 5.79086 13.6667 8 13.6667ZM10.4333 9.56193C10.4333 9.3226 10.2393 9.12859 10 9.12859C9.76068 9.12859 9.56667 9.3226 9.56667 9.56193C9.56667 9.82592 9.48391 10.2315 9.24834 10.5587C9.02867 10.8638 8.65877 11.1286 8 11.1286C7.76068 11.1286 7.56667 11.3226 7.56667 11.5619C7.56667 11.8013 7.76068 11.9953 8 11.9953C8.94123 11.9953 9.57133 11.5934 9.95167 11.0651C10.3161 10.559 10.4333 9.9646 10.4333 9.56193Z" fill="black"/>
    </Svg>
  );
};

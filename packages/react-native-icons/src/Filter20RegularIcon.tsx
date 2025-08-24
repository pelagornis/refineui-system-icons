import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Filter20RegularIcon: React.FC<IconProps> = ({ 
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
<path d="M3 6.54176C3 6.24255 3.24259 6 3.54183 6H15.7915C16.0907 6 16.3333 6.24255 16.3333 6.54176C16.3333 6.84096 16.0907 7.08351 15.7915 7.08351H3.54183C3.24259 7.08351 3 6.84096 3 6.54176Z" fill="black"/>
<path d="M4.7499 10.1667C4.7499 9.86748 4.99249 9.62492 5.29173 9.62492H14.0415C14.3407 9.62492 14.5833 9.86748 14.5833 10.1667C14.5833 10.4659 14.3407 10.7084 14.0415 10.7084H5.29173C4.99249 10.7084 4.7499 10.4659 4.7499 10.1667Z" fill="black"/>
<path d="M7.04173 13.2498C6.74249 13.2498 6.4999 13.4924 6.4999 13.7916C6.4999 14.0908 6.74249 14.3333 7.04173 14.3333H12.2916C12.5908 14.3333 12.8334 14.0908 12.8334 13.7916C12.8334 13.4924 12.5908 13.2498 12.2916 13.2498H7.04173Z" fill="black"/>
    </Svg>
  );
};

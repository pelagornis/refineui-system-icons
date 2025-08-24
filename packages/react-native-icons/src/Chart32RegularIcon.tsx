import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Chart32RegularIcon: React.FC<IconProps> = ({ 
  size = 32, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <Svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 32 32"
      fill="none"
      {{...props}}
    >
      width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.73326 5.86663C6.73326 5.388 6.34526 5 5.86663 5C5.388 5 5 5.388 5 5.86663V24.1334C5 25.3484 5.98493 26.3333 7.19991 26.3333H25.4667C25.9453 26.3333 26.3333 25.9453 26.3333 25.4667C26.3333 25.0765 26.0755 24.7465 25.7208 24.6379V9.08545C25.7208 7.12554 23.3512 6.14402 21.9653 7.52988L15.9966 13.4986C15.8144 13.6808 15.5189 13.6808 15.3367 13.4986L13.3405 11.5024C12.6267 10.7886 11.5187 10.6522 10.6531 11.1716L6.73326 13.5235V5.86663ZM6.73326 15.5448V24.1334C6.73326 24.3911 6.94219 24.6001 7.19991 24.6001H23.9876V9.08545C23.9876 8.66972 23.4849 8.46151 23.1909 8.75549L17.2222 14.7242C16.3631 15.5833 14.9702 15.5833 14.1111 14.7242L12.1149 12.728C11.9635 12.5766 11.7285 12.5477 11.5449 12.6579L6.73326 15.5448Z" fill="black"/>
    </Svg>
  );
};

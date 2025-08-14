import React from 'react';
import { IconProps } from './types';

export const Barcharthorizontal24FilledIcon: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {{...props}}
    >
      width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6 4C4.89543 4 4 4.89543 4 6C4 7.10457 4.89543 8 6 8H11C12.1046 8 13 7.10457 13 6C13 4.89543 12.1046 4 11 4H6Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6 10C4.89543 10 4 10.8954 4 12C4 13.1046 4.89543 14 6 14H14C15.1046 14 16 13.1046 16 12C16 10.8954 15.1046 10 14 10H6Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M4 18C4 16.8954 4.89543 16 6 16H18C19.1046 16 20 16.8954 20 18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18Z" fill="black"/>
    </svg>
  );
};

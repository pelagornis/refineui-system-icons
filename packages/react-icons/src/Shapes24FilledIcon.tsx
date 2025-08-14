import React from 'react';
import { IconProps } from './types';

export const Shapes24FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M8 10V14.793C5.6915 14.14 4 12.0176 4 9.5C4 6.46243 6.46243 4 9.5 4C12.0176 4 14.14 5.6915 14.793 8H10C8.89543 8 8 8.89543 8 10Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9 11C9 9.89543 9.89543 9 11 9H18C19.1046 9 20 9.89543 20 11V18C20 19.1046 19.1046 20 18 20H11C9.89543 20 9 19.1046 9 18V11Z" fill="black"/>
    </svg>
  );
};

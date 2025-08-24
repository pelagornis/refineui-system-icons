import React from 'react';
import { IconProps } from './types';

export const Pause24FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M4 6C4 4.89543 4.89543 4 6 4H9C10.1046 4 11 4.89543 11 6V18C11 19.1046 10.1046 20 9 20H6C4.89543 20 4 19.1046 4 18V6Z" fill="black"/>
<path d="M13 6C13 4.89543 13.8954 4 15 4H18C19.1046 4 20 4.89543 20 6V18C20 19.1046 19.1046 20 18 20H15C13.8954 20 13 19.1046 13 18V6Z" fill="black"/>
    </svg>
  );
};

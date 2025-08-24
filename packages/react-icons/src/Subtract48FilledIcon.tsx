import React from 'react';
import { IconProps } from './types';

export const Subtract48FilledIcon: React.FC<IconProps> = ({ 
  size = 48, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {{...props}}
    >
      width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 24C8 22.8954 8.89543 22 10 22H38C39.1046 22 40 22.8954 40 24C40 25.1046 39.1046 26 38 26H10C8.89543 26 8 25.1046 8 24Z" fill="black"/>
    </svg>
  );
};

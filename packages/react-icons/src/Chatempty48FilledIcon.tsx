import React from 'react';
import { IconProps } from './types';

export const Chatempty48FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M24 40C32.8365 40 40 32.8365 40 24C40 15.1635 32.8365 8 24 8C15.1635 8 8 15.1635 8 24V38C8 39.1046 8.89543 40 10 40H24Z" fill="black"/>
    </svg>
  );
};

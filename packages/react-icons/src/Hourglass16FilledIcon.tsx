import React from 'react';
import { IconProps } from './types';

export const Hourglass16FilledIcon: React.FC<IconProps> = ({ 
  size = 16, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {{...props}}
    >
      width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.05428 3H11.2791C12.1265 3 12.6264 3.90303 12.1463 4.56653L9.8307 7.76681C9.58378 8.10806 9.58378 8.55861 9.8307 8.89986L12.1463 12.1001C12.6264 12.7636 12.1265 13.6667 11.2791 13.6667H4.05428C3.20685 13.6667 2.70691 12.7636 3.187 12.1001L5.50263 8.89986C5.74955 8.55861 5.74955 8.10806 5.50263 7.7668L3.187 4.56653C2.70691 3.90303 3.20685 3 4.05428 3Z" fill="black"/>
    </svg>
  );
};

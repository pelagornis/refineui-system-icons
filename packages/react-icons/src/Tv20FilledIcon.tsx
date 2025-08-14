import React from 'react';
import { IconProps } from './types';

export const Tv20FilledIcon: React.FC<IconProps> = ({ 
  size = 20, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {{...props}}
    >
      width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.83333 5C3.3731 5 3 5.3731 3 5.83333V12.5C3 12.9602 3.3731 13.3333 3.83333 13.3333H15.5C15.9602 13.3333 16.3333 12.9602 16.3333 12.5V5.83333C16.3333 5.3731 15.9602 5 15.5 5H3.83333Z" fill="black"/>
<path d="M5.20833 14.1667C4.90918 14.1667 4.66667 14.4092 4.66667 14.7083C4.66667 15.0075 4.90918 15.25 5.20833 15.25H14.125C14.4242 15.25 14.6667 15.0075 14.6667 14.7083C14.6667 14.4092 14.4242 14.1667 14.125 14.1667H5.20833Z" fill="black"/>
    </svg>
  );
};

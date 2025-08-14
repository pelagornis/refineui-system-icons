import React from 'react';
import { IconProps } from './types';

export const Cursor20RegularIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.21541 3.04892C3.49448 2.80861 2.80861 3.49448 3.04892 4.21542L6.87693 15.6994C7.14968 16.5177 8.29628 16.5471 8.61059 15.7438L10.3228 11.3682C10.5102 10.8892 10.8892 10.5102 11.3683 10.3228L15.7438 8.61057C16.5471 8.29627 16.5177 7.14967 15.6994 6.87691L4.21541 3.04892ZM4.17814 4.17814L7.7639 14.9354L9.31418 10.9736C9.6117 10.2132 10.2132 9.61169 10.9736 9.31417L14.9354 7.76389L4.17814 4.17814Z" fill="black"/>
    </svg>
  );
};

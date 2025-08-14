import React from 'react';
import { IconProps } from './types';

export const Recordstop16RegularIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.83333 6.33333C6.55719 6.33333 6.33333 6.55719 6.33333 6.83333V9.83333C6.33333 10.1095 6.55719 10.3333 6.83333 10.3333H9.83333C10.1095 10.3333 10.3333 10.1095 10.3333 9.83333V6.83333C10.3333 6.55719 10.1095 6.33333 9.83333 6.33333H6.83333Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.6667 8.33333C13.6667 11.2789 11.2789 13.6667 8.33333 13.6667C5.38781 13.6667 3 11.2789 3 8.33333C3 5.38781 5.38781 3 8.33333 3C11.2789 3 13.6667 5.38781 13.6667 8.33333ZM12.8 8.33333C12.8 10.8002 10.8002 12.8 8.33333 12.8C5.86646 12.8 3.86667 10.8002 3.86667 8.33333C3.86667 5.86646 5.86646 3.86667 8.33333 3.86667C10.8002 3.86667 12.8 5.86646 12.8 8.33333Z" fill="black"/>
    </svg>
  );
};

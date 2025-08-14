import React from 'react';
import { IconProps } from './types';

export const Copy28FilledIcon: React.FC<IconProps> = ({ 
  size = 28, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {{...props}}
    >
      width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.6667 5C9.378 5 8.33333 6.04467 8.33333 7.33333V19C8.33333 20.2887 9.378 21.3333 10.6667 21.3333H20C21.2887 21.3333 22.3333 20.2887 22.3333 19V7.33333C22.3333 6.04467 21.2887 5 20 5H10.6667Z" fill="black"/>
<path d="M19.2457 23.6646C19.6645 23.6646 20.004 23.3251 20.004 22.9063C20.004 22.4875 19.6645 22.148 19.2457 22.148H9.09167C8.22182 22.148 7.51667 21.4428 7.51667 20.573L7.51667 8.09167C7.51667 7.67285 7.17715 7.33333 6.75833 7.33333C6.33952 7.33333 6 7.67285 6 8.09167V20.573C6 22.2804 7.38418 23.6646 9.09167 23.6646H19.2457Z" fill="black"/>
    </svg>
  );
};

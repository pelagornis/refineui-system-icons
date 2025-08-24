import React from 'react';
import { IconProps } from './types';

export const Moreverticial16FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M9 4.33333C9 5.06971 8.40305 5.66667 7.66667 5.66667C6.93029 5.66667 6.33333 5.06971 6.33333 4.33333C6.33333 3.59695 6.93029 3 7.66667 3C8.40305 3 9 3.59695 9 4.33333Z" fill="black"/>
<path d="M9 8.33333C9 9.06971 8.40305 9.66667 7.66667 9.66667C6.93029 9.66667 6.33333 9.06971 6.33333 8.33333C6.33333 7.59695 6.93029 7 7.66667 7C8.40305 7 9 7.59695 9 8.33333Z" fill="black"/>
<path d="M9 12.3333C9 13.0697 8.40305 13.6667 7.66667 13.6667C6.93029 13.6667 6.33333 13.0697 6.33333 12.3333C6.33333 11.597 6.93029 11 7.66667 11C8.40305 11 9 11.597 9 12.3333Z" fill="black"/>
    </svg>
  );
};

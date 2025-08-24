import React from 'react';
import { IconProps } from './types';

export const Thinking28FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.16667 7.33333C6.16667 6.04467 7.21134 5 8.5 5H21.3333C22.622 5 23.6667 6.04467 23.6667 7.33333V13.75C23.6667 15.0387 22.622 16.0833 21.3333 16.0833H8.5C7.21134 16.0833 6.16667 15.0387 6.16667 13.75V7.33333Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.66667 21.3333C10.9553 21.3333 12 20.2887 12 19C12 17.7113 10.9553 16.6667 9.66667 16.6667C8.378 16.6667 7.33333 17.7113 7.33333 19C7.33333 20.2887 8.378 21.3333 9.66667 21.3333Z" fill="black"/>
<path d="M7.625 22.3542C7.625 23.079 7.03737 23.6667 6.3125 23.6667C5.58763 23.6667 5 23.079 5 22.3542C5 21.6293 5.58763 21.0417 6.3125 21.0417C7.03737 21.0417 7.625 21.6293 7.625 22.3542Z" fill="black"/>
    </svg>
  );
};

import React from 'react';
import { IconProps } from './types';

export const Equalcircle16FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.6667 8.33333C13.6667 11.2789 11.2789 13.6667 8.33333 13.6667C5.38781 13.6667 3 11.2789 3 8.33333C3 5.38781 5.38781 3 8.33333 3C11.2789 3 13.6667 5.38781 13.6667 8.33333ZM5.56667 7.33333C5.56667 7.09401 5.76068 6.9 6 6.9H10.6667C10.906 6.9 11.1 7.09401 11.1 7.33333C11.1 7.57266 10.906 7.76667 10.6667 7.76667H6C5.76068 7.76667 5.56667 7.57266 5.56667 7.33333ZM6 8.9C5.76068 8.9 5.56667 9.09401 5.56667 9.33333C5.56667 9.57266 5.76068 9.76667 6 9.76667H10.6667C10.906 9.76667 11.1 9.57266 11.1 9.33333C11.1 9.09401 10.906 8.9 10.6667 8.9H6Z" fill="black"/>
    </svg>
  );
};

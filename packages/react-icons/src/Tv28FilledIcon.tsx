import React from 'react';
import { IconProps } from './types';

export const Tv28FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M6.16667 7C5.52233 7 5 7.52233 5 8.16667V17.5C5 18.1443 5.52233 18.6667 6.16667 18.6667H22.5C23.1443 18.6667 23.6667 18.1443 23.6667 17.5V8.16667C23.6667 7.52233 23.1443 7 22.5 7H6.16667Z" fill="black"/>
<path d="M8.09167 19.8333C7.67285 19.8333 7.33333 20.1728 7.33333 20.5917C7.33333 21.0105 7.67285 21.35 8.09167 21.35H20.575C20.9938 21.35 21.3333 21.0105 21.3333 20.5917C21.3333 20.1728 20.9938 19.8333 20.575 19.8333H8.09167Z" fill="black"/>
    </svg>
  );
};

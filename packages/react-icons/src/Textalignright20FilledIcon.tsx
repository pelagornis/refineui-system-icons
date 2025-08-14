import React from 'react';
import { IconProps } from './types';

export const Textalignright20FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M6.33333 6.833C6.33333 6.37295 6.70643 6 7.16667 6H14.6667C15.1269 6 15.5 6.37295 15.5 6.833C15.5 7.29305 15.1269 7.666 14.6667 7.666H7.16667C6.70643 7.666 6.33333 7.29305 6.33333 6.833Z" fill="black"/>
<path d="M3 10.165C3 9.70495 3.3731 9.332 3.83333 9.332H14.6667C15.1269 9.332 15.5 9.70495 15.5 10.165C15.5 10.6251 15.1269 10.998 14.6667 10.998H3.83333C3.3731 10.998 3 10.6251 3 10.165Z" fill="black"/>
<path d="M10.5 12.664C10.0398 12.664 9.66667 13.0369 9.66667 13.497C9.66667 13.9571 10.0398 14.33 10.5 14.33H14.6667C15.1269 14.33 15.5 13.9571 15.5 13.497C15.5 13.0369 15.1269 12.664 14.6667 12.664H10.5Z" fill="black"/>
    </svg>
  );
};

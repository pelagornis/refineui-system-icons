import React from 'react';
import { IconProps } from './types';

export const Ioschevronltr48FilledIcon: React.FC<IconProps> = ({ 
  size = 48, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {{...props}}
    >
      width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.7026 16.4003C20.5858 17.0631 20.7644 18.3164 20.1016 19.1996L16.9494 23.4C16.6826 23.7555 16.6826 24.2445 16.9494 24.6L20.1016 28.8004C20.7644 29.6836 20.5858 30.9369 19.7026 31.5997C18.8194 32.2624 17.5662 32.0838 16.9034 31.2006L12.4002 25.2001C11.8666 24.489 11.8666 23.511 12.4002 22.7999L16.9034 16.7994C17.5662 15.9162 18.8194 15.7376 19.7026 16.4003Z" fill="black"/>
    </svg>
  );
};

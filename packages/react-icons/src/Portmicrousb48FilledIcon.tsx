import React from 'react';
import { IconProps } from './types';

export const Portmicrousb48FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.2694 18.717C15.6704 18.265 16.2466 18 16.8592 18H31.1409C31.7534 18 32.3296 18.265 32.7306 18.717L37.0201 23.5515C39.1839 25.9902 37.5527 30.0042 34.1955 30.0042H13.8045C10.4473 30.0042 8.81609 25.9902 10.9799 23.5515L15.2694 18.717Z" fill="black"/>
    </svg>
  );
};

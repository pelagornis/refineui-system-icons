import React from 'react';
import { IconProps } from './types';

export const Portmicrousb32FilledIcon: React.FC<IconProps> = ({ 
  size = 32, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {{...props}}
    >
      width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.513 12.478C10.7803 12.1767 11.1644 12 11.5728 12H21.0939C21.5022 12 21.8864 12.1767 22.1537 12.478L25.0134 15.701C26.4559 17.3268 25.3685 20.0028 23.1303 20.0028H9.53633C7.29819 20.0028 6.21073 17.3268 7.65327 15.701L10.513 12.478Z" fill="black"/>
    </svg>
  );
};

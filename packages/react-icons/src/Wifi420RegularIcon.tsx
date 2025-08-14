import React from 'react';
import { IconProps } from './types';

export const Wifi420RegularIcon: React.FC<IconProps> = ({ 
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
<path d="M9.64416 14.8535C10.1964 14.8535 10.6442 14.4058 10.6442 13.8535C10.6442 13.3012 10.1964 12.8535 9.64416 12.8535C9.09188 12.8535 8.64417 13.3012 8.64417 13.8535C8.64417 14.4058 9.09188 14.8535 9.64416 14.8535Z" fill="black"/>
    </svg>
  );
};

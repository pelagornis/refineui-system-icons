import React from 'react';
import { IconProps } from './types';

export const Fastforward16FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.01254 4.71645C7.01254 4.16575 7.56984 3.82156 8.01567 4.09691L13.3323 7.38046C13.7781 7.65581 13.7781 8.34419 13.3323 8.61954L8.01568 11.9031C7.56984 12.1784 7.01254 11.8343 7.01254 11.2836V10.1684C7.01254 10.1133 6.95681 10.0789 6.91223 10.1064L4.00313 11.9031C3.5573 12.1784 3 11.8343 3 11.2836V4.71645C3 4.16575 3.5573 3.82156 4.00313 4.09691L6.91223 5.89357C6.95681 5.92111 7.01254 5.88669 7.01254 5.83162V4.71645Z" fill="black"/>
    </svg>
  );
};

import React from 'react';
import { IconProps } from './types';

export const Iosarrowrtl32FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M16.5087 26.0328C15.9169 25.5673 15.8286 24.7275 16.3114 24.157L23.1409 16.0877C23.3485 15.8425 23.3485 15.4902 23.1409 15.2449L16.3114 7.17571C15.8286 6.60521 15.9169 5.76539 16.5087 5.29992C17.1005 4.83445 17.9716 4.91958 18.4545 5.49008L26.354 14.8235C26.7692 15.3141 26.7692 16.0186 26.354 16.5092L18.4545 25.8426C17.9716 26.4131 17.1005 26.4982 16.5087 26.0328Z" fill="black"/>
    </svg>
  );
};

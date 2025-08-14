import React from 'react';
import { IconProps } from './types';

export const Wallet48FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M32 9C34.2091 9 36 10.7909 36 13C38.2091 13 40 14.7909 40 17V22.5C40 22.7761 39.7761 23 39.5 23H29C27.3431 23 26 24.3431 26 26C26 27.6569 27.3431 29 29 29H39.5C39.7761 29 40 29.2239 40 29.5V35C40 37.2091 38.2091 39 36 39H12C9.79086 39 8 37.2091 8 35V13C8 10.7909 9.79086 9 12 9H32ZM32 11.6H12C11.2268 11.6 10.6 12.2268 10.6 13V13.2518C11.0357 13.089 11.5075 13 12 13H33.4C33.4 12.2268 32.7732 11.6 32 11.6Z" fill="black"/>
<path d="M37.4 26.4V25.6H29C28.7791 25.6 28.6 25.7791 28.6 26C28.6 26.2209 28.7791 26.4 29 26.4H37.4Z" fill="black"/>
    </svg>
  );
};

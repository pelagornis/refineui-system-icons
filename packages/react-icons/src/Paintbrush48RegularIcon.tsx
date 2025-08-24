import React from 'react';
import { IconProps } from './types';

export const Paintbrush48RegularIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M32 8C34.2091 8 36 9.79086 36 12V28C36 30.2091 34.2091 32 32 32H28V36C28 38.2091 26.2091 40 24 40C21.7909 40 20 38.2091 20 36V32H16C13.7909 32 12 30.2091 12 28V12C12 9.79086 13.7909 8 16 8H32ZM16 10.6H24V12.7C24 13.418 24.582 14 25.3 14C26.018 14 26.6 13.418 26.6 12.7V10.6H28V14.7C28 15.418 28.582 16 29.3 16C30.018 16 30.6 15.418 30.6 14.7V10.6H32C32.7732 10.6 33.4 11.2268 33.4 12V22H14.6V12C14.6 11.2268 15.2268 10.6 16 10.6ZM14.6 24.6V28C14.6 28.7732 15.2268 29.4 16 29.4H22.6V36C22.6 36.7732 23.2268 37.4 24 37.4C24.7732 37.4 25.4 36.7732 25.4 36V29.4H32C32.7732 29.4 33.4 28.7732 33.4 28V24.6H14.6Z" fill="black"/>
    </svg>
  );
};

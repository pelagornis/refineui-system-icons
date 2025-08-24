import React from 'react';
import { IconProps } from './types';

export const Numbercircle448RegularIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M24 16.7C23.5229 16.7 23.0842 16.9613 22.8569 17.3808L18.8569 24.7654C18.7539 24.9556 18.7 25.1684 18.7 25.3846V26.3077C18.7 27.0257 19.282 27.6077 20 27.6077H24.3V30C24.3 30.718 24.882 31.3 25.6 31.3C26.318 31.3 26.9 30.718 26.9 30V27.6077H28C28.718 27.6077 29.3 27.0257 29.3 26.3077C29.3 25.5897 28.718 25.0077 28 25.0077H26.9V18C26.9 17.282 26.318 16.7 25.6 16.7H24ZM24.3 20.1756V25.0077H21.6826L24.3 20.1756Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M40 24C40 32.8366 32.8366 40 24 40C15.1634 40 8 32.8366 8 24C8 15.1634 15.1634 8 24 8C32.8366 8 40 15.1634 40 24ZM37.4 24C37.4 31.4006 31.4006 37.4 24 37.4C16.5994 37.4 10.6 31.4006 10.6 24C10.6 16.5994 16.5994 10.6 24 10.6C31.4006 10.6 37.4 16.5994 37.4 24Z" fill="black"/>
    </svg>
  );
};

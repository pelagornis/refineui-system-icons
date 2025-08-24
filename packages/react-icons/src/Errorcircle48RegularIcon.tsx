import React from 'react';
import { IconProps } from './types';

export const Errorcircle48RegularIcon: React.FC<IconProps> = ({ 
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
<path d="M24 14.7C24.718 14.7 25.3 15.282 25.3 16V27C25.3 27.718 24.718 28.3 24 28.3C23.282 28.3 22.7 27.718 22.7 27V16C22.7 15.282 23.282 14.7 24 14.7Z" fill="black"/>
<path d="M24 32.6C24.7179 32.6 25.3 32.018 25.3 31.3C25.3 30.582 24.7179 30 24 30C23.282 30 22.7 30.582 22.7 31.3C22.7 32.018 23.282 32.6 24 32.6Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M24 40C32.8366 40 40 32.8366 40 24C40 15.1634 32.8366 8 24 8C15.1634 8 8 15.1634 8 24C8 32.8366 15.1634 40 24 40ZM24 37.4C31.4006 37.4 37.4 31.4006 37.4 24C37.4 16.5994 31.4006 10.6 24 10.6C16.5994 10.6 10.6 16.5994 10.6 24C10.6 31.4006 16.5994 37.4 24 37.4Z" fill="black"/>
    </svg>
  );
};

import React from 'react';
import { IconProps } from './types';

export const Equalcircle48RegularIcon: React.FC<IconProps> = ({ 
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
<path d="M15.7 21C15.7 20.282 16.282 19.7 17 19.7H31C31.718 19.7 32.3 20.282 32.3 21C32.3 21.718 31.718 22.3 31 22.3H17C16.282 22.3 15.7 21.718 15.7 21Z" fill="black"/>
<path d="M17 25.7C16.282 25.7 15.7 26.282 15.7 27C15.7 27.718 16.282 28.3 17 28.3H31C31.718 28.3 32.3 27.718 32.3 27C32.3 26.282 31.718 25.7 31 25.7H17Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M24 40C32.8366 40 40 32.8366 40 24C40 15.1634 32.8366 8 24 8C15.1634 8 8 15.1634 8 24C8 32.8366 15.1634 40 24 40ZM24 37.4C31.4006 37.4 37.4 31.4006 37.4 24C37.4 16.5994 31.4006 10.6 24 10.6C16.5994 10.6 10.6 16.5994 10.6 24C10.6 31.4006 16.5994 37.4 24 37.4Z" fill="black"/>
    </svg>
  );
};

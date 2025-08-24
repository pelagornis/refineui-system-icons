import React from 'react';
import { IconProps } from './types';

export const Textalignleft20RegularIcon: React.FC<IconProps> = ({ 
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
<path d="M3 5.54168C3 5.24252 3.24252 5 3.54168 5H11.4455C11.7447 5 11.9872 5.24252 11.9872 5.54168C11.9872 5.84085 11.7447 6.08337 11.4455 6.08337H3.54168C3.24252 6.08337 3 5.84085 3 5.54168Z" fill="black"/>
<path d="M3 9.16482C3 8.86566 3.24252 8.62314 3.54168 8.62314H14.9583C15.2575 8.62314 15.5 8.86566 15.5 9.16482C15.5 9.46399 15.2575 9.70651 14.9583 9.70651H3.54168C3.24252 9.70651 3 9.46399 3 9.16482Z" fill="black"/>
<path d="M3.54168 12.2463C3.24252 12.2463 3 12.4888 3 12.788C3 13.0871 3.24252 13.3296 3.54168 13.3296H7.9327C8.23186 13.3296 8.47438 13.0871 8.47438 12.788C8.47438 12.4888 8.23186 12.2463 7.9327 12.2463H3.54168Z" fill="black"/>
    </svg>
  );
};

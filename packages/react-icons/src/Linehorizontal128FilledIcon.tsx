import React from 'react';
import { IconProps } from './types';

export const Linehorizontal128FilledIcon: React.FC<IconProps> = ({ 
  size = 28, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {{...props}}
    >
      width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M23.6667 14.1666C23.6667 14.8109 23.2833 15.3331 22.8104 15.3331L5.85624 15.3331C5.38335 15.3331 5 14.8109 5 14.1666C5 13.5223 5.38335 13 5.85624 13L22.8104 13C23.2833 13 23.6667 13.5223 23.6667 14.1666Z" fill="black"/>
    </svg>
  );
};

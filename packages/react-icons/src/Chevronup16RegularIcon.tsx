import React from 'react';
import { IconProps } from './types';

export const Chevronup16RegularIcon: React.FC<IconProps> = ({ 
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
<path d="M3.68041 10.8574C3.51491 10.9724 3.28565 10.9595 3.13407 10.815C2.96094 10.6499 2.95477 10.3754 3.11974 10.2022L7.90071 5.18592C8.12237 4.95359 8.48403 4.93895 8.72315 5.14229L8.76938 5.18592L13.5503 10.2022L13.6044 10.2712C13.7114 10.4421 13.6869 10.6705 13.5354 10.815C13.3838 10.9592 13.1551 10.9722 12.9897 10.8574L12.9226 10.8L8.33504 5.98701L3.74683 10.8L3.68041 10.8574Z" fill="black"/>
    </svg>
  );
};

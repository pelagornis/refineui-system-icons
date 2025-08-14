import React from 'react';
import { IconProps } from './types';

export const Autosum16FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M3.09944 3.566C2.88454 3.35471 3.04093 3 3.34898 3H12.9734C13.3581 3 13.67 3.29855 13.67 3.66682C13.67 4.0351 13.3581 4.33364 12.9734 4.33364H6.2372C6.08317 4.33364 6.00498 4.511 6.11243 4.61664L9.65773 8.10241C9.78939 8.23186 9.78939 8.43814 9.65773 8.56759L6.11242 12.0534C6.00498 12.159 6.08317 12.3364 6.2372 12.3364H12.9734C13.3581 12.3364 13.67 12.6349 13.67 13.0032C13.67 13.3715 13.3581 13.67 12.9734 13.67H3.34898C3.04093 13.67 2.88454 13.3153 3.09944 13.104L7.83161 8.45129C7.89744 8.38657 7.89744 8.28343 7.83161 8.21871L3.09944 3.566Z" fill="black"/>
    </svg>
  );
};

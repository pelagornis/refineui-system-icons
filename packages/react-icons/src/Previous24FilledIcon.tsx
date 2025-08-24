import React from 'react';
import { IconProps } from './types';

export const Previous24FilledIcon: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {{...props}}
    >
      width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.16116 12.8933C6.54176 12.5115 6.54176 11.6435 7.16116 11.2618L18.4408 4.31044C19.114 3.89555 19.9994 4.35893 19.9994 5.12616L19.9994 19.0289C19.9994 19.7962 19.114 20.2595 18.4408 19.8446L7.16116 12.8933Z" fill="black"/>
<path d="M4 19.0099C4 19.3689 4.29101 19.6599 4.65 19.6599C5.00898 19.6599 5.3 19.3689 5.3 19.0099L5.3 4.65C5.3 4.29101 5.00899 4 4.65 4C4.29102 4 4 4.29101 4 4.65L4 19.0099Z" fill="black"/>
    </svg>
  );
};

import React from 'react';
import { IconProps } from './types';

export const Contrast20FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.66667 16.33C5.98999 16.33 3.00846 13.3544 3.00002 9.68065C3.00001 9.67543 3 9.67022 3 9.665C3 9.65978 3.00001 9.65457 3.00002 9.64935C3.00421 7.82778 3.73931 6.17787 4.92767 4.97721C4.93596 4.96883 4.94428 4.96047 4.95262 4.95213C4.96096 4.94379 4.96932 4.93548 4.97771 4.92719C6.17866 3.73913 7.82899 3.0042 9.65102 3.00002C9.65623 3.00001 9.66145 3 9.66667 3C13.3486 3 16.3333 5.98402 16.3333 9.665C16.3333 13.346 13.3486 16.33 9.66667 16.33ZM9.66667 15.2469V4.08306C12.7503 4.08306 15.25 6.58218 15.25 9.665C15.25 12.7478 12.7503 15.2469 9.66667 15.2469Z" fill="black"/>
    </svg>
  );
};

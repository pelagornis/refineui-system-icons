import React from 'react';
import { IconProps } from './types';

export const Phone24FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M9 4C7.89543 4 7 4.89543 7 6V18C7 19.1046 7.89543 20 9 20H15C16.1046 20 17 19.1046 17 18V6C17 4.89543 16.1046 4 15 4H9ZM12.75 6H11.25C10.8358 6 10.5 6.33579 10.5 6.75C10.5 7.16421 10.8358 7.5 11.25 7.5H12.75C13.1642 7.5 13.5 7.16421 13.5 6.75C13.5 6.33579 13.1642 6 12.75 6Z" fill="black"/>
    </svg>
  );
};

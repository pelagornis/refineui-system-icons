import React from 'react';
import { IconProps } from './types';

export const Battery1024FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M4 9C4 7.89543 4.89543 7 6 7H16.5202C17.6248 7 18.5202 7.89543 18.5202 9V9.93578C19.3375 9.93578 20 10.5983 20 11.4156V12.5845C20 13.4017 19.3375 14.0642 18.5202 14.0642V15C18.5202 16.1046 17.6248 17 16.5202 17H6C4.89543 17 4 16.1046 4 15V9ZM6.8 9C6.35817 9 6 9.35817 6 9.8V14.2C6 14.6418 6.35817 15 6.8 15C7.24183 15 7.6 14.6418 7.6 14.2V9.8C7.6 9.35817 7.24183 9 6.8 9Z" fill="black"/>
    </svg>
  );
};

import React from 'react';
import { IconProps } from './types';

export const Battery4024FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M4 9C4 7.89543 4.89543 7 6 7H16.5202C17.6248 7 18.5202 7.89543 18.5202 9V9.93578C19.3375 9.93578 20 10.5983 20 11.4156V12.5845C20 13.4017 19.3375 14.0642 18.5202 14.0642V15C18.5202 16.1046 17.6248 17 16.5202 17H6C4.89543 17 4 16.1046 4 15V9ZM7 9C6.44772 9 6 9.44772 6 10V14C6 14.5523 6.44771 15 7 15H9.6C10.1523 15 10.6 14.5523 10.6 14V10C10.6 9.44772 10.1523 9 9.6 9H7Z" fill="black"/>
    </svg>
  );
};

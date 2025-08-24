import React from 'react';
import { IconProps } from './types';

export const Equal16FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M3.66661 5C3.29845 5 3 5.29839 3 5.66646C3 6.03454 3.29845 6.33293 3.66661 6.33293H13.0001C13.3682 6.33293 13.6667 6.03454 13.6667 5.66646C13.6667 5.29839 13.3682 5 13.0001 5H3.66661Z" fill="black"/>
<path d="M3.66661 9.00041C3.29845 9.00041 3 9.29879 3 9.66687C3 10.0349 3.29845 10.3333 3.66661 10.3333H13.0001C13.3682 10.3333 13.6667 10.0349 13.6667 9.66687C13.6667 9.29879 13.3682 9.00041 13.0001 9.00041H3.66661Z" fill="black"/>
    </svg>
  );
};

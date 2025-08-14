import React from 'react';
import { IconProps } from './types';

export const Joystick16FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.43333 6.95293C9.32957 6.75495 10 5.95577 10 5C10 3.89543 9.10457 3 8 3C6.89543 3 6 3.89543 6 5C6 5.95577 6.67043 6.75495 7.56667 6.95293V8.66667H7.14894C6.5144 8.66667 6 9.06961 6 9.56667V9.94866H10V9.56667C10 9.06961 9.4856 8.66667 8.85106 8.66667H8.43333V6.95293Z" fill="black"/>
<path d="M4.66667 10.3333C4.29848 10.3333 4 10.6318 4 11V12.3333C4 12.7015 4.29848 13 4.66667 13H11.3333C11.7015 13 12 12.7015 12 12.3333V11C12 10.6318 11.7015 10.3333 11.3333 10.3333H4.66667Z" fill="black"/>
    </svg>
  );
};

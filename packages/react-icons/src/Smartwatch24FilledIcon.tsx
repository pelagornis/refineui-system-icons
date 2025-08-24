import React from 'react';
import { IconProps } from './types';

export const Smartwatch24FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M9 6C9 4.89543 9.89543 4 11 4H15C16.1046 4 17 4.89543 17 6V6.17071C16.6872 6.06015 16.3506 6 16 6H10C9.64936 6 9.31278 6.06015 9 6.17071V6Z" fill="black"/>
<path d="M16 18C16.3506 18 16.6872 17.9398 17 17.8293V18C17 19.1046 16.1046 20 15 20H11C9.89543 20 9 19.1046 9 18V17.8293C9.31278 17.9398 9.64936 18 10 18H16Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10 7C8.89543 7 8 7.89543 8 9V15C8 16.1046 8.89543 17 10 17H16C17.1046 17 18 16.1046 18 15V13C18.5523 13 19 12.5523 19 12V11C19 10.4477 18.5523 10 18 10V9C18 7.89543 17.1046 7 16 7H10Z" fill="black"/>
    </svg>
  );
};

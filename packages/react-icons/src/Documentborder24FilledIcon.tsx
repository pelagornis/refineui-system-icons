import React from 'react';
import { IconProps } from './types';

export const Documentborder24FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M6 6C6 4.89543 6.89543 4 8 4H16C17.1046 4 18 4.89543 18 6V18C18 19.1046 17.1046 20 16 20H8C6.89543 20 6 19.1046 6 18V6ZM8 5.3H16C16.3866 5.3 16.7 5.6134 16.7 6V18C16.7 18.3866 16.3866 18.7 16 18.7H8C7.6134 18.7 7.3 18.3866 7.3 18V6C7.3 5.6134 7.6134 5.3 8 5.3Z" fill="black"/>
<path d="M9 6C8.44772 6 8 6.44772 8 7V17C8 17.5523 8.44772 18 9 18H15C15.5523 18 16 17.5523 16 17V7C16 6.44772 15.5523 6 15 6H9Z" fill="black"/>
    </svg>
  );
};

import React from 'react';
import { IconProps } from './types';

export const Tablet24RegularIcon: React.FC<IconProps> = ({ 
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
<path d="M9 16.35C8.64102 16.35 8.35 16.641 8.35 17C8.35 17.359 8.64102 17.65 9 17.65H15C15.359 17.65 15.65 17.359 15.65 17C15.65 16.641 15.359 16.35 15 16.35H9Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5 6C5 4.89543 5.89543 4 7 4H17C18.1046 4 19 4.89543 19 6V18C19 19.1046 18.1046 20 17 20H7C5.89543 20 5 19.1046 5 18V6ZM7 5.3H17C17.3866 5.3 17.7 5.6134 17.7 6V18C17.7 18.3866 17.3866 18.7 17 18.7H7C6.6134 18.7 6.3 18.3866 6.3 18V6C6.3 5.6134 6.6134 5.3 7 5.3Z" fill="black"/>
    </svg>
  );
};

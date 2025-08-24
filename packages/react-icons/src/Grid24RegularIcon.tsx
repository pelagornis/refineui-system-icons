import React from 'react';
import { IconProps } from './types';

export const Grid24RegularIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M4 6C4 4.89543 4.89543 4 6 4H9C10.1046 4 11 4.89543 11 6V9C11 10.1046 10.1046 11 9 11H6C4.89543 11 4 10.1046 4 9V6ZM6 5.3H9C9.3866 5.3 9.7 5.6134 9.7 6V9C9.7 9.3866 9.3866 9.7 9 9.7H6C5.6134 9.7 5.3 9.3866 5.3 9V6C5.3 5.6134 5.6134 5.3 6 5.3Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13 15C13 13.8954 13.8954 13 15 13H18C19.1046 13 20 13.8954 20 15V18C20 19.1046 19.1046 20 18 20H15C13.8954 20 13 19.1046 13 18V15ZM15 14.3H18C18.3866 14.3 18.7 14.6134 18.7 15V18C18.7 18.3866 18.3866 18.7 18 18.7H15C14.6134 18.7 14.3 18.3866 14.3 18V15C14.3 14.6134 14.6134 14.3 15 14.3Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6 13C4.89543 13 4 13.8954 4 15V18C4 19.1046 4.89543 20 6 20H9C10.1046 20 11 19.1046 11 18V15C11 13.8954 10.1046 13 9 13H6ZM9 14.3H6C5.6134 14.3 5.3 14.6134 5.3 15V18C5.3 18.3866 5.6134 18.7 6 18.7H9C9.3866 18.7 9.7 18.3866 9.7 18V15C9.7 14.6134 9.3866 14.3 9 14.3Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13 6C13 4.89543 13.8954 4 15 4H18C19.1046 4 20 4.89543 20 6V9C20 10.1046 19.1046 11 18 11H15C13.8954 11 13 10.1046 13 9V6ZM15 5.3H18C18.3866 5.3 18.7 5.6134 18.7 6V9C18.7 9.3866 18.3866 9.7 18 9.7H15C14.6134 9.7 14.3 9.3866 14.3 9V6C14.3 5.6134 14.6134 5.3 15 5.3Z" fill="black"/>
    </svg>
  );
};

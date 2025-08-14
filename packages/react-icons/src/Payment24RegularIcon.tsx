import React from 'react';
import { IconProps } from './types';

export const Payment24RegularIcon: React.FC<IconProps> = ({ 
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
<path d="M7.65 13.7C7.29101 13.7 7 13.991 7 14.35C7 14.709 7.29101 15 7.65 15H9.35C9.70899 15 10 14.709 10 14.35C10 13.991 9.70898 13.7 9.35 13.7H7.65Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6 6C4.89543 6 4 6.89543 4 8V16C4 17.1046 4.89543 18 6 18H18C19.1046 18 20 17.1046 20 16V8C20 6.89543 19.1046 6 18 6H6ZM18 7.3H6C5.6134 7.3 5.3 7.6134 5.3 8V9.35H18.7V8C18.7 7.6134 18.3866 7.3 18 7.3ZM5.3 16V10.65H18.7V16C18.7 16.3866 18.3866 16.7 18 16.7H6C5.6134 16.7 5.3 16.3866 5.3 16Z" fill="black"/>
    </svg>
  );
};

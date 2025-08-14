import React from 'react';
import { IconProps } from './types';

export const Rectangle24RegularIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M6 6C4.89543 6 4 6.89543 4 8V16C4 17.1046 4.89543 18 6 18H18C19.1046 18 20 17.1046 20 16V8C20 6.89543 19.1046 6 18 6H6ZM18 7.3H6C5.6134 7.3 5.3 7.6134 5.3 8V16C5.3 16.3866 5.6134 16.7 6 16.7H18C18.3866 16.7 18.7 16.3866 18.7 16V8C18.7 7.6134 18.3866 7.3 18 7.3Z" fill="black"/>
    </svg>
  );
};

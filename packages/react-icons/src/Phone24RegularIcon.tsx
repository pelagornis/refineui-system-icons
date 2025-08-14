import React from 'react';
import { IconProps } from './types';

export const Phone24RegularIcon: React.FC<IconProps> = ({ 
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
<path d="M12.75 6H11.25C10.8358 6 10.5 6.33579 10.5 6.75C10.5 7.16421 10.8358 7.5 11.25 7.5H12.75C13.1642 7.5 13.5 7.16421 13.5 6.75C13.5 6.33579 13.1642 6 12.75 6Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7 6C7 4.89543 7.89543 4 9 4H15C16.1046 4 17 4.89543 17 6V18C17 19.1046 16.1046 20 15 20H9C7.89543 20 7 19.1046 7 18V6ZM9 5.3H15C15.3866 5.3 15.7 5.6134 15.7 6V18C15.7 18.3866 15.3866 18.7 15 18.7H9C8.6134 18.7 8.3 18.3866 8.3 18V6C8.3 5.6134 8.6134 5.3 9 5.3Z" fill="black"/>
    </svg>
  );
};

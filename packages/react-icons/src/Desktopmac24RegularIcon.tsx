import React from 'react';
import { IconProps } from './types';

export const Desktopmac24RegularIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M6 4C4.89543 4 4 4.89543 4 6V13C4 14.1046 4.89543 15 6 15H9.20714V17.2H7C6.64102 17.2 6.35 17.491 6.35 17.85C6.35 18.209 6.64102 18.5 7 18.5H17C17.359 18.5 17.65 18.209 17.65 17.85C17.65 17.491 17.359 17.2 17 17.2H14.7929V15H18C19.1046 15 20 14.1046 20 13V6C20 4.89543 19.1046 4 18 4H6ZM18 5.3H6C5.6134 5.3 5.3 5.6134 5.3 6V10.85H18.7V6C18.7 5.6134 18.3866 5.3 18 5.3ZM18.7 12.15H5.3V13C5.3 13.3866 5.6134 13.7 6 13.7H18C18.3866 13.7 18.7 13.3866 18.7 13V12.15ZM10.5071 17.2V15H13.4929V17.2H10.5071Z" fill="black"/>
    </svg>
  );
};

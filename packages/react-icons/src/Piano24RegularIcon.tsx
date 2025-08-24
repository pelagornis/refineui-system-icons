import React from 'react';
import { IconProps } from './types';

export const Piano24RegularIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M4 6C4 4.89543 4.89543 4 6 4H18C19.1046 4 20 4.89543 20 6V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18V6ZM11 5.3H13V12.5C13 13.0395 13.2848 13.5125 13.7123 13.7768C13.794 13.8273 13.85 13.9133 13.85 14.0093V18.7H10.15V14.0093C10.15 13.9133 10.206 13.8273 10.2877 13.7768C10.7152 13.5125 11 13.0395 11 12.5V5.3ZM15.15 18.7H18C18.3866 18.7 18.7 18.3866 18.7 18V6C18.7 5.6134 18.3866 5.3 18 5.3H16V12.5C16 13.0395 15.7152 13.5125 15.2877 13.7768C15.206 13.8273 15.15 13.9133 15.15 14.0093V18.7ZM8.7123 13.7768C8.79398 13.8273 8.85 13.9133 8.85 14.0093V18.7H6C5.6134 18.7 5.3 18.3866 5.3 18V6C5.3 5.6134 5.6134 5.3 6 5.3H8V12.5C8 13.0395 8.28482 13.5125 8.7123 13.7768Z" fill="black"/>
    </svg>
  );
};

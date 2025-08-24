import React from 'react';
import { IconProps } from './types';

export const Textboxaligntopcenter24RegularIcon: React.FC<IconProps> = ({ 
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
<path d="M7.1 8.25C7.1 7.89102 7.39102 7.6 7.75 7.6H16.25C16.609 7.6 16.9 7.89102 16.9 8.25C16.9 8.60898 16.609 8.9 16.25 8.9H7.75C7.39102 8.9 7.1 8.60898 7.1 8.25Z" fill="black"/>
<path d="M9 11.1C8.64102 11.1 8.35 11.391 8.35 11.75C8.35 12.109 8.64102 12.4 9 12.4H15C15.359 12.4 15.65 12.109 15.65 11.75C15.65 11.391 15.359 11.1 15 11.1H9Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6 4C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20H18C19.1046 20 20 19.1046 20 18V6C20 4.89543 19.1046 4 18 4H6ZM18 5.3H6C5.6134 5.3 5.3 5.6134 5.3 6V18C5.3 18.3866 5.6134 18.7 6 18.7H18C18.3866 18.7 18.7 18.3866 18.7 18V6C18.7 5.6134 18.3866 5.3 18 5.3Z" fill="black"/>
    </svg>
  );
};

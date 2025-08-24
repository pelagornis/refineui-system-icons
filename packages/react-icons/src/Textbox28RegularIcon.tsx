import React from 'react';
import { IconProps } from './types';

export const Textbox28RegularIcon: React.FC<IconProps> = ({ 
  size = 28, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {{...props}}
    >
      width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.5 9.85C9.14102 9.85 8.85 10.141 8.85 10.5C8.85 10.859 9.14102 11.15 9.5 11.15H18.5C18.859 11.15 19.15 10.859 19.15 10.5C19.15 10.141 18.859 9.85 18.5 9.85H9.5Z" fill="black"/>
<path d="M8.85 14C8.85 13.641 9.14102 13.35 9.5 13.35H14.5C14.859 13.35 15.15 13.641 15.15 14C15.15 14.359 14.859 14.65 14.5 14.65H9.5C9.14102 14.65 8.85 14.359 8.85 14Z" fill="black"/>
<path d="M9.5 16.85C9.14102 16.85 8.85 17.141 8.85 17.5C8.85 17.859 9.14102 18.15 9.5 18.15H17.5C17.859 18.15 18.15 17.859 18.15 17.5C18.15 17.141 17.859 16.85 17.5 16.85H9.5Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6 8C6 6.89543 6.89543 6 8 6H20C21.1046 6 22 6.89543 22 8V20C22 21.1046 21.1046 22 20 22H8C6.89543 22 6 21.1046 6 20V8ZM8 7.3H20C20.3866 7.3 20.7 7.6134 20.7 8V20C20.7 20.3866 20.3866 20.7 20 20.7H8C7.6134 20.7 7.3 20.3866 7.3 20V8C7.3 7.6134 7.6134 7.3 8 7.3Z" fill="black"/>
    </svg>
  );
};

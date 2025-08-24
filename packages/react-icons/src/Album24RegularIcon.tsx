import React from 'react';
import { IconProps } from './types';

export const Album24RegularIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.54913 12C9.54913 10.6464 10.6464 9.54913 12 9.54913C13.3536 9.54913 14.4509 10.6464 14.4509 12C14.4509 13.3536 13.3536 14.4509 12 14.4509C10.6464 14.4509 9.54913 13.3536 9.54913 12ZM12 10.7514C11.3104 10.7514 10.7514 11.3104 10.7514 12C10.7514 12.6896 11.3104 13.2486 12 13.2486C12.6896 13.2486 13.2486 12.6896 13.2486 12C13.2486 11.3104 12.6896 10.7514 12 10.7514Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12ZM12 5.20231C8.24574 5.20231 5.20231 8.24574 5.20231 12C5.20231 15.7543 8.24574 18.7977 12 18.7977C15.7543 18.7977 18.7977 15.7543 18.7977 12C18.7977 8.24574 15.7543 5.20231 12 5.20231Z" fill="black"/>
    </svg>
  );
};

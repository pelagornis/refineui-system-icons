import React from 'react';
import { IconProps } from './types';

export const Dualscreen24FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M4 8C4 6.89543 4.89543 6 6 6H10.85C11.1261 6 11.35 6.22386 11.35 6.5V17.5C11.35 17.7761 11.1261 18 10.85 18H6C4.89543 18 4 17.1046 4 16V8ZM12.65 17.5C12.65 17.7761 12.8739 18 13.15 18H18C19.1046 18 20 17.1046 20 16V8C20 6.89543 19.1046 6 18 6H13.15C12.8739 6 12.65 6.22386 12.65 6.5V17.5ZM15 14.85C14.641 14.85 14.35 15.141 14.35 15.5C14.35 15.859 14.641 16.15 15 16.15H16C16.359 16.15 16.65 15.859 16.65 15.5C16.65 15.141 16.359 14.85 16 14.85H15ZM8 14.85C7.64102 14.85 7.35 15.141 7.35 15.5C7.35 15.859 7.64102 16.15 8 16.15H9C9.35898 16.15 9.65 15.859 9.65 15.5C9.65 15.141 9.35898 14.85 9 14.85H8Z" fill="black"/>
    </svg>
  );
};

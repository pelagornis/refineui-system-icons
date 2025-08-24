import React from 'react';
import { IconProps } from './types';

export const Numbercircle524FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM11.1 8.35C10.5256 8.35 9.85 8.75894 9.85 9.5V11C9.85 11.7411 10.5256 12.15 11.1 12.15H12.85V14.35H10.5C10.141 14.35 9.85 14.641 9.85 15C9.85 15.359 10.141 15.65 10.5 15.65H12.9C13.4744 15.65 14.15 15.2411 14.15 14.5V12C14.15 11.2589 13.4744 10.85 12.9 10.85H11.15V9.65H13.5C13.859 9.65 14.15 9.35898 14.15 9C14.15 8.64102 13.859 8.35 13.5 8.35H11.1Z" fill="black"/>
    </svg>
  );
};

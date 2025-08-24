import React from 'react';
import { IconProps } from './types';

export const Numbercircle524RegularIcon: React.FC<IconProps> = ({ 
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
<path d="M11.1 8.35C10.5256 8.35 9.85 8.75894 9.85 9.5V11C9.85 11.7411 10.5256 12.15 11.1 12.15H12.85V14.35H10.5C10.141 14.35 9.85 14.641 9.85 15C9.85 15.359 10.141 15.65 10.5 15.65H12.9C13.4744 15.65 14.15 15.2411 14.15 14.5V12C14.15 11.2589 13.4744 10.85 12.9 10.85H11.15V9.65H13.5C13.859 9.65 14.15 9.35898 14.15 9C14.15 8.64102 13.859 8.35 13.5 8.35H11.1Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM18.7 12C18.7 15.7003 15.7003 18.7 12 18.7C8.29969 18.7 5.3 15.7003 5.3 12C5.3 8.29969 8.29969 5.3 12 5.3C15.7003 5.3 18.7 8.29969 18.7 12Z" fill="black"/>
    </svg>
  );
};

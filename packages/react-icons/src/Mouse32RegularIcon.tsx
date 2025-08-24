import React from 'react';
import { IconProps } from './types';

export const Mouse32RegularIcon: React.FC<IconProps> = ({ 
  size = 32, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {{...props}}
    >
      width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8 10.3333C8 7.38781 10.3878 5 13.3333 5H18.6667C21.6122 5 24 7.38781 24 10.3333V18.3333C24 22.7516 20.4183 26.3333 16 26.3333C11.5817 26.3333 8 22.7516 8 18.3333V10.3333ZM16.8667 7.06667C16.8667 6.88257 17.0159 6.73333 17.2 6.73333H18.6667C20.6549 6.73333 22.2667 8.34511 22.2667 10.3333V18.3333C22.2667 21.7943 19.461 24.6 16 24.6C12.539 24.6 9.73333 21.7943 9.73333 18.3333V10.3333C9.73333 8.34511 11.3451 6.73333 13.3333 6.73333H14.8C14.9841 6.73333 15.1333 6.88257 15.1333 7.06667V13C15.1333 13.4786 15.5214 13.8667 16 13.8667C16.4786 13.8667 16.8667 13.4786 16.8667 13V7.06667Z" fill="black"/>
    </svg>
  );
};

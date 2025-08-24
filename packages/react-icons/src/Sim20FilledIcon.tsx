import React from 'react';
import { IconProps } from './types';

export const Sim20FilledIcon: React.FC<IconProps> = ({ 
  size = 20, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {{...props}}
    >
      width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.7559 6.92259C14.9122 7.07887 15 7.29083 15 7.51184V15.5C15 15.9602 14.6269 16.3333 14.1667 16.3333H5.83333C5.3731 16.3333 5 15.9602 5 15.5V3.83333C5 3.3731 5.3731 3 5.83333 3H10.4882C10.7092 3 10.9211 3.0878 11.0774 3.24408L14.7559 6.92259ZM9.45833 14.375V8.29167H8.33333C7.57394 8.29167 6.95833 8.90728 6.95833 9.66667V13C6.95833 13.7594 7.57394 14.375 8.33333 14.375H9.45833ZM10.5417 11.875V14.375H11.6667C12.4261 14.375 13.0417 13.7594 13.0417 13V11.875H10.5417ZM13.0417 10.7917V9.66667C13.0417 8.90728 12.4261 8.29167 11.6667 8.29167H10.5417V10.7917H13.0417Z" fill="black"/>
    </svg>
  );
};

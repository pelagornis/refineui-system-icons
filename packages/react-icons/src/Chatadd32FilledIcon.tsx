import React from 'react';
import { IconProps } from './types';

export const Chatadd32FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M26.3333 15.6667C26.3333 21.5577 21.5577 26.3333 15.6667 26.3333H6.33333C5.59695 26.3333 5 25.7364 5 25V15.6667C5 9.77563 9.77563 5 15.6667 5C21.5577 5 26.3333 9.77563 26.3333 15.6667ZM16.5333 11C16.5333 10.5214 16.1453 10.1333 15.6667 10.1333C15.188 10.1333 14.8 10.5214 14.8 11V14.8H11C10.5214 14.8 10.1333 15.188 10.1333 15.6667C10.1333 16.1453 10.5214 16.5333 11 16.5333H14.8V20.3333C14.8 20.812 15.188 21.2 15.6667 21.2C16.1453 21.2 16.5333 20.812 16.5333 20.3333V16.5333H20.3333C20.812 16.5333 21.2 16.1453 21.2 15.6667C21.2 15.188 20.812 14.8 20.3333 14.8H16.5333V11Z" fill="black"/>
    </svg>
  );
};

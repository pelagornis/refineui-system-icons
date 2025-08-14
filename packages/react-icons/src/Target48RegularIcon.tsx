import React from 'react';
import { IconProps } from './types';

export const Target48RegularIcon: React.FC<IconProps> = ({ 
  size = 48, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {{...props}}
    >
      width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M24 26C25.1046 26 26 25.1046 26 24C26 22.8954 25.1046 22 24 22C22.8954 22 22 22.8954 22 24C22 25.1046 22.8954 26 24 26Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M24 14.7C18.8636 14.7 14.7 18.8638 14.7 24C14.7 29.1363 18.8636 33.3 24 33.3C29.1362 33.3 33.2999 29.1363 33.2999 24C33.2999 18.8638 29.1362 14.7 24 14.7ZM17.2999 24C17.2999 20.2997 20.2997 17.3 24 17.3C27.7003 17.3 30.7 20.2997 30.7 24C30.7 27.7003 27.7003 30.7 24 30.7C20.2997 30.7 17.2999 27.7003 17.2999 24Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M24 40C32.8365 40 40 32.8365 40 24C40 15.1635 32.8365 8 24 8C15.1635 8 8 15.1635 8 24C8 32.8365 15.1635 40 24 40ZM24 37.4C31.4006 37.4 37.4 31.4006 37.4 24C37.4 16.5994 31.4006 10.6 24 10.6C16.5994 10.6 10.6 16.5994 10.6 24C10.6 31.4006 16.5994 37.4 24 37.4Z" fill="black"/>
    </svg>
  );
};

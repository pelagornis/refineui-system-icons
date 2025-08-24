import React from 'react';
import { IconProps } from './types';

export const Previous20RegularIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.6344 10.4113C5.11821 10.0932 5.11821 9.36985 5.6344 9.05174L15.0345 3.25871C15.5955 2.91296 16.3333 3.29912 16.3333 3.9385L16.3333 15.5246C16.3333 16.1639 15.5955 16.5501 15.0345 16.2044L5.6344 10.4113ZM15.25 14.3183C15.25 14.6444 14.8923 14.8441 14.6147 14.6731L7.17189 10.0863C6.90779 9.92351 6.90779 9.53956 7.17189 9.3768L14.6147 4.79C14.8923 4.61892 15.25 4.81863 15.25 5.14473L15.25 14.3183Z" fill="black"/>
<path d="M3 15.5087C3 15.8079 3.24252 16.0504 3.54169 16.0504C3.84085 16.0504 4.08337 15.8079 4.08337 15.5087L4.08337 3.54169C4.08337 3.24252 3.84085 3 3.54169 3C3.24252 3 3 3.24252 3 3.54169L3 15.5087Z" fill="black"/>
    </svg>
  );
};

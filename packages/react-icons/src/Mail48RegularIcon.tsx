import React from 'react';
import { IconProps } from './types';

export const Mail48RegularIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M8 14C8 12.8954 8.89543 12 10 12H38C39.1046 12 40 12.8954 40 14V34C40 35.1046 39.1046 36 38 36H10C8.89543 36 8 35.1046 8 34V14ZM10.6 16.0261V33.4H37.4V16.0261L25.9181 24.2275C24.7707 25.0471 23.2293 25.0471 22.0819 24.2275L10.6 16.0261ZM34.9234 14.6H13.0766L23.5931 22.1118C23.8365 22.2857 24.1635 22.2857 24.4069 22.1118L34.9234 14.6Z" fill="black"/>
    </svg>
  );
};

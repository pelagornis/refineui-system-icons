import React from 'react';
import { IconProps } from './types';

export const Copy48RegularIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M14 12.0004C14 9.79106 15.7909 8 18 8H34C36.2091 8 38 9.79106 38 12.0004V32.0026C38 34.212 36.2091 36.0031 34 36.0031H18C15.7909 36.0031 14 34.212 14 32.0026V12.0004ZM18 10.6003H34C34.7732 10.6003 35.4 11.2272 35.4 12.0004V32.0026C35.4 32.7759 34.7732 33.4028 34 33.4028H18C17.2268 33.4028 16.6 32.7759 16.6 32.0026V12.0004C16.6 11.2272 17.2268 10.6003 18 10.6003Z" fill="black"/>
<path d="M32.7069 40C33.4248 40 34.0069 39.4179 34.0069 38.6999C34.0069 37.9818 33.4248 37.3997 32.7069 37.3997L15.3 37.3997C13.8088 37.3997 12.6 36.1908 12.6 34.6994L12.6 13.3006C12.6 12.5825 12.018 12.0004 11.3 12.0004C10.582 12.0004 10 12.5825 10 13.3006V34.6994C10 37.6268 12.3729 40 15.3 40H32.7069Z" fill="black"/>
    </svg>
  );
};

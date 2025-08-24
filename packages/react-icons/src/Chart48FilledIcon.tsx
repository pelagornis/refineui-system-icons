import React from 'react';
import { IconProps } from './types';

export const Chart48FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M10.5999 9.29995C10.5999 8.58201 10.0179 8 9.29995 8C8.58201 8 8 8.58201 8 9.29995V36.7001C8 38.5226 9.4774 40 11.2999 40H38.7001C39.418 40 40 39.418 40 38.7001C40 37.9821 39.418 37.4001 38.7001 37.4001H11.2999C10.9133 37.4001 10.5999 37.0867 10.5999 36.7001V9.29995Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M38.7049 13.114C38.7049 11.065 36.2276 10.0389 34.7787 11.4877L25.7925 20.4739L22.6188 17.3002C21.8726 16.554 20.7142 16.4114 19.8092 16.9543L13.2226 20.9063C12.5298 21.322 12.106 22.0706 12.106 22.8785V34.1989C12.106 35.193 12.9118 35.9989 13.9059 35.9989H36.905C37.899 35.9989 38.7049 35.193 38.7049 34.1989V13.114Z" fill="black"/>
    </svg>
  );
};

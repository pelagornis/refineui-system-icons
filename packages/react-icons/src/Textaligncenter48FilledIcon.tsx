import React from 'react';
import { IconProps } from './types';

export const Textaligncenter48FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M13 16C13 14.8954 13.8954 14 15 14H33C34.1046 14 35 14.8954 35 16C35 17.1046 34.1046 18 33 18H15C13.8954 18 13 17.1046 13 16Z" fill="black"/>
<path d="M9 24C9 22.8954 9.89543 22 11 22H37C38.1046 22 39 22.8954 39 24C39 25.1046 38.1046 26 37 26H11C9.89543 26 9 25.1046 9 24Z" fill="black"/>
<path d="M19 30C17.8954 30 17 30.8954 17 32C17 33.1046 17.8954 34 19 34H29C30.1046 34 31 33.1046 31 32C31 30.8954 30.1046 30 29 30H19Z" fill="black"/>
    </svg>
  );
};

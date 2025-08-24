import React from 'react';
import { IconProps } from './types';

export const Tv48FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M10 12C8.89543 12 8 12.8954 8 14V30C8 31.1046 8.89543 32 10 32H38C39.1046 32 40 31.1046 40 30V14C40 12.8954 39.1046 12 38 12H10Z" fill="black"/>
<path d="M13.3 34C12.582 34 12 34.582 12 35.3C12 36.018 12.582 36.6 13.3 36.6H34.7C35.418 36.6 36 36.018 36 35.3C36 34.582 35.418 34 34.7 34H13.3Z" fill="black"/>
    </svg>
  );
};

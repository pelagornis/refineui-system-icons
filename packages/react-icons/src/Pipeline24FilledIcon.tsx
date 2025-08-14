import React from 'react';
import { IconProps } from './types';

export const Pipeline24FilledIcon: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {{...props}}
    >
      width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 7C4.89543 7 4 7.89543 4 9V17C4 18.1046 4.89543 19 6 19C7.10457 19 8 18.1046 8 17V9C8 7.89543 7.10457 7 6 7Z" fill="black"/>
<path d="M9.55 9.35C9.41193 9.35 9.3 9.46193 9.3 9.6V16.4C9.3 16.5381 9.41193 16.65 9.55 16.65H14.45C14.5881 16.65 14.7 16.5381 14.7 16.4V9.6C14.7 9.46193 14.5881 9.35 14.45 9.35H9.55Z" fill="black"/>
<path d="M16 9V17C16 18.1046 16.8954 19 18 19C19.1046 19 20 18.1046 20 17V9C20 7.89543 19.1046 7 18 7C16.8954 7 16 7.89543 16 9Z" fill="black"/>
    </svg>
  );
};

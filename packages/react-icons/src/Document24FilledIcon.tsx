import React from 'react';
import { IconProps } from './types';

export const Document24FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M7 20C6.44772 20 6 19.5523 6 19V5C6 4.44772 6.44772 4 7 4H11C11.5523 4 12 4.44772 12 5V9C12 9.55228 12.4477 10 13 10H17C17.5523 10 18 10.4477 18 11V19C18 19.5523 17.5523 20 17 20H7Z" fill="black"/>
<path d="M18 9L13 4V8.75C13 8.88807 13.1119 9 13.25 9H18Z" fill="black"/>
    </svg>
  );
};

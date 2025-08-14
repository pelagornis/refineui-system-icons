import React from 'react';
import { IconProps } from './types';

export const Video24FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M6 7C4.89543 7 4 7.89543 4 9V15C4 16.1046 4.89543 17 6 17H13C14.1046 17 15 16.1046 15 15V9C15 7.89543 14.1046 7 13 7H6Z" fill="black"/>
<path d="M20 14.865V9.13504C20 8.28721 19.0111 7.82405 18.3598 8.36682L15.7642 10.5298C15.5362 10.7198 15.4044 11.0012 15.4044 11.298V12.702C15.4044 12.9988 15.5362 13.2802 15.7642 13.4702L18.3598 15.6332C19.0111 16.176 20 15.7128 20 14.865Z" fill="black"/>
    </svg>
  );
};

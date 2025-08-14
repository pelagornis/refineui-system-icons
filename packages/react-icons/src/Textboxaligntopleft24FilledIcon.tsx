import React from 'react';
import { IconProps } from './types';

export const Textboxaligntopleft24FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M6 4C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20H18C19.1046 20 20 19.1046 20 18V6C20 4.89543 19.1046 4 18 4H6ZM7.1 11.75C7.1 11.391 7.39102 11.1 7.75 11.1H13.75C14.109 11.1 14.4 11.391 14.4 11.75C14.4 12.109 14.109 12.4 13.75 12.4H7.75C7.39102 12.4 7.1 12.109 7.1 11.75ZM7.1 8.25C7.1 7.89102 7.39102 7.6 7.75 7.6H16.25C16.609 7.6 16.9 7.89102 16.9 8.25C16.9 8.60898 16.609 8.9 16.25 8.9H7.75C7.39102 8.9 7.1 8.60898 7.1 8.25Z" fill="black"/>
    </svg>
  );
};

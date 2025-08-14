import React from 'react';
import { IconProps } from './types';

export const Textboxalignmiddle24FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M6 4C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20H18C19.1046 20 20 19.1046 20 18V6C20 4.89543 19.1046 4 18 4H6ZM7.75 9.6C7.39102 9.6 7.1 9.89102 7.1 10.25C7.1 10.609 7.39102 10.9 7.75 10.9H16.25C16.609 10.9 16.9 10.609 16.9 10.25C16.9 9.89102 16.609 9.6 16.25 9.6H7.75ZM7.75 13.1C7.39102 13.1 7.1 13.391 7.1 13.75C7.1 14.109 7.39102 14.4 7.75 14.4H16.25C16.609 14.4 16.9 14.109 16.9 13.75C16.9 13.391 16.609 13.1 16.25 13.1H7.75Z" fill="black"/>
    </svg>
  );
};

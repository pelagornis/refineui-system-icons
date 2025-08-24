import React from 'react';
import { IconProps } from './types';

export const Accessibility24FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M14 6C14 7.10457 13.1046 8 12 8C10.8954 8 10 7.10457 10 6C10 4.89543 10.8954 4 12 4C13.1046 4 14 4.89543 14 6Z" fill="black"/>
<path d="M10.5 8.5L6 7C5.5 7 5 7.34695 5 8C5 8.65305 6 9 6 9L10 10V14L8 19C8 19.5 8.5 20 9 20C10 20 9.93619 19.7233 10 19.5C10.3333 18.3333 11.1 15.8 11.5 15C11.9 14.2 12.3333 14.6667 12.5 15L14 19.5C14 19.6667 14.2 20 15 20C15.8 20 16 19.3333 16 19L14 14V10L18 9C18 9 19 8.8 19 8C19 7.2 18.5 7 18 7L13.5 8.5C12.5 9 11.5 9 10.5 8.5Z" fill="black"/>
    </svg>
  );
};

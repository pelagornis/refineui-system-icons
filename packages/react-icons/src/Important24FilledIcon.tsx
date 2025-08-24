import React from 'react';
import { IconProps } from './types';

export const Important24FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M15 6.87056C15 8.45592 13.6569 15.4822 12 15.4822C10.3431 15.4822 9 8.45592 9 6.87056C9 5.28519 10.3431 4 12 4C13.6569 4 15 5.28519 15 6.87056Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 15.7098C10.8142 15.7098 9.85 16.669 9.85 17.8558C9.85 19.0426 10.8142 20.0018 12 20.0018C13.1858 20.0018 14.15 19.0426 14.15 17.8558C14.15 16.669 13.1858 15.7098 12 15.7098Z" fill="black"/>
    </svg>
  );
};

import React from 'react';
import { IconProps } from './types';

export const Lightbulb24FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M6 10C6 11.9238 6.90541 13.6361 8.31337 14.7341C8.47462 14.8599 8.70536 15.4443 8.96098 16.1809C8.99603 16.2819 9.09104 16.35 9.19794 16.35H14.8021C14.909 16.35 15.004 16.2819 15.039 16.1809C15.2946 15.4443 15.5254 14.8599 15.6866 14.7341C17.0946 13.6361 18 11.9238 18 10C18 6.68629 15.3137 4 12 4C8.68629 4 6 6.68629 6 10Z" fill="black"/>
<path d="M13.5 20C13.7192 20 14.0695 19.0637 14.4363 17.9789C14.491 17.8173 14.3705 17.65 14.1998 17.65H9.80018C9.62953 17.65 9.50899 17.8173 9.56366 17.9789C9.9305 19.0637 10.2808 20 10.5 20H13.5Z" fill="black"/>
    </svg>
  );
};

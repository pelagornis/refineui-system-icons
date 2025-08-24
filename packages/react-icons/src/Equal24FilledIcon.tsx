import React from 'react';
import { IconProps } from './types';

export const Equal24FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M4.99992 8C4.44768 8 4 8.44758 4 8.99969C4 9.55181 4.44768 9.99939 4.99992 9.99939H19.0001C19.5523 9.99939 20 9.55181 20 8.99969C20 8.44758 19.5523 8 19.0001 8H4.99992Z" fill="black"/>
<path d="M4.99992 14.0006C4.44768 14.0006 4 14.4482 4 15.0003C4 15.5524 4.44768 16 4.99992 16H19.0001C19.5523 16 20 15.5524 20 15.0003C20 14.4482 19.5523 14.0006 19.0001 14.0006H4.99992Z" fill="black"/>
    </svg>
  );
};

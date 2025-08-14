import React from 'react';
import { IconProps } from './types';

export const Equal24RegularIcon: React.FC<IconProps> = ({ 
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
<path d="M4.6502 8C4.2911 8 4 8.29097 4 8.6499C4 9.00883 4.2911 9.2998 4.6502 9.2998H19.3498C19.7089 9.2998 20 9.00883 20 8.6499C20 8.29097 19.7089 8 19.3498 8H4.6502Z" fill="black"/>
<path d="M4.6502 14.7002C4.2911 14.7002 4 14.9912 4 15.3501C4 15.709 4.2911 16 4.6502 16H19.3498C19.7089 16 20 15.709 20 15.3501C20 14.9912 19.7089 14.7002 19.3498 14.7002H4.6502Z" fill="black"/>
    </svg>
  );
};

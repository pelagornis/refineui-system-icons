import React from 'react';
import { IconProps } from './types';

export const Chevronup16FilledIcon: React.FC<IconProps> = ({ 
  size = 16, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {{...props}}
    >
      width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.13819 10.7393C3.87778 10.9997 3.45568 10.9997 3.19528 10.7393C2.93492 10.479 2.93489 10.057 3.19528 9.79666L7.75158 5.24146C8.07391 4.9195 8.59616 4.91953 8.9185 5.24146L13.4748 9.79666L13.5204 9.84744C13.734 10.1093 13.7189 10.4953 13.4748 10.7393C13.2307 10.9834 12.8446 10.9985 12.5827 10.7849L12.5319 10.7393L8.33504 6.5435L4.13819 10.7393Z" fill="black"/>
    </svg>
  );
};

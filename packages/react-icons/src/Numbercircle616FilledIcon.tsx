import React from 'react';
import { IconProps } from './types';

export const Numbercircle616FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M7.76667 9.66667V8.76667H8.66667C8.79553 8.76667 8.9 8.87113 8.9 9V9.66667C8.9 9.79553 8.79553 9.9 8.66667 9.9H8C7.87113 9.9 7.76667 9.79553 7.76667 9.66667Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.33333 13.6667C11.2789 13.6667 13.6667 11.2789 13.6667 8.33333C13.6667 5.38781 11.2789 3 8.33333 3C5.38781 3 3 5.38781 3 8.33333C3 11.2789 5.38781 13.6667 8.33333 13.6667ZM8 5.9C7.39249 5.9 6.9 6.39249 6.9 7V9.66667C6.9 10.2742 7.39249 10.7667 8 10.7667H8.66667C9.27418 10.7667 9.76667 10.2742 9.76667 9.66667V9C9.76667 8.39249 9.27418 7.9 8.66667 7.9H7.76667V7C7.76667 6.87113 7.87113 6.76667 8 6.76667H9.33333C9.57266 6.76667 9.76667 6.57266 9.76667 6.33333C9.76667 6.09401 9.57266 5.9 9.33333 5.9H8Z" fill="black"/>
    </svg>
  );
};

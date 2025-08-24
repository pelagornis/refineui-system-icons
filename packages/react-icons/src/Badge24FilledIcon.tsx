import React from 'react';
import { IconProps } from './types';

export const Badge24FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M17.8667 8.26667C19.0449 8.26667 20 7.31154 20 6.13333C20 4.95513 19.0449 4 17.8667 4C16.6885 4 15.7333 4.95513 15.7333 6.13333C15.7333 7.31154 16.6885 8.26667 17.8667 8.26667Z" fill="black"/>
<path d="M17.8667 9.33333C18.2407 9.33333 18.5997 9.26917 18.9333 9.15125V17.8667C18.9333 19.0449 17.9782 20 16.8 20H6.13333C4.95514 20 4 19.0449 4 17.8667V7.2C4 6.02179 4.95514 5.06667 6.13333 5.06667H14.8488C14.7309 5.40029 14.6667 5.75933 14.6667 6.13333C14.6667 7.90065 16.0993 9.33333 17.8667 9.33333Z" fill="black"/>
    </svg>
  );
};

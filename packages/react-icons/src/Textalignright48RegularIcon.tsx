import React from 'react';
import { IconProps } from './types';

export const Textalignright48RegularIcon: React.FC<IconProps> = ({ 
  size = 48, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {{...props}}
    >
      width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.4307 15.2997C17.4307 14.5819 18.0127 14 18.7307 14H37.6999C38.4179 14 39 14.5819 39 15.2997C39 16.0175 38.4179 16.5994 37.6999 16.5994H18.7307C18.0127 16.5994 17.4307 16.0175 17.4307 15.2997Z" fill="black"/>
<path d="M9 24.0001C9 23.2823 9.58205 22.7004 10.3 22.7004H37.7C38.4179 22.7004 39 23.2823 39 24.0001C39 24.7179 38.4179 25.2998 37.7 25.2998H10.3C9.58205 25.2998 9 24.7179 9 24.0001Z" fill="black"/>
<path d="M27.1614 31.4006C26.4434 31.4006 25.8614 31.9825 25.8614 32.7003C25.8614 33.4181 26.4434 34 27.1614 34H37.6999C38.4179 34 38.9999 33.4181 38.9999 32.7003C38.9999 31.9825 38.4179 31.4006 37.6999 31.4006H27.1614Z" fill="black"/>
    </svg>
  );
};

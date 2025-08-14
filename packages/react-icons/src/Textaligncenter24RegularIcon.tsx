import React from 'react';
import { IconProps } from './types';

export const Textaligncenter24RegularIcon: React.FC<IconProps> = ({ 
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
<path d="M6.10761 7.65084C6.10761 7.29139 6.39864 7 6.75763 7H16.2422C16.6012 7 16.8922 7.29139 16.8922 7.65084C16.8922 8.01028 16.6012 8.30167 16.2422 8.30167H6.75763C6.39864 8.30167 6.10761 8.01028 6.10761 7.65084Z" fill="black"/>
<path d="M4 12C4 11.6406 4.29102 11.3492 4.65002 11.3492H18.35C18.709 11.3492 19 11.6406 19 12C19 12.3594 18.709 12.6508 18.35 12.6508H4.65002C4.29102 12.6508 4 12.3594 4 12Z" fill="black"/>
<path d="M8.86537 15.6983C8.50637 15.6983 8.21534 15.9897 8.21534 16.3492C8.21534 16.7086 8.50637 17 8.86537 17H14.1346C14.4936 17 14.7846 16.7086 14.7846 16.3492C14.7846 15.9897 14.4936 15.6983 14.1346 15.6983H8.86537Z" fill="black"/>
    </svg>
  );
};

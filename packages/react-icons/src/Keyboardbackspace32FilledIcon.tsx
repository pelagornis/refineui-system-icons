import React from 'react';
import { IconProps } from './types';

export const Keyboardbackspace32FilledIcon: React.FC<IconProps> = ({ 
  size = 32, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {{...props}}
    >
      width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.8076 9.46157C14.3055 10.0186 14.2419 10.8603 13.6656 11.3415L10.0842 14.3321H24.9545C25.716 14.3321 26.3333 14.9289 26.3333 15.665C26.3333 16.4011 25.716 16.9979 24.9545 16.9979H10.0842L13.6656 19.9885C14.2419 20.4697 14.3055 21.3114 13.8076 21.8684C13.3098 22.4255 12.4391 22.487 11.8629 22.0057L5.47747 16.6736C4.84084 16.142 4.84084 15.188 5.47747 14.6564L11.8629 9.32425C12.4391 8.84304 13.3098 8.90452 13.8076 9.46157Z" fill="black"/>
    </svg>
  );
};

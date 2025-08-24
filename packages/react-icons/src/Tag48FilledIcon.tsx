import React from 'react';
import { IconProps } from './types';

export const Tag48FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.0733 8.00003C8.92824 8.00003 8 8.92828 8 10.0733L8.00002 21.2236C8.00003 21.7734 8.21846 22.3008 8.60728 22.6896L25.3104 39.3927C26.1201 40.2024 27.4328 40.2024 28.2425 39.3927L39.3927 28.2425C40.2024 27.4328 40.2024 26.1201 39.3927 25.3104L22.6896 8.60725C22.3008 8.21843 21.7734 8 21.2236 8L10.0733 8.00003ZM17.3298 20.4397C19.0474 20.4397 20.4397 19.0474 20.4397 17.3298C20.4397 15.6122 19.0474 14.2199 17.3298 14.2199C15.6122 14.2199 14.2199 15.6122 14.2199 17.3298C14.2199 19.0474 15.6122 20.4397 17.3298 20.4397Z" fill="black"/>
    </svg>
  );
};

import React from 'react';
import { IconProps } from './types';

export const Hourglass32FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M9.10855 5H23.5581C25.253 5 26.2528 6.80605 25.2927 8.13306L20.6614 14.5336C20.1676 15.2161 20.1676 16.1172 20.6614 16.7997L25.2927 23.2003C26.2528 24.5273 25.253 26.3333 23.5581 26.3333H9.10855C7.4137 26.3333 6.41382 24.5273 7.374 23.2003L12.0053 16.7997C12.4991 16.1172 12.4991 15.2161 12.0053 14.5336L7.374 8.13306C6.41382 6.80605 7.4137 5 9.10855 5Z" fill="black"/>
    </svg>
  );
};

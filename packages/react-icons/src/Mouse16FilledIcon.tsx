import React from 'react';
import { IconProps } from './types';

export const Mouse16FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M7.56667 7V3.33333C7.56667 3.14924 7.41743 3 7.23333 3H6.66667C5.19391 3 4 4.19391 4 5.66667V9.66667C4 11.8758 5.79086 13.6667 8 13.6667C10.2091 13.6667 12 11.8758 12 9.66667V5.66667C12 4.19391 10.8061 3 9.33333 3H8.76667C8.58257 3 8.43333 3.14924 8.43333 3.33333V7C8.43333 7.23932 8.23932 7.43333 8 7.43333C7.76068 7.43333 7.56667 7.23932 7.56667 7Z" fill="black"/>
    </svg>
  );
};

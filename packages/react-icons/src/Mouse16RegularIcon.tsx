import React from 'react';
import { IconProps } from './types';

export const Mouse16RegularIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M4 5.66667C4 4.19391 5.19391 3 6.66667 3H9.33333C10.8061 3 12 4.19391 12 5.66667V9.66667C12 11.8758 10.2091 13.6667 8 13.6667C5.79086 13.6667 4 11.8758 4 9.66667V5.66667ZM8.43333 4.03333C8.43333 3.94129 8.50795 3.86667 8.6 3.86667H9.33333C10.3274 3.86667 11.1333 4.67255 11.1333 5.66667V9.66667C11.1333 11.3972 9.73049 12.8 8 12.8C6.26951 12.8 4.86667 11.3972 4.86667 9.66667V5.66667C4.86667 4.67255 5.67255 3.86667 6.66667 3.86667H7.4C7.49205 3.86667 7.56667 3.94129 7.56667 4.03333V7C7.56667 7.23932 7.76068 7.43333 8 7.43333C8.23932 7.43333 8.43333 7.23932 8.43333 7V4.03333Z" fill="black"/>
    </svg>
  );
};

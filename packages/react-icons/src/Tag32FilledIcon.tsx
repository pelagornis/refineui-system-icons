import React from 'react';
import { IconProps } from './types';

export const Tag32FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.38219 5.00002C5.61883 5.00002 5 5.61885 5 6.38222L5.00002 13.8157C5.00002 14.1823 5.14564 14.5338 5.40485 14.7931L16.5403 25.9285C17.0801 26.4683 17.9552 26.4683 18.495 25.9285L25.9285 18.495C26.4683 17.9552 26.4683 17.0801 25.9285 16.5403L14.7931 5.40484C14.5339 5.14562 14.1823 5 13.8157 5L6.38219 5.00002ZM11.2199 13.2932C12.3649 13.2932 13.2932 12.3649 13.2932 11.2199C13.2932 10.0748 12.3649 9.14658 11.2199 9.14658C10.0748 9.14658 9.14658 10.0748 9.14658 11.2199C9.14658 12.3649 10.0748 13.2932 11.2199 13.2932Z" fill="black"/>
    </svg>
  );
};

import React from 'react';
import { IconProps } from './types';

export const Cloud24FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M17.5714 11.5C17.0191 11.5 16.583 11.0465 16.46 10.5081C16.0011 8.50002 14.1785 7 12 7C9.8215 7 7.99892 8.50002 7.54 10.5081C7.41695 11.0465 6.98086 11.5 6.42857 11.5H6.28571C5.02335 11.5 4 12.5074 4 13.75C4 14.9926 5.02335 16 6.28571 16H17.7143C18.9767 16 20 14.9926 20 13.75C20 12.5074 18.9767 11.5 17.7143 11.5H17.5714Z" fill="black"/>
    </svg>
  );
};

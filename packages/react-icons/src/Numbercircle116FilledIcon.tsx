import React from 'react';
import { IconProps } from './types';

export const Numbercircle116FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.33333 13.6667C11.2789 13.6667 13.6667 11.2789 13.6667 8.33333C13.6667 5.38781 11.2789 3 8.33333 3C5.38781 3 3 5.38781 3 8.33333C3 11.2789 5.38781 13.6667 8.33333 13.6667ZM8.23333 10.3333V7.30095L7.64337 7.90513C7.47617 8.07636 7.20182 8.07963 7.03059 7.91243C6.85936 7.74523 6.85609 7.47088 7.02329 7.29965L8.24282 6.05072C8.57169 5.71393 9.1 5.97456 9.1 6.40174V10.3333C9.1 10.5727 8.90599 10.7667 8.66667 10.7667C8.42734 10.7667 8.23333 10.5727 8.23333 10.3333Z" fill="black"/>
    </svg>
  );
};

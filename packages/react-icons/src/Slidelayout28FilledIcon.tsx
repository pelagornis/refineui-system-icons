import React from 'react';
import { IconProps } from './types';

export const Slidelayout28FilledIcon: React.FC<IconProps> = ({ 
  size = 28, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {{...props}}
    >
      width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M5 9.33333C5 8.04467 6.04467 7 7.33333 7H21.3333C22.622 7 23.6667 8.04467 23.6667 9.33333V18.6667C23.6667 19.9553 22.622 21 21.3333 21H7.33333C6.04467 21 5 19.9553 5 18.6667V9.33333ZM9.66667 9.74167C8.60352 9.74167 7.74167 10.6035 7.74167 11.6667V16.3333C7.74167 17.3965 8.60352 18.2583 9.66667 18.2583H19C20.0631 18.2583 20.925 17.3965 20.925 16.3333V11.6667C20.925 10.6035 20.0631 9.74167 19 9.74167H9.66667Z" fill="black"/>
<path d="M19.4083 14.7583H12.7583V16.7417H19C19.2255 16.7417 19.4083 16.5589 19.4083 16.3333V14.7583Z" fill="black"/>
<path d="M11.2417 16.7417V14.7583H9.25833V16.3333C9.25833 16.5589 9.44115 16.7417 9.66667 16.7417H11.2417Z" fill="black"/>
<path d="M9.66667 11.2583C9.44115 11.2583 9.25833 11.4412 9.25833 11.6667V13.2417H19.4083V11.6667C19.4083 11.4412 19.2255 11.2583 19 11.2583H9.66667Z" fill="black"/>
    </svg>
  );
};

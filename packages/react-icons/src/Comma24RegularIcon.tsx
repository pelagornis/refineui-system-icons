import React from 'react';
import { IconProps } from './types';

export const Comma24RegularIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M7 8.86839C7 6.17965 9.23545 4 11.993 4C14.7452 4 16.9773 6.1711 16.986 8.85256C17.0768 10.849 16.7454 13.6001 15.4037 15.8813C14.1146 18.0732 11.9062 19.7974 8.39575 19.9989C8.01095 20.021 7.69795 19.7139 7.69795 19.338C7.69795 18.9622 8.01154 18.6603 8.39614 18.6351C11.356 18.4411 13.1318 17.0081 14.1928 15.2043C14.6758 14.383 15.013 13.4785 15.2364 12.5699C14.3639 13.2974 13.2311 13.7368 11.993 13.7368C9.23545 13.7368 7 11.5571 7 8.86839Z" fill="black"/>
    </svg>
  );
};

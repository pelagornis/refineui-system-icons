import React from 'react';
import { IconProps } from './types';

export const Location28FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M22.3333 13.2442C22.3333 17.2013 18.8086 20.0624 15.5882 22.6765C15.2346 22.9635 14.8846 23.2476 14.5434 23.5298C14.3248 23.7106 14.0085 23.7106 13.79 23.5298C13.4488 23.2476 13.0989 22.9636 12.7453 22.6766C9.52488 20.0625 6 17.2013 6 13.2442C6 8.69105 9.65634 5 14.1667 5C18.677 5 22.3333 8.69105 22.3333 13.2442ZM11.075 13.2442C11.075 11.5312 12.4524 10.1304 14.1667 10.1304C15.8809 10.1304 17.2583 11.5312 17.2583 13.2442C17.2583 14.9571 15.8809 16.358 14.1667 16.358C12.4524 16.358 11.075 14.9571 11.075 13.2442Z" fill="black"/>
    </svg>
  );
};

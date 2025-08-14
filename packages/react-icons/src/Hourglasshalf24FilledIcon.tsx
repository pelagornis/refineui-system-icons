import React from 'react';
import { IconProps } from './types';

export const Hourglasshalf24FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.58141 4C5.31029 4 4.56035 5.35454 5.28051 6.34979L8.75396 11.1502C9.12432 11.6621 9.12432 12.3379 8.75396 12.8498L5.28051 17.6502C4.56035 18.6455 5.31029 20 6.58141 20H17.4186C18.6897 20 19.4396 18.6455 18.7195 17.6502L15.246 12.8498C14.8757 12.3379 14.8757 11.6621 15.246 11.1502L18.7195 6.34979C19.4396 5.35454 18.6897 4 17.4186 4H6.58141ZM13.299 13.2001C12.6447 12.3437 11.3553 12.3437 10.7009 13.2001L7.4179 17.4965C7.16643 17.8255 7.40105 18.3 7.81517 18.3H16.1848C16.5989 18.3 16.8335 17.8255 16.5821 17.4965L13.299 13.2001Z" fill="black"/>
    </svg>
  );
};

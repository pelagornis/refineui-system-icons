import React from 'react';
import { IconProps } from './types';

export const Heart24FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M18.9704 6.46554C17.319 4.51717 14.3862 4.51048 12.7266 6.4516L11.9999 7.3015L11.2733 6.45163C9.61369 4.5105 6.68084 4.51721 5.02951 6.46562C3.59534 8.15778 3.66728 10.7079 5.19714 12.3106L11.2927 18.6966C11.6789 19.1011 12.3211 19.1011 12.7072 18.6966L18.8028 12.3107C20.3328 10.708 20.4047 8.15773 18.9704 6.46554Z" fill="black"/>
    </svg>
  );
};

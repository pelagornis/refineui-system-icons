import React from 'react';
import { IconProps } from './types';

export const Mailread20FilledIcon: React.FC<IconProps> = ({ 
  size = 20, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {{...props}}
    >
      width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.1426 3.12619C9.8479 2.95787 9.48619 2.95794 9.1916 3.12638L3.73411 6.24672C3.6816 6.27675 3.67757 6.35096 3.72651 6.38649L9.66625 10.6991L15.6513 6.40884C15.7006 6.37346 15.6968 6.29887 15.6441 6.26875L10.1426 3.12619Z" fill="black"/>
<path d="M15.376 16.3333C15.9053 16.3333 16.3343 15.9043 16.3343 15.375V7.41798C16.3343 7.35015 16.2576 7.31074 16.2025 7.35023L10.2243 11.6319C9.8907 11.8708 9.44206 11.8709 9.10845 11.632L3.13184 7.3526C3.0767 7.31312 3 7.35253 3 7.42035V15.375C3 15.9043 3.42904 16.3333 3.95829 16.3333H15.376Z" fill="black"/>
    </svg>
  );
};

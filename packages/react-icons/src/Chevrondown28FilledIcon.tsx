import React from 'react';
import { IconProps } from './types';

export const Chevrondown28FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M21.6755 9.34159C22.131 8.88614 22.8695 8.88614 23.325 9.34159C23.7805 9.79705 23.7806 10.5353 23.325 10.9908L15.354 18.9599C14.7901 19.5231 13.8765 19.5231 13.3125 18.9599L5.34149 10.9908L5.26174 10.9019C4.88804 10.4439 4.9144 9.76858 5.34149 9.34159C5.76858 8.9146 6.44401 8.88825 6.9022 9.26187L6.99106 9.34159L14.3333 16.682L21.6755 9.34159Z" fill="black"/>
    </svg>
  );
};

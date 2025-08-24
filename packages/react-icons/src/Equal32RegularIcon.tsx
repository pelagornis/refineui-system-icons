import React from 'react';
import { IconProps } from './types';

export const Equal32RegularIcon: React.FC<IconProps> = ({ 
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
<path d="M5.86693 11C5.38814 11 5 11.388 5 11.8665C5 12.3451 5.38814 12.7331 5.86693 12.7331H25.4664C25.9452 12.7331 26.3333 12.3451 26.3333 11.8665C26.3333 11.388 25.9452 11 25.4664 11H5.86693Z" fill="black"/>
<path d="M5.86693 19.9336C5.38814 19.9336 5 20.3216 5 20.8001C5 21.2787 5.38814 21.6667 5.86693 21.6667H25.4664C25.9452 21.6667 26.3333 21.2787 26.3333 20.8001C26.3333 20.3216 25.9452 19.9336 25.4664 19.9336H5.86693Z" fill="black"/>
    </svg>
  );
};

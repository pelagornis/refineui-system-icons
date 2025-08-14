import React from 'react';
import { IconProps } from './types';

export const Harddrive28FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M23.67 16.4952C23.67 15.8508 23.1476 15.3284 22.5033 15.3284H6.16673C5.52236 15.3284 5 15.8508 5 16.4952V19.0797C5 20.1429 5.8619 21.0048 6.92511 21.0048H21.7449C22.8081 21.0048 23.67 20.1429 23.67 19.0797V16.4952ZM20.0527 18.2597C20.5264 18.2597 20.9104 17.8785 20.9104 17.4082C20.9104 16.938 20.5264 16.5568 20.0527 16.5568C19.579 16.5568 19.195 16.938 19.195 17.4082C19.195 17.8785 19.579 18.2597 20.0527 18.2597Z" fill="black"/>
<path d="M5.50418 13.3888C5.40648 13.5828 5.54749 13.8117 5.76469 13.8117H22.9053C23.1225 13.8117 23.2635 13.5828 23.1658 13.3888L20.4816 8.05917C20.1545 7.40972 19.4894 7 18.7622 7H9.90776C9.1806 7 8.51549 7.40972 8.1884 8.05917L5.50418 13.3888Z" fill="black"/>
    </svg>
  );
};

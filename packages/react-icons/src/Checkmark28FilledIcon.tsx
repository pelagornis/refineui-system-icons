import React from 'react';
import { IconProps } from './types';

export const Checkmark28FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M23.3638 8.3319C23.782 8.7596 23.765 9.43654 23.3259 9.84387L11.7965 20.5383C11.3649 20.9386 10.6842 20.9306 10.2628 20.5201L5.32161 15.7076C4.8928 15.29 4.8928 14.6128 5.32161 14.1952C5.75042 13.7775 6.44566 13.7775 6.87447 14.1952L10.8685 18.0852C10.9738 18.1878 11.144 18.1898 11.2519 18.0897L21.8114 8.29502C22.2505 7.88768 22.9455 7.9042 23.3638 8.3319Z" fill="black"/>
    </svg>
  );
};

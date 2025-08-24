import React from 'react';
import { IconProps } from './types';

export const Alert16FilledIcon: React.FC<IconProps> = ({ 
  size = 16, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {{...props}}
    >
      width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.66667 3C9.77805 3 11.4897 4.8137 11.4897 7.051V8.59986C11.4897 8.82406 11.5423 9.04473 11.643 9.24197L12.2558 10.4434C12.4853 10.8932 12.1778 11.4396 11.6953 11.4396H3.63807C3.1555 11.4396 2.84808 10.8932 3.07752 10.4434L3.69038 9.24197C3.79099 9.04473 3.84368 8.82406 3.84368 8.59986V7.051C3.84368 4.8137 5.55528 3 7.66667 3Z" fill="black"/>
<path d="M9.01831 13.2094C9.37679 12.8296 9.57816 12.3144 9.57816 11.7772H5.75517C5.75517 12.3144 5.95658 12.8296 6.31503 13.2094C6.67351 13.5893 7.1597 13.8027 7.66667 13.8027C8.17363 13.8027 8.65982 13.5893 9.01831 13.2094Z" fill="black"/>
    </svg>
  );
};

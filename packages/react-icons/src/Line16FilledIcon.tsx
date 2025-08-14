import React from 'react';
import { IconProps } from './types';

export const Line16FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M13.4714 3.19525C13.7317 3.45557 13.7317 3.87765 13.4714 4.13798L4.13798 13.4714C3.87765 13.7317 3.45557 13.7317 3.19525 13.4714C2.93492 13.2111 2.93492 12.789 3.19525 12.5287L12.5287 3.19525C12.789 2.93492 13.2111 2.93492 13.4714 3.19525Z" fill="black"/>
    </svg>
  );
};

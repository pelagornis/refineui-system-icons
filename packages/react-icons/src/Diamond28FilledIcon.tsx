import React from 'react';
import { IconProps } from './types';

export const Diamond28FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M12.4928 5.76236C13.5093 4.74588 15.1574 4.74588 16.1738 5.76236L22.9043 12.4928C23.9208 13.5093 23.9208 15.1574 22.9043 16.1738L16.1738 22.9043C15.1574 23.9208 13.5093 23.9208 12.4928 22.9043L5.76236 16.1738C4.74588 15.1574 4.74588 13.5093 5.76236 12.4928L12.4928 5.76236Z" fill="black"/>
    </svg>
  );
};

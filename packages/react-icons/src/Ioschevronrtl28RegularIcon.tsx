import React from 'react';
import { IconProps } from './types';

export const Ioschevronrtl28RegularIcon: React.FC<IconProps> = ({ 
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
<path d="M16.3032 18.8085C15.9835 18.5304 15.9547 18.0512 16.2388 17.7383L18.9786 14.7207C19.1792 14.4998 19.1792 14.1669 18.9786 13.9459L16.2388 10.9284C15.9547 10.6154 15.9835 10.1363 16.3032 9.85814C16.6229 9.57999 17.1124 9.60821 17.3965 9.92115L20.6991 13.5585C21.1003 14.0004 21.1003 14.6663 20.6991 15.1081L17.3965 18.7455C17.1124 19.0585 16.6229 19.0867 16.3032 18.8085Z" fill="black"/>
    </svg>
  );
};

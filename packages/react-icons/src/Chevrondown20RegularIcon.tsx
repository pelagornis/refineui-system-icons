import React from 'react';
import { IconProps } from './types';

export const Chevrondown20RegularIcon: React.FC<IconProps> = ({ 
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
<path d="M15.4831 6.09652C15.6899 5.9528 15.9764 5.9689 16.1658 6.14942C16.3821 6.35579 16.3899 6.69873 16.1837 6.91526L10.2094 13.1836C9.93237 13.4739 9.48044 13.4922 9.18164 13.2381L9.12386 13.1836L3.14953 6.91526L3.08199 6.82899C2.94831 6.61548 2.97883 6.33003 3.16824 6.14942C3.35762 5.96925 3.64346 5.95298 3.85014 6.09652L3.93395 6.16814L9.66661 12.1825L15.4001 6.16814L15.4831 6.09652Z" fill="black"/>
    </svg>
  );
};

import React from 'react';
import { IconProps } from './types';

export const Next20RegularIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.6989 8.92271C14.2151 9.24082 14.2151 9.96418 13.6989 10.2823L4.29886 16.0753C3.73783 16.4211 3 16.0349 3 15.3955V3.80946C3 3.17009 3.73783 2.78393 4.29886 3.12967L13.6989 8.92271ZM4.08337 5.0157C4.08337 4.6896 4.44105 4.48988 4.71867 4.66097L12.1614 9.24777C12.4255 9.41053 12.4255 9.79448 12.1614 9.95723L4.71867 14.544C4.44105 14.7151 4.08337 14.5154 4.08337 14.1893L4.08337 5.0157Z" fill="black"/>
<path d="M16.3333 3.82531C16.3333 3.52615 16.0908 3.28363 15.7916 3.28363C15.4925 3.28363 15.25 3.52615 15.25 3.82531V15.7923C15.25 16.0915 15.4925 16.334 15.7916 16.334C16.0908 16.334 16.3333 16.0915 16.3333 15.7923V3.82531Z" fill="black"/>
    </svg>
  );
};

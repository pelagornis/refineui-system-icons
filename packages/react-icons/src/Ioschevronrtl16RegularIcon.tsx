import React from 'react';
import { IconProps } from './types';

export const Ioschevronrtl16RegularIcon: React.FC<IconProps> = ({ 
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
<path d="M9.31612 10.8906C9.13344 10.7317 9.11697 10.4578 9.27934 10.279L10.8449 8.5547C10.9596 8.42845 10.9596 8.23821 10.8449 8.11196L9.27934 6.38765C9.11697 6.20883 9.13344 5.93502 9.31612 5.77608C9.4988 5.61714 9.77851 5.63326 9.94087 5.81208L11.8281 7.89059C12.0573 8.14309 12.0573 8.52357 11.8281 8.77608L9.94087 10.8546C9.77851 11.0334 9.4988 11.0495 9.31612 10.8906Z" fill="black"/>
    </svg>
  );
};

import React from 'react';
import { IconProps } from './types';

export const Add28RegularIcon: React.FC<IconProps> = ({ 
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
<path d="M14.3333 5C14.7444 5 15.0777 5.33327 15.0777 5.74438V13.589H22.9223C23.3334 13.589 23.6667 13.9222 23.6667 14.3333C23.6667 14.7444 23.3334 15.0777 22.9223 15.0777H15.0777V22.9223C15.0777 23.3334 14.7444 23.6667 14.3333 23.6667C13.9222 23.6667 13.589 23.3334 13.589 22.9223V15.0777H5.74438C5.33327 15.0777 5 14.7444 5 14.3333C5 13.9222 5.33327 13.589 5.74438 13.589H13.589V5.74438C13.589 5.33327 13.9222 5 14.3333 5Z" fill="black"/>
    </svg>
  );
};

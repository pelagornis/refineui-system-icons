import React from 'react';
import { IconProps } from './types';

export const Videoplaypause48FilledIcon: React.FC<IconProps> = ({ 
  size = 48, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {{...props}}
    >
      width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M23.6801 15.7991C23.6801 14.8055 24.4859 14 25.4799 14H29.3801C30.3741 14 31.1799 14.8055 31.1799 15.7991V32.2009C31.1799 33.1945 30.3741 34 29.3801 34H25.4799C24.4859 34 23.6801 33.1945 23.6801 32.2009V24.8412C23.5408 25.1058 23.3311 25.3415 23.0509 25.5192L10.7639 33.311C9.56564 34.0709 8 33.2103 8 31.7918L8 16.2082C8 14.7897 9.56563 13.9291 10.7639 14.689L23.0509 22.4808C23.3311 22.6585 23.5408 22.8942 23.6801 23.1588V15.7991Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M34.3 14C33.306 14 32.5002 14.8055 32.5002 15.7991V32.2009C32.5002 33.1945 33.306 34 34.3 34H38.2002C39.1942 34 40 33.1945 40 32.2009V15.7991C40 14.8055 39.1942 14 38.2002 14H34.3Z" fill="black"/>
    </svg>
  );
};

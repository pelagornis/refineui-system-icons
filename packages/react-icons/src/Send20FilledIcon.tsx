import React from 'react';
import { IconProps } from './types';

export const Send20FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M16.0938 9.27905C16.4132 9.43876 16.4132 9.89458 16.0938 10.0543L3.62723 16.287C3.33906 16.4311 3 16.2216 3 15.8994V10.8931C3 10.6845 3.14855 10.5056 3.35354 10.4671L7.16863 9.75186C7.26291 9.73418 7.26291 9.59915 7.16863 9.58148L3.35354 8.86621C3.14855 8.82777 3 8.6488 3 8.44026L3 3.43393C3 3.11177 3.33906 2.90224 3.62723 3.04631L16.0938 9.27905Z" fill="black"/>
    </svg>
  );
};

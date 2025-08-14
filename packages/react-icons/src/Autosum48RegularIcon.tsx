import React from 'react';
import { IconProps } from './types';

export const Autosum48RegularIcon: React.FC<IconProps> = ({ 
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
<path d="M8.30186 9.70082C7.65223 9.0685 8.12041 8 9.04709 8H38.6415C39.3918 8 40 8.58196 40 9.29984C40 10.0177 39.3918 10.5997 38.6415 10.5997H14.2816C13.8182 10.5997 13.5841 11.1339 13.9089 11.4501L26.0823 23.2991C26.482 23.6881 26.482 24.3119 26.0823 24.7009L13.9089 36.5499C13.5841 36.8661 13.8182 37.4003 14.2816 37.4003H38.6415C39.3918 37.4003 40 37.9823 40 38.7002C40 39.418 39.3918 40 38.6415 40H9.04709C8.1204 40 7.65223 38.9315 8.30186 38.2992L22.6324 24.3505C22.8323 24.1559 22.8323 23.8441 22.6324 23.6495L8.30186 9.70082Z" fill="black"/>
    </svg>
  );
};

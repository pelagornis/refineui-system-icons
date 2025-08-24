import React from 'react';
import { IconProps } from './types';

export const Checkmark48FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M39.4807 13.569C40.1977 14.3022 40.1686 15.4626 39.4158 16.1609L19.6511 34.4943C18.9113 35.1805 17.7444 35.1667 17.0219 34.463L8.55133 26.213C7.81622 25.4971 7.81622 24.3363 8.55133 23.6203C9.28643 22.9043 10.4783 22.9043 11.2134 23.6203L18.0603 30.2889C18.2409 30.4648 18.5326 30.4683 18.7176 30.2967L36.8195 13.5058C37.5723 12.8075 38.7638 12.8358 39.4807 13.569Z" fill="black"/>
    </svg>
  );
};

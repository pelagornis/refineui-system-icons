import React from 'react';
import { IconProps } from './types';

export const Chevronleft48RegularIcon: React.FC<IconProps> = ({ 
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
<path d="M32.7787 37.9594C33.1082 38.4558 33.0713 39.1433 32.6575 39.5979C32.1844 40.1171 31.3982 40.1357 30.9019 39.6409L16.5326 25.3025C15.8671 24.6377 15.8251 23.5531 16.4076 22.8359L16.5326 22.6973L30.9019 8.35886L31.0997 8.19677C31.5891 7.87593 32.2435 7.94918 32.6575 8.40378C33.0705 8.85829 33.1078 9.54432 32.7787 10.0403L32.6146 10.2415L18.8274 23.9999L32.6146 37.7602L32.7787 37.9594Z" fill="black"/>
    </svg>
  );
};

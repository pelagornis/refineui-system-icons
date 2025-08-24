import React from 'react';
import { IconProps } from './types';

export const Chevronleft48FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M32.4407 36.5865C33.1864 37.3675 33.1864 38.6334 32.4407 39.4144C31.6949 40.1952 30.486 40.1953 29.7403 39.4144L16.6917 25.7497C15.7694 24.783 15.7695 23.2168 16.6917 22.2501L29.7403 8.5854L29.8858 8.4487C30.6358 7.80807 31.7415 7.85326 32.4407 8.5854C33.1398 9.31756 33.183 10.4754 32.5712 11.2609L32.4407 11.4132L20.4215 23.9999L32.4407 36.5865Z" fill="black"/>
    </svg>
  );
};

import React from 'react';
import { IconProps } from './types';

export const Heart48FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M37.9408 12.9311C34.6381 9.03434 28.7725 9.02095 25.4532 12.9032L23.9999 14.603L22.5466 12.9033C19.2274 9.021 13.3617 9.03442 10.059 12.9312C7.19068 16.3156 7.33457 21.4158 10.3943 24.6213L22.5854 37.3932C23.3577 38.2023 24.6421 38.2023 25.4144 37.3932L37.6057 24.6215C40.6655 21.4159 40.8093 16.3155 37.9408 12.9311Z" fill="black"/>
    </svg>
  );
};

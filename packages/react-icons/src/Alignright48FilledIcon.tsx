import React from 'react';
import { IconProps } from './types';

export const Alignright48FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M38.6957 8C37.9778 8 37.3959 8.58194 37.3959 9.2998L37.3959 38.7002C37.3959 39.4181 37.9778 40 38.6957 40C39.4136 40 39.9955 39.4181 39.9955 38.7002L39.9955 9.2998C39.9955 8.58194 39.4136 8 38.6957 8Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M31.521 11.3998C33.7298 11.3998 35.5203 13.1904 35.5203 15.3992L35.5203 18.9506C35.5203 21.1594 33.7298 22.95 31.521 22.95L11.9994 22.95C9.79059 22.95 8 21.1594 8 18.9506L8 15.3992C8 13.1904 9.79059 11.3998 11.9994 11.3998L31.521 11.3998Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M35.5203 29.0494C35.5203 26.8406 33.7298 25.05 31.521 25.05L18.3502 25.05C16.1414 25.05 14.3509 26.8406 14.3509 29.0494L14.3509 32.6008C14.3509 34.8096 16.1414 36.6002 18.3502 36.6002L31.521 36.6002C33.7298 36.6002 35.5203 34.8096 35.5203 32.6008L35.5203 29.0494Z" fill="black"/>
    </svg>
  );
};

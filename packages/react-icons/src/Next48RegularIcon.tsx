import React from 'react';
import { IconProps } from './types';

export const Next48RegularIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M33.6774 22.2138C34.9163 22.9772 34.9163 24.7132 33.6774 25.4766L11.1173 39.3791C9.7708 40.2089 8 39.2821 8 37.7477V9.94261C8 8.40819 9.7708 7.48145 11.1173 8.3112L33.6774 22.2138ZM10.6001 12.8374C10.6001 12.0548 11.4585 11.5755 12.1248 11.9861L29.9875 22.9939C30.6213 23.3845 30.6213 24.3059 29.9875 24.6965L12.1248 35.7042C11.4585 36.1148 10.6001 35.6355 10.6001 34.8529L10.6001 12.8374Z" fill="black"/>
<path d="M40 9.98065C40 9.26269 39.4179 8.68067 38.7 8.68067C37.982 8.68067 37.3999 9.26269 37.3999 9.98065V38.7C37.3999 39.418 37.982 40 38.7 40C39.4179 40 40 39.418 40 38.7V9.98065Z" fill="black"/>
    </svg>
  );
};

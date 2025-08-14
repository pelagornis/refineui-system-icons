import React from 'react';
import { IconProps } from './types';

export const Wifi416RegularIcon: React.FC<IconProps> = ({ 
  size = 16, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {{...props}}
    >
      width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.34038 11.9332C8.79602 11.9332 9.16538 11.5638 9.16538 11.1082C9.16538 10.6526 8.79602 10.2832 8.34038 10.2832C7.88475 10.2832 7.51538 10.6526 7.51538 11.1082C7.51538 11.5638 7.88475 11.9332 8.34038 11.9332Z" fill="black"/>
    </svg>
  );
};

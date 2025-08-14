import React from 'react';
import { IconProps } from './types';

export const Locationarrow32RegularIcon: React.FC<IconProps> = ({ 
  size = 32, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {{...props}}
    >
      width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M25.9526 5.98696C26.1752 5.38661 25.5739 4.81026 24.9851 5.05958L6.44538 12.9097C5.82576 13.1721 5.86093 14.0634 6.49927 14.276L13.7997 16.7069C14.0161 16.779 14.1864 16.9483 14.26 17.1645L17.2113 25.8385C17.4326 26.4889 18.3463 26.5013 18.5852 25.8571L25.9526 5.98696ZM23.5198 7.5623L9.56656 13.4704L14.3473 15.0624C15.0789 15.3059 15.6531 15.8777 15.9009 16.6062L17.9422 22.6054L23.5198 7.5623Z" fill="black"/>
    </svg>
  );
};

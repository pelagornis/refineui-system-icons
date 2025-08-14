import React from 'react';
import { IconProps } from './types';

export const Video48RegularIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M8 18C8 15.7909 9.79089 14 12 14H26C28.2091 14 30 15.7909 30 18V30C30 32.2091 28.2091 34 26 34H12C9.79089 34 8 32.2091 8 30V18ZM12 16.6H26C26.7732 16.6 27.4 17.2268 27.4 18V30C27.4 30.7732 26.7732 31.4 26 31.4H12C11.2268 31.4 10.6 30.7732 10.6 30V18C10.6 17.2268 11.2268 16.6 12 16.6Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M40 18.2701V29.7299C40 31.4256 38.0222 32.3519 36.7196 31.2664L31.5284 26.9404C31.0725 26.5604 30.8088 25.9975 30.8088 25.404V22.596C30.8088 22.0025 31.0725 21.4396 31.5284 21.0596L36.7196 16.7336C38.0222 15.6481 40 16.5744 40 18.2701ZM37.4 20.6186C37.4 20.1947 36.9055 19.9631 36.5798 20.2345L33.7687 22.5772C33.5406 22.7672 33.4088 23.0487 33.4088 23.3455V24.6546C33.4088 24.9514 33.5406 25.2328 33.7687 25.4228L36.5798 27.7655C36.9055 28.0369 37.4 27.8053 37.4 27.3814V20.6186Z" fill="black"/>
    </svg>
  );
};

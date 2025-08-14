import React from 'react';
import { IconProps } from './types';

export const Iosarrowrtl16RegularIcon: React.FC<IconProps> = ({ 
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
<path d="M8.13471 13.5526C7.96353 13.3923 7.95428 13.1231 8.11405 12.9514L12.2024 8.55691C12.3193 8.4312 12.3193 8.23612 12.2024 8.11041L8.11405 3.71591C7.95428 3.54418 7.96353 3.27501 8.13471 3.11472C8.3059 2.95444 8.57419 2.96372 8.73396 3.13546L13.1546 7.88715C13.3885 8.13858 13.3885 8.52874 13.1546 8.78017L8.73396 13.5319C8.57419 13.7036 8.3059 13.7129 8.13471 13.5526Z" fill="black"/>
    </svg>
  );
};

import React from 'react';
import { IconProps } from './types';

export const Album20FilledIcon: React.FC<IconProps> = ({ 
  size = 20, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {{...props}}
    >
      width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.665 16.33C13.346 16.33 16.33 13.346 16.33 9.665C16.33 5.98402 13.346 3 9.665 3C5.98402 3 3 5.98402 3 9.665C3 13.346 5.98402 16.33 9.665 16.33ZM9.665 12.1644C11.0454 12.1644 12.1644 11.0454 12.1644 9.665C12.1644 8.28463 11.0454 7.16563 9.665 7.16563C8.28463 7.16563 7.16563 8.28463 7.16563 9.665C7.16563 11.0454 8.28463 12.1644 9.665 12.1644Z" fill="black"/>
<path d="M11.3313 9.665C11.3313 10.5852 10.5852 11.3313 9.665 11.3313C8.74476 11.3313 7.99875 10.5852 7.99875 9.665C7.99875 8.74476 8.74476 7.99875 9.665 7.99875C10.5852 7.99875 11.3313 8.74476 11.3313 9.665Z" fill="black"/>
    </svg>
  );
};

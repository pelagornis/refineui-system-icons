import React from 'react';
import { IconProps } from './types';

export const Camera24FilledIcon: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {{...props}}
    >
      width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6 7C4.89543 7 4 7.89543 4 9V17C4 18.1046 4.89543 19 6 19H18C19.1046 19 20 18.1046 20 17V9C20 7.89543 19.1046 7 18 7H16.5618C16.5239 7 16.4893 6.9786 16.4724 6.94472L16.0528 6.10557C15.714 5.428 15.0215 5 14.2639 5H9.73607C8.97852 5 8.286 5.428 7.94721 6.10557L7.52764 6.94472C7.5107 6.9786 7.47607 7 7.4382 7H6ZM15.5 12.5C15.5 14.433 13.933 16 12 16C10.067 16 8.5 14.433 8.5 12.5C8.5 10.567 10.067 9 12 9C13.933 9 15.5 10.567 15.5 12.5Z" fill="black"/>
<path d="M12 14.7C13.215 14.7 14.2 13.715 14.2 12.5C14.2 11.285 13.215 10.3 12 10.3C10.785 10.3 9.8 11.285 9.8 12.5C9.8 13.715 10.785 14.7 12 14.7Z" fill="black"/>
    </svg>
  );
};

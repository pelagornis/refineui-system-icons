import React from 'react';
import { IconProps } from './types';

export const Battery1024RegularIcon: React.FC<IconProps> = ({ 
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
<path d="M6.8 9C6.35817 9 6 9.35817 6 9.8V14.2C6 14.6418 6.35817 15 6.8 15C7.24183 15 7.6 14.6418 7.6 14.2V9.8C7.6 9.35817 7.24183 9 6.8 9Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6 7C4.89543 7 4 7.89543 4 9V15C4 16.1046 4.89543 17 6 17H16.5202C17.6248 17 18.5202 16.1046 18.5202 15V14.0642C19.3375 14.0642 20 13.4017 20 12.5845V11.4156C20 10.5983 19.3375 9.93578 18.5202 9.93578V9C18.5202 7.89543 17.6248 7 16.5202 7H6ZM5.20231 9.19266C5.20231 8.64038 5.65003 8.19266 6.20231 8.19266H16.3179C16.8702 8.19266 17.3179 8.64038 17.3179 9.19266V14.8073C17.3179 15.3596 16.8702 15.8073 16.3179 15.8073H6.20231C5.65003 15.8073 5.20231 15.3596 5.20231 14.8073V9.19266Z" fill="black"/>
    </svg>
  );
};

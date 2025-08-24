import React from 'react';
import { IconProps } from './types';

export const Location20FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.6667 8.88871C15.6667 11.7152 13.149 13.7589 10.8487 15.626C10.5961 15.8311 10.3461 16.034 10.1024 16.2356C9.94628 16.3647 9.72039 16.3647 9.56427 16.2356C9.32056 16.034 9.07062 15.8311 8.81805 15.6261C6.51777 13.7589 4 11.7152 4 8.88871C4 5.63646 6.61167 3 9.83333 3C13.055 3 15.6667 5.63646 15.6667 8.88871ZM7.625 8.88871C7.625 7.66518 8.60889 6.66455 9.83333 6.66455C11.0578 6.66455 12.0417 7.66518 12.0417 8.88871C12.0417 10.1122 11.0578 11.1129 9.83333 11.1129C8.60889 11.1129 7.625 10.1122 7.625 8.88871Z" fill="black"/>
    </svg>
  );
};

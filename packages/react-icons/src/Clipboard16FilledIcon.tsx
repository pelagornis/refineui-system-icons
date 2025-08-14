import React from 'react';
import { IconProps } from './types';

export const Clipboard16FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.1155 3.63492H11.0075C11.5557 3.63492 12 4.10396 12 4.68254V12.619C12 13.1976 11.5557 13.6667 11.0075 13.6667H4.99248C4.44435 13.6667 4 13.1976 4 12.619V4.68254C4 4.10396 4.44435 3.63492 4.99248 3.63492H5.8845C6.03627 3.26154 6.3877 3 6.79701 3H9.20302C9.61233 3 9.96376 3.26154 10.1155 3.63492ZM6.58648 4.04762C6.58648 3.92489 6.68074 3.8254 6.79701 3.8254H9.20302C9.31929 3.8254 9.41355 3.92489 9.41355 4.04762C9.41355 4.17035 9.31929 4.26984 9.20302 4.26984H6.79701C6.68074 4.26984 6.58648 4.17035 6.58648 4.04762Z" fill="black"/>
    </svg>
  );
};

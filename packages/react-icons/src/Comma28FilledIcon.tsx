import React from 'react';
import { IconProps } from './types';

export const Comma28FilledIcon: React.FC<IconProps> = ({ 
  size = 28, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {{...props}}
    >
      width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8 10.848C8 7.61824 10.6083 5 13.8258 5C17.0341 5 19.6367 7.6034 19.6515 10.8205C19.7508 13.0973 19.3857 16.2512 17.8805 18.886C16.4656 21.3627 14.0649 23.3253 10.3292 23.6623C9.68826 23.7202 9.16515 23.1899 9.16515 22.544C9.16515 21.898 9.68931 21.3833 10.3288 21.3115C13.1343 20.9967 14.8233 19.5352 15.859 17.7223C16.1754 17.1685 16.4324 16.5775 16.6378 15.9709C15.8041 16.433 14.8455 16.696 13.8258 16.696C10.6083 16.696 8 14.0778 8 10.848Z" fill="black"/>
    </svg>
  );
};

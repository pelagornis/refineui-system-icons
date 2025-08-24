import React from 'react';
import { IconProps } from './types';

export const Board24FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M20 16.15C20 15.5977 19.5523 15.15 19 15.15H13.65C13.0977 15.15 12.65 15.5977 12.65 16.15V19C12.65 19.5523 13.0977 20 13.65 20H18C19.1046 20 20 19.1046 20 18V16.15Z" fill="black"/>
<path d="M11.35 11.15C11.35 10.5977 10.9023 10.15 10.35 10.15H5C4.44771 10.15 4 10.5977 4 11.15V18C4 19.1046 4.89543 20 6 20H10.35C10.9023 20 11.35 19.5523 11.35 19V11.15Z" fill="black"/>
<path d="M4 7.85C4 8.40228 4.44772 8.85 5 8.85H10.35C10.9023 8.85 11.35 8.40228 11.35 7.85V5C11.35 4.44771 10.9023 4 10.35 4H6C4.89543 4 4 4.89543 4 6V7.85Z" fill="black"/>
<path d="M12.65 12.85C12.65 13.4023 13.0977 13.85 13.65 13.85H19C19.5523 13.85 20 13.4023 20 12.85V6C20 4.89543 19.1046 4 18 4H13.65C13.0977 4 12.65 4.44772 12.65 5V12.85Z" fill="black"/>
    </svg>
  );
};

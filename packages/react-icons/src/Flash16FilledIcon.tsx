import React from 'react';
import { IconProps } from './types';

export const Flash16FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.93489 3.36358C5.02953 3.143 5.24648 3 5.48651 3H9.54068C9.95047 3 10.2398 3.40153 10.1101 3.79024L9.35942 6.03977H11.7361C12.271 6.03977 12.5387 6.68664 12.1603 7.06468L5.72595 13.4921C5.30849 13.9091 4.60294 13.5366 4.71179 12.9567L5.53039 8.59555H3.60089C3.16987 8.59555 2.87933 8.15476 3.04927 7.75865L4.93489 3.36358Z" fill="black"/>
    </svg>
  );
};

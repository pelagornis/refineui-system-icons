import React from 'react';
import { IconProps } from './types';

export const Payment24FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.99994 6C4.89537 6 3.99994 6.89543 3.99994 8L3.99999 9.10001C3.99999 9.23808 4.11192 9.35 4.24999 9.35H19.7499C19.888 9.35 19.9999 9.23807 19.9999 9.1V8C19.9999 6.89543 19.1045 6 17.9999 6H5.99994ZM19.9999 16V10.9C19.9999 10.7619 19.888 10.65 19.7499 10.65H4.24994C4.11187 10.65 3.99994 10.7619 3.99994 10.9V16C3.99994 17.1046 4.89537 18 5.99994 18H17.9999C19.1045 18 19.9999 17.1046 19.9999 16ZM6.99994 14.35C6.99994 13.991 7.29095 13.7 7.64994 13.7H9.34994C9.70892 13.7 9.99994 13.991 9.99994 14.35C9.99994 14.709 9.70892 15 9.34994 15H7.64994C7.29095 15 6.99994 14.709 6.99994 14.35Z" fill="black"/>
    </svg>
  );
};

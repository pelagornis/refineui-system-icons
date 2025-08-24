import React from 'react';
import { IconProps } from './types';

export const Slidelayout24RegularIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M8 8.35C7.08873 8.35 6.35 9.08873 6.35 10V14C6.35 14.9113 7.08873 15.65 8 15.65H16C16.9113 15.65 17.65 14.9113 17.65 14V10C17.65 9.08873 16.9113 8.35 16 8.35H8ZM7.65 10C7.65 9.8067 7.8067 9.65 8 9.65H16C16.1933 9.65 16.35 9.8067 16.35 10V11.35H7.65V10ZM10.65 12.65H16.35V14C16.35 14.1933 16.1933 14.35 16 14.35H10.65V12.65ZM9.35 12.65V14.35H8C7.8067 14.35 7.65 14.1933 7.65 14V12.65H9.35Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M4 8C4 6.89543 4.89543 6 6 6H18C19.1046 6 20 6.89543 20 8V16C20 17.1046 19.1046 18 18 18H6C4.89543 18 4 17.1046 4 16V8ZM6 7.3H18C18.3866 7.3 18.7 7.6134 18.7 8V16C18.7 16.3866 18.3866 16.7 18 16.7H6C5.6134 16.7 5.3 16.3866 5.3 16V8C5.3 7.6134 5.6134 7.3 6 7.3Z" fill="black"/>
    </svg>
  );
};

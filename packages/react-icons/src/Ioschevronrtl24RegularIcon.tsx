import React from 'react';
import { IconProps } from './types';

export const Ioschevronrtl24RegularIcon: React.FC<IconProps> = ({ 
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
<path d="M13.9729 15.8358C13.6988 15.5973 13.6741 15.1865 13.9177 14.9182L16.2668 12.3309C16.4388 12.1415 16.4388 11.856 16.2668 11.6666L13.9177 9.07928C13.6741 8.81096 13.6988 8.40011 13.9729 8.16163C14.247 7.92314 14.6667 7.94733 14.9103 8.21565L17.742 11.3344C18.086 11.7133 18.086 12.2842 17.742 12.6631L14.9103 15.7818C14.6667 16.0501 14.247 16.0743 13.9729 15.8358Z" fill="black"/>
    </svg>
  );
};

import React from 'react';
import { IconProps } from './types';

export const Slideeraser24FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M6 6C4.89543 6 4 6.89543 4 8V16C4 17.1046 4.89543 18 6 18H14.1262C13.8726 17.3695 14.0012 16.6212 14.5121 16.1104L18.1104 12.5121C18.6212 12.0012 19.3695 11.8726 20 12.1262V8C20 6.89543 19.1046 6 18 6H6Z" fill="black"/>
<path d="M15.2192 16.8175C14.9269 17.1097 14.9269 17.5836 15.2192 17.8759L17.1241 19.7808C17.4164 20.0731 17.8903 20.0731 18.1825 19.7808L18.5681 19.3953L15.6047 16.4319L15.2192 16.8175Z" fill="black"/>
<path d="M16.1339 15.9027L19.0973 18.8661L21.7808 16.1825C22.0731 15.8903 22.0731 15.4164 21.7808 15.1241L19.8759 13.2192C19.5836 12.9269 19.1097 12.9269 18.8175 13.2192L16.1339 15.9027Z" fill="black"/>
    </svg>
  );
};

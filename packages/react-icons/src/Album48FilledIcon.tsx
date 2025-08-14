import React from 'react';
import { IconProps } from './types';

export const Album48FilledIcon: React.FC<IconProps> = ({ 
  size = 48, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {{...props}}
    >
      width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M24.005 40.01C32.8443 40.01 40.01 32.8443 40.01 24.005C40.01 15.1657 32.8443 8 24.005 8C15.1657 8 8 15.1657 8 24.005C8 32.8443 15.1657 40.01 24.005 40.01ZM24.005 30.0069C27.3197 30.0069 30.0069 27.3197 30.0069 24.005C30.0069 20.6903 27.3197 18.0031 24.005 18.0031C20.6903 18.0031 18.0031 20.6903 18.0031 24.005C18.0031 27.3197 20.6903 30.0069 24.005 30.0069Z" fill="black"/>
<path d="M28.0062 24.005C28.0062 26.2148 26.2148 28.0062 24.005 28.0062C21.7952 28.0062 20.0037 26.2148 20.0037 24.005C20.0037 21.7952 21.7952 20.0037 24.005 20.0037C26.2148 20.0037 28.0062 21.7952 28.0062 24.005Z" fill="black"/>
    </svg>
  );
};

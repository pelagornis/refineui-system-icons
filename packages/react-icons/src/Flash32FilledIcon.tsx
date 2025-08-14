import React from 'react';
import { IconProps } from './types';

export const Flash32FilledIcon: React.FC<IconProps> = ({ 
  size = 32, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {{...props}}
    >
      width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.8687 5.72697C11.058 5.28592 11.4918 5 11.9717 5H20.0779C20.8972 5 21.4757 5.80284 21.2163 6.58006L19.7154 11.0779H24.4674C25.537 11.0779 26.0723 12.3713 25.3156 13.1272L12.4504 25.9786C11.6157 26.8124 10.205 26.0676 10.4227 24.9081L12.0594 16.1881H8.20146C7.33964 16.1881 6.75872 15.3068 7.09852 14.5147L10.8687 5.72697Z" fill="black"/>
    </svg>
  );
};

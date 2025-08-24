import React from 'react';
import { IconProps } from './types';

export const Iosarrowrtl48RegularIcon: React.FC<IconProps> = ({ 
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
<path d="M24.4043 39.6568C23.8905 39.1759 23.8627 38.3684 24.3423 37.8532L36.6149 24.6698C36.966 24.2926 36.966 23.7074 36.6149 23.3302L24.3423 10.1468C23.8627 9.63155 23.8905 8.82407 24.4043 8.3432C24.9182 7.86233 25.7236 7.89017 26.2032 8.40539L39.4734 22.6605C40.1755 23.4147 40.1755 24.5852 39.4734 25.3395L26.2032 39.5946C25.7236 40.1098 24.9182 40.1377 24.4043 39.6568Z" fill="black"/>
    </svg>
  );
};

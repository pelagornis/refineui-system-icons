import React from 'react';
import { IconProps } from './types';

export const Iosarrowltr24RegularIcon: React.FC<IconProps> = ({ 
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
<path d="M11.7978 4.1716C12.0548 4.41203 12.0687 4.81578 11.8288 5.07338L5.69255 11.6651C5.51701 11.8537 5.51701 12.1463 5.69255 12.3349L11.8288 18.9266C12.0687 19.1842 12.0548 19.588 11.7978 19.8284C11.5409 20.0688 11.1382 20.0549 10.8984 19.7973L4.26331 12.6698C3.91223 12.2926 3.91223 11.7074 4.26331 11.3302L10.8984 4.20269C11.1382 3.94509 11.5409 3.93117 11.7978 4.1716Z" fill="black"/>
    </svg>
  );
};

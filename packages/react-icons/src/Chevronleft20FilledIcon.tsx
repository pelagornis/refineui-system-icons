import React from 'react';
import { IconProps } from './types';

export const Chevronleft20FilledIcon: React.FC<IconProps> = ({ 
  size = 20, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {{...props}}
    >
      width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.1719 14.911C13.4973 15.2365 13.4973 15.7639 13.1719 16.0893C12.8466 16.4147 12.3193 16.4147 11.9939 16.0893L6.30173 10.3957C5.89941 9.99293 5.89944 9.34032 6.30173 8.93752L11.994 3.24392L12.0574 3.18696C12.3846 2.92003 12.8669 2.93886 13.1719 3.24392C13.4769 3.54898 13.4957 4.03144 13.2289 4.35872L13.1719 4.42219L7.92877 9.66662L13.1719 14.911Z" fill="black"/>
    </svg>
  );
};

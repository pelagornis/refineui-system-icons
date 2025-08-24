import React from 'react';
import { IconProps } from './types';

export const Previous28FilledIcon: React.FC<IconProps> = ({ 
  size = 28, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {{...props}}
    >
      width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.68816 15.3759C7.96549 14.9305 7.96549 13.9178 8.68816 13.4724L21.8483 5.36219C22.6337 4.87814 23.6667 5.41877 23.6667 6.3139L23.6667 22.5344C23.6667 23.4295 22.6337 23.9701 21.8483 23.4861L8.68816 15.3759Z" fill="black"/>
<path d="M5 22.5122C5 22.931 5.33953 23.2706 5.75836 23.2706C6.17719 23.2706 6.51672 22.931 6.51672 22.5122L6.51672 5.75836C6.51672 5.33953 6.17719 5 5.75836 5C5.33953 5 5 5.33953 5 5.75836L5 22.5122Z" fill="black"/>
    </svg>
  );
};

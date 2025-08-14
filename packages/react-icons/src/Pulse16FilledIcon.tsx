import React from 'react';
import { IconProps } from './types';

export const Pulse16FilledIcon: React.FC<IconProps> = ({ 
  size = 16, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {{...props}}
    >
      width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.03126 6.86903L6.54011 7.94992C6.37788 8.30695 6.02192 8.53619 5.62977 8.53619H3.66661C3.29845 8.53619 3 8.23774 3 7.86958C3 7.50142 3.29845 7.20296 3.66661 7.20296H5.41512L6.14972 5.58628C6.51798 4.77584 7.68202 4.81442 7.99581 5.64748L9.29218 9.08917L9.80942 7.82439C9.96312 7.44854 10.3289 7.20296 10.7349 7.20296H13.0001C13.3682 7.20296 13.6667 7.50142 13.6667 7.86958C13.6667 8.23774 13.3682 8.53619 13.0001 8.53619H10.9587L10.2049 10.3794C9.86096 11.2205 8.66402 11.2038 8.34369 10.3534L7.03126 6.86903Z" fill="black"/>
    </svg>
  );
};

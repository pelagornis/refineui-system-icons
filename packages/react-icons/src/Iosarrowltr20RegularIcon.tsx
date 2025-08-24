import React from 'react';
import { IconProps } from './types';

export const Iosarrowltr20RegularIcon: React.FC<IconProps> = ({ 
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
<path d="M9.50144 3.143C9.71566 3.34336 9.72724 3.67981 9.5273 3.89449L4.41116 9.3876C4.26481 9.54474 4.26481 9.78859 4.41116 9.94573L9.5273 15.4388C9.72724 15.6535 9.71566 15.99 9.50144 16.1903C9.28722 16.3907 8.95148 16.3791 8.75153 16.1644L3.21953 10.2248C2.92682 9.91052 2.92682 9.42281 3.21953 9.10853L8.75153 3.16891C8.95148 2.95424 9.28722 2.94264 9.50144 3.143Z" fill="black"/>
    </svg>
  );
};

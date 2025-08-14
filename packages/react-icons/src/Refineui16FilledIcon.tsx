import React from 'react';
import { IconProps } from './types';

export const Refineui16FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M3 13.4444V5.87523C3 3.65535 5.06516 3.03346 6.09774 3H13.3867C13.5119 3 13.6133 3.09949 13.6133 3.22222V5.87523C13.6001 8.01777 11.8502 8.91006 10.8259 9.13017C10.7438 9.14781 10.7036 9.24213 10.7519 9.30955L13.625 13.3166C13.7306 13.4639 13.6232 13.6667 13.4397 13.6667H10.3456C10.2687 13.6667 10.197 13.6284 10.1553 13.565L7.46429 9.47959C7.403 9.38655 7.25583 9.42911 7.25583 9.53988V13.4444C7.25583 13.5672 7.15439 13.6667 7.02925 13.6667H3.22658C3.10145 13.6667 3 13.5672 3 13.4444Z" fill="black"/>
    </svg>
  );
};

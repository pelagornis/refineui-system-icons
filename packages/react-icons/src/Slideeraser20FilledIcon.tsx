import React from 'react';
import { IconProps } from './types';

export const Slideeraser20FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M5.66667 5C4.74619 5 4 5.74619 4 6.66667V13.3333C4 14.2538 4.74619 15 5.66667 15H12.4385C12.2272 14.4746 12.3344 13.851 12.7601 13.4253L15.7586 10.4267C16.1844 10.001 16.808 9.89383 17.3333 10.1051V6.66667C17.3333 5.74619 16.5871 5 15.6667 5H5.66667Z" fill="black"/>
<path d="M13.3493 14.0146C13.1058 14.2581 13.1058 14.653 13.3493 14.8965L14.9368 16.484C15.1803 16.7276 15.5752 16.7276 15.8188 16.484L16.1401 16.1627L13.6706 13.6933L13.3493 14.0146Z" fill="black"/>
<path d="M14.1116 13.2523L16.581 15.7217L18.8173 13.4854C19.0609 13.2419 19.0609 12.847 18.8173 12.6035L17.2299 11.016C16.9863 10.7724 16.5914 10.7724 16.3479 11.016L14.1116 13.2523Z" fill="black"/>
    </svg>
  );
};

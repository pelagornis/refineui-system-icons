import React from 'react';
import { IconProps } from './types';

export const Mail32FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M25.6797 22.667C25.6795 23.0443 25.3741 23.3495 24.9971 23.3496H6.33301C5.95599 23.3495 5.65057 23.0443 5.65039 22.667V10.3828L13.9551 16.6133C14.9683 17.3733 16.3618 17.3733 17.375 16.6133L25.6797 10.3828V22.667ZM22.9346 8.65039L15.665 14.1035L8.39551 8.65039H22.9346Z" fill="black" stroke="black" stroke-width="1.3"/>
    </svg>
  );
};

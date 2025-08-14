import React from 'react';
import { IconProps } from './types';

export const Lockclosed24FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.35 8.46847V7.50751C8.35 5.57036 9.98416 4 12 4C14.0158 4 15.65 5.57036 15.65 7.50751V8.46847H16C17.1046 8.46847 18 9.32894 18 10.3904V18.0781C18 19.1395 17.1046 20 16 20H8C6.89543 20 6 19.1395 6 18.0781V10.3904C6 9.32894 6.89543 8.46847 8 8.46847H8.35ZM9.65 7.50751C9.65 6.26031 10.7021 5.24925 12 5.24925C13.2979 5.24925 14.35 6.26031 14.35 7.50751V8.46847H9.65V7.50751ZM13 14.2342C13 14.765 12.5523 15.1952 12 15.1952C11.4477 15.1952 11 14.765 11 14.2342C11 13.7035 11.4477 13.2733 12 13.2733C12.5523 13.2733 13 13.7035 13 14.2342Z" fill="black"/>
    </svg>
  );
};

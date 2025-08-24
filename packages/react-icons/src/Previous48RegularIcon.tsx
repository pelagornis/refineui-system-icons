import React from 'react';
import { IconProps } from './types';

export const Previous48RegularIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.3226 25.7862C13.0837 25.0228 13.0837 23.2868 14.3226 22.5234L36.8827 8.62086C38.2292 7.79111 40 8.71786 40 10.2523V38.0574C40 39.5918 38.2292 40.5186 36.8827 39.6888L14.3226 25.7862ZM37.3999 35.1626C37.3999 35.9452 36.5415 36.4245 35.8752 36.0139L18.0125 25.0061C17.3787 24.6155 17.3787 23.6941 18.0125 23.3035L35.8752 12.2958C36.5415 11.8852 37.3999 12.3645 37.3999 13.1471L37.3999 35.1626Z" fill="black"/>
<path d="M8 38.0193C8 38.7373 8.58205 39.3193 9.30005 39.3193C10.018 39.3193 10.6001 38.7373 10.6001 38.0193L10.6001 9.29998C10.6001 8.58202 10.018 8 9.30005 8C8.58205 8 8 8.58202 8 9.29998L8 38.0193Z" fill="black"/>
    </svg>
  );
};

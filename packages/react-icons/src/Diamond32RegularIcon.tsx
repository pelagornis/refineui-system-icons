import React from 'react';
import { IconProps } from './types';

export const Diamond32RegularIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.7701 5.87127C16.6084 4.70958 14.7249 4.70958 13.5632 5.87127L5.87127 13.5632C4.70958 14.7249 4.70958 16.6084 5.87127 17.7701L13.5632 25.4621C14.7249 26.6238 16.6084 26.6238 17.7701 25.4621L25.4621 17.7701C26.6238 16.6084 26.6238 14.7249 25.4621 13.5632L17.7701 5.87127ZM24.2364 14.7889L16.5445 7.09692C16.0597 6.61214 15.2737 6.61214 14.7889 7.09692L7.09692 14.7889C6.61214 15.2737 6.61214 16.0597 7.09692 16.5445L14.7889 24.2364C15.2737 24.7212 16.0597 24.7212 16.5445 24.2364L24.2364 16.5445C24.7212 16.0597 24.7212 15.2737 24.2364 14.7889Z" fill="black"/>
    </svg>
  );
};

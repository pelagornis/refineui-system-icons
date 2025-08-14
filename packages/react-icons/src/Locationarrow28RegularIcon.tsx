import React from 'react';
import { IconProps } from './types';

export const Locationarrow28RegularIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M22.4585 4.86359C22.6533 4.33828 22.1272 3.83398 21.6119 4.05213L5.38971 10.921C4.84754 11.1506 4.87831 11.9305 5.43687 12.1165L11.8248 14.2435C12.0141 14.3066 12.1631 14.4547 12.2275 14.6439L14.8099 22.2336C15.0035 22.8028 15.8031 22.8136 16.012 22.25L22.4585 4.86359ZM20.3299 6.24201L8.12074 11.4116L12.3039 12.8046C12.944 13.0177 13.4465 13.518 13.6633 14.1554L15.4494 19.4048L20.3299 6.24201Z" fill="black"/>
    </svg>
  );
};

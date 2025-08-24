import React from 'react';
import { IconProps } from './types';

export const Rotation24RegularIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.64992 4C5.00886 4 5.29984 4.29098 5.29984 4.64992V11.3401C6.57705 11.3787 8.20748 11.7412 9.6169 12.7297C11.2198 13.8539 12.4727 15.7442 12.6326 18.7002H19.3501C19.709 18.7002 20 18.9911 20 19.3501C20 19.709 19.709 20 19.3501 20H5.6498C4.73864 20 4 19.2614 4 18.3502V4.64992C4 4.29098 4.29098 4 4.64992 4ZM11.3307 18.7002C11.1761 16.1594 10.1132 14.6654 8.87054 13.7939C7.72092 12.9876 6.3649 12.6788 5.29984 12.6404V18.3502C5.29984 18.5435 5.45652 18.7002 5.6498 18.7002H11.3307Z" fill="black"/>
    </svg>
  );
};

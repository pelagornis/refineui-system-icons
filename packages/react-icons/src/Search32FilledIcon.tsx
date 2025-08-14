import React from 'react';
import { IconProps } from './types';

export const Search32FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.6852 18.9826C17.6786 18.9877 17.6719 18.9927 17.6653 18.9977C16.5512 19.8347 15.1662 20.3308 13.6654 20.3308C9.98419 20.3308 7 17.3466 7 13.6654C7 9.98419 9.98419 7 13.6654 7C17.3466 7 20.3308 9.98419 20.3308 13.6654C20.3308 15.1752 19.8288 16.5677 18.9826 17.6852L23.5028 22.2054C23.9353 22.6379 24.6705 23.6326 24.1515 24.1515C23.6326 24.6705 22.6379 23.9353 22.2054 23.5028L17.6852 18.9826ZM17.6646 13.6654C17.6646 15.8741 15.8741 17.6646 13.6654 17.6646C11.4567 17.6646 9.66615 15.8741 9.66615 13.6654C9.66615 11.4567 11.4567 9.66615 13.6654 9.66615C15.8741 9.66615 17.6646 11.4567 17.6646 13.6654Z" fill="black"/>
    </svg>
  );
};

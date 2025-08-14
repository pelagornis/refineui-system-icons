import React from 'react';
import { IconProps } from './types';

export const Record24RegularIcon: React.FC<IconProps> = ({ 
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
<path d="M12 17C14.7614 17 17 14.7614 17 12C17 9.23857 14.7614 7 12 7C9.23859 7 7 9.23857 7 12C7 14.7614 9.23859 17 12 17Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M20 12C20 16.4183 16.4183 20 12 20C7.58173 20 4 16.4183 4 12C4 7.58173 7.58173 4 12 4C16.4183 4 20 7.58173 20 12ZM18.7 12C18.7 15.7003 15.7003 18.7 12 18.7C8.29968 18.7 5.29999 15.7003 5.29999 12C5.29999 8.2997 8.29968 5.3 12 5.3C15.7003 5.3 18.7 8.2997 18.7 12Z" fill="black"/>
    </svg>
  );
};

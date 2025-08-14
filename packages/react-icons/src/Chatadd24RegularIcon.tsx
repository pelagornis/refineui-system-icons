import React from 'react';
import { IconProps } from './types';

export const Chatadd24RegularIcon: React.FC<IconProps> = ({ 
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
<path d="M12.65 8.5C12.65 8.14102 12.359 7.85 12 7.85C11.641 7.85 11.35 8.14102 11.35 8.5V11.35H8.5C8.14102 11.35 7.85 11.641 7.85 12C7.85 12.359 8.14102 12.65 8.5 12.65H11.35V15.5C11.35 15.859 11.641 16.15 12 16.15C12.359 16.15 12.65 15.859 12.65 15.5V12.65H15.5C15.859 12.65 16.15 12.359 16.15 12C16.15 11.641 15.859 11.35 15.5 11.35H12.65V8.5Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58173 16.4183 4 12 4C7.58173 4 4 7.58173 4 12V19C4 19.5523 4.44772 20 5 20H12ZM18.7 12C18.7 15.7003 15.7003 18.7 12 18.7H5.3V12C5.3 8.2997 8.2997 5.3 12 5.3C15.7003 5.3 18.7 8.2997 18.7 12Z" fill="black"/>
    </svg>
  );
};

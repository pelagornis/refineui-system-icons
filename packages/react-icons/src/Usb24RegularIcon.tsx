import React from 'react';
import { IconProps } from './types';

export const Usb24RegularIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M9 7.7707V5.01911C9 4.45627 9.44772 4 10 4H14C14.5523 4 15 4.45627 15 5.01911V7.7707C16.1046 7.7707 17 8.68324 17 9.80892V17.9618C17 19.0875 16.1046 20 15 20H9C7.89543 20 7 19.0875 7 17.9618V9.80892C7 8.68324 7.89543 7.7707 9 7.7707ZM10.3 7.7707V5.32484H13.7V7.7707L10.3 7.7707ZM9 9.09554C8.6134 9.09554 8.3 9.41493 8.3 9.80892V17.9618C8.3 18.3558 8.6134 18.6752 9 18.6752H15C15.3866 18.6752 15.7 18.3558 15.7 17.9618V9.80892C15.7 9.41493 15.3866 9.09554 15 9.09554" fill="black"/>
    </svg>
  );
};

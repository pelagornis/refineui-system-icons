import React from 'react';
import { IconProps } from './types';

export const Videoplaypause20FilledIcon: React.FC<IconProps> = ({ 
  size = 20, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {{...props}}
    >
      width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.53336 6.74991C9.53336 6.33575 9.86911 6 10.2833 6H11.9084C12.3225 6 12.6583 6.33575 12.6583 6.74991V13.5865C12.6583 14.0007 12.3225 14.3365 11.9084 14.3365H10.2833C9.86911 14.3365 9.53336 14.0007 9.53336 13.5865V10.5189C9.47533 10.6292 9.38795 10.7274 9.27122 10.8015L4.15163 14.0493C3.65235 14.366 3 14.0073 3 13.416L3 6.92044C3 6.32917 3.65235 5.97046 4.15163 6.2872L9.27122 9.53499C9.38795 9.60904 9.47533 9.70731 9.53336 9.8176V6.74991Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.9583 6C13.5442 6 13.2084 6.33575 13.2084 6.74991V13.5865C13.2084 14.0007 13.5442 14.3365 13.9583 14.3365H15.5834C15.9976 14.3365 16.3333 14.0007 16.3333 13.5865V6.74991C16.3333 6.33575 15.9976 6 15.5834 6H13.9583Z" fill="black"/>
    </svg>
  );
};

import React from 'react';
import { IconProps } from './types';

export const Video24RegularIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M4 9C4 7.89543 4.89545 7 6 7H13C14.1046 7 15 7.89543 15 9V15C15 16.1046 14.1046 17 13 17H6C4.89545 17 4 16.1046 4 15V9ZM6 8.3H13C13.3866 8.3 13.7 8.6134 13.7 9V15C13.7 15.3866 13.3866 15.7 13 15.7H6C5.6134 15.7 5.29999 15.3866 5.29999 15V9C5.29999 8.6134 5.6134 8.3 6 8.3Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M20 9.13504V14.865C20 15.7128 19.0111 16.1759 18.3598 15.6332L15.7642 13.4702C15.5363 13.2802 15.4044 12.9988 15.4044 12.702V11.298C15.4044 11.0012 15.5363 10.7198 15.7642 10.5298L18.3598 8.36682C19.0111 7.82405 20 8.2872 20 9.13504ZM18.7 10.3093C18.7 10.0974 18.4528 9.98157 18.2899 10.1173L16.8843 11.2886C16.7703 11.3836 16.7044 11.5243 16.7044 11.6727V12.3273C16.7044 12.4757 16.7703 12.6164 16.8843 12.7114L18.2899 13.8827C18.4528 14.0184 18.7 13.9026 18.7 13.6907V10.3093Z" fill="black"/>
    </svg>
  );
};

import React from 'react';
import { IconProps } from './types';

export const Send28FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M23.3313 13.7922C23.7785 14.0159 23.7785 14.6541 23.3313 14.8778L5.87813 23.6052C5.47469 23.8069 5 23.5135 5 23.0624V16.0523C5 15.7603 5.20796 15.5097 5.49495 15.4558L10.8361 14.4543C10.9681 14.4295 10.9681 14.2405 10.8361 14.2157L5.49495 13.2142C5.20796 13.1603 5 12.9097 5 12.6177L5 5.60761C5 5.15651 5.47469 4.86311 5.87813 5.06485L23.3313 13.7922Z" fill="black"/>
    </svg>
  );
};

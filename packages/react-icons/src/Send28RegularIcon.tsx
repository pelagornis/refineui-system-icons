import React from 'react';
import { IconProps } from './types';

export const Send28RegularIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M23.3313 13.7922C23.7785 14.0159 23.7785 14.6541 23.3313 14.8778L5.87813 23.6052C5.47468 23.8069 5 23.5135 5 23.0624V5.60761C5 5.15651 5.47469 4.86311 5.87813 5.06485L23.3313 13.7922ZM6.57761 7.66954C6.57761 7.44398 6.81495 7.29728 7.01667 7.39815L20.3463 14.0636C20.5699 14.1754 20.5699 14.4946 20.3463 14.6064L7.01667 21.2718C6.81495 21.3727 6.57761 21.226 6.57761 21.0005V15.4273C6.57761 15.2597 6.71344 15.1239 6.88099 15.1239H11.6745C12.1101 15.1239 12.4633 14.7707 12.4633 14.335C12.4633 13.8993 12.1101 13.5461 11.6745 13.5461H6.88099C6.71344 13.5461 6.57761 13.4103 6.57761 13.2427L6.57761 7.66954Z" fill="black"/>
    </svg>
  );
};

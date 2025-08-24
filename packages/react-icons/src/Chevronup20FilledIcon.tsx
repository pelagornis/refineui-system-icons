import React from 'react';
import { IconProps } from './types';

export const Chevronup20FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M4.42193 13.1701C4.09661 13.4954 3.56928 13.4954 3.24396 13.1701C2.9187 12.8449 2.91866 12.3177 3.24396 11.9925L8.93614 6.30165C9.33882 5.89943 9.99126 5.89947 10.394 6.30165L16.0861 11.9925L16.1431 12.0559C16.41 12.383 16.3911 12.8652 16.0861 13.1701C15.7812 13.4751 15.2988 13.4939 14.9716 13.2271L14.9082 13.1701L9.66505 7.92829L4.42193 13.1701Z" fill="black"/>
    </svg>
  );
};

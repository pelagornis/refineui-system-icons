import React from 'react';
import { IconProps } from './types';

export const Moreverticial20FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M12 4.66625C12 5.58649 11.254 6.3325 10.3337 6.3325C9.41351 6.3325 8.6675 5.58649 8.6675 4.66625C8.6675 3.74601 9.41351 3 10.3338 3C11.254 3 12 3.74601 12 4.66625Z" fill="black"/>
<path d="M12 9.665C12 10.5852 11.254 11.3313 10.3337 11.3313C9.41351 11.3313 8.6675 10.5852 8.6675 9.665C8.6675 8.74476 9.41351 7.99875 10.3337 7.99875C11.254 7.99875 12 8.74476 12 9.665Z" fill="black"/>
<path d="M12 14.6637C12 15.584 11.254 16.33 10.3337 16.33C9.4135 16.33 8.6675 15.584 8.6675 14.6637C8.6675 13.7435 9.41351 12.9975 10.3337 12.9975C11.254 12.9975 12 13.7435 12 14.6637Z" fill="black"/>
    </svg>
  );
};

import React from 'react';
import { IconProps } from './types';

export const Cloud20FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M14.4286 9.75C13.9026 9.75 13.4887 9.3166 13.355 8.80789C12.9304 7.19283 11.4401 6 9.66667 6C7.89327 6 6.40289 7.19283 5.97837 8.80789C5.84465 9.3166 5.43075 9.75 4.90476 9.75C3.85279 9.75 3 10.5895 3 11.625C3 12.6605 3.85279 13.5 4.90476 13.5H14.4286C15.4805 13.5 16.3333 12.6605 16.3333 11.625C16.3333 10.5895 15.4805 9.75 14.4286 9.75Z" fill="black"/>
    </svg>
  );
};

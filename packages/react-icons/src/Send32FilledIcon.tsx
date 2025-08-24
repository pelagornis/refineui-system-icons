import React from 'react';
import { IconProps } from './types';

export const Send32FilledIcon: React.FC<IconProps> = ({ 
  size = 32, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {{...props}}
    >
      width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M25.95 15.0465C26.4611 15.302 26.4611 16.0313 25.95 16.2869L6.00357 26.2592C5.5425 26.4898 5 26.1545 5 25.639V17.6289C5 17.2953 5.23767 17.0089 5.56566 16.9474L11.6698 15.803C11.8207 15.7747 11.8207 15.5586 11.6698 15.5304L5.56566 14.3859C5.23767 14.3244 5 14.0381 5 13.7044L5 5.69429C5 5.17883 5.5425 4.84358 6.00358 5.0741L25.95 15.0465Z" fill="black"/>
    </svg>
  );
};

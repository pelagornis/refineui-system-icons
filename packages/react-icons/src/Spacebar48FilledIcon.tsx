import React from 'react';
import { IconProps } from './types';

export const Spacebar48FilledIcon: React.FC<IconProps> = ({ 
  size = 48, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {{...props}}
    >
      width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.99984 20C11.1043 20 11.9997 20.8945 11.9997 21.998V23.5046C11.9997 23.7804 12.2235 24.0041 12.4996 24.0041H35.5004C35.7765 24.0041 36.0003 23.7804 36.0003 23.5046V21.998C36.0003 20.8945 36.8957 20 38.0002 20C39.1046 20 40 20.8945 40 21.998V25.0031C40 26.6582 38.657 28 37.0002 28H10.9998C9.34304 28 8 26.6582 8 25.0031V21.998C8 20.8945 8.89536 20 9.99984 20Z" fill="black"/>
    </svg>
  );
};

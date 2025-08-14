import React from 'react';
import { IconProps } from './types';

export const Rhombus16FilledIcon: React.FC<IconProps> = ({ 
  size = 16, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {{...props}}
    >
      width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.13913 8.7697C3.95362 8.51111 3.95362 8.15556 4.13913 7.89697L7.44348 3.29091C7.72174 2.90303 8.27826 2.90303 8.55652 3.29091L11.8609 7.89697C12.0464 8.15556 12.0464 8.51111 11.8609 8.7697L8.55652 13.3758C8.27826 13.7636 7.72174 13.7636 7.44348 13.3758L4.13913 8.7697Z" fill="black"/>
    </svg>
  );
};

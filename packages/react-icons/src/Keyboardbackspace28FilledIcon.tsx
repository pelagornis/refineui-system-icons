import React from 'react';
import { IconProps } from './types';

export const Keyboardbackspace28FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M12.7067 8.40398C13.1423 8.89152 13.0866 9.62817 12.5824 10.0493L9.44869 12.6668H22.4602C23.1265 12.6668 23.6667 13.1891 23.6667 13.8333C23.6667 14.4776 23.1265 14.9999 22.4602 14.9999H9.44869L12.5824 17.6173C13.0866 18.0385 13.1423 18.7751 12.7067 19.2627C12.2711 19.7502 11.5092 19.804 11.005 19.3829L5.41779 14.7161C4.86074 14.2508 4.86074 13.4158 5.41779 12.9506L11.005 8.28379C11.5092 7.86263 12.2711 7.91643 12.7067 8.40398Z" fill="black"/>
    </svg>
  );
};

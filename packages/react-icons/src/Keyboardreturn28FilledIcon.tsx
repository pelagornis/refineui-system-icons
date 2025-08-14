import React from 'react';
import { IconProps } from './types';

export const Keyboardreturn28FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M12.7067 8.40399C13.1422 8.89154 13.0866 9.62819 12.5823 10.0494L9.44865 12.6668H21.2538V9.63324C21.2538 8.98898 21.7939 8.4667 22.4602 8.4667C23.1265 8.4667 23.6667 8.98898 23.6667 9.63324V13.8333C23.6667 14.4776 23.1265 14.9999 22.4602 14.9999H9.44865L12.5823 17.6173C13.0866 18.0385 13.1422 18.7751 12.7067 19.2627C12.2711 19.7502 11.5092 19.804 11.005 19.3829L5.41779 14.7161C4.86074 14.2508 4.86074 13.4158 5.41779 12.9505L11.005 8.28378C11.5092 7.86262 12.2711 7.91644 12.7067 8.40399Z" fill="black"/>
    </svg>
  );
};

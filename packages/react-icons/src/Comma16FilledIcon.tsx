import React from 'react';
import { IconProps } from './types';

export const Comma16FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M5 6.34276C5 4.4966 6.49092 3 8.33005 3C10.164 3 11.6516 4.48812 11.6601 6.32705C11.7168 7.62846 11.5082 9.43127 10.6478 10.9374C9.83898 12.3531 8.46675 13.4749 6.33137 13.6675C5.96502 13.7006 5.66601 13.3975 5.66601 13.0283C5.66601 12.659 5.96562 12.3648 6.33117 12.3238C7.93482 12.1438 8.90025 11.3084 9.49225 10.2722C9.67312 9.95559 9.81999 9.61779 9.93741 9.27103C9.46086 9.53518 8.91294 9.68551 8.33005 9.68551C6.49092 9.68551 5 8.18891 5 6.34276Z" fill="black"/>
    </svg>
  );
};

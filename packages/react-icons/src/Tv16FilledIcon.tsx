import React from 'react';
import { IconProps } from './types';

export const Tv16FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M3.66688 4C3.29857 4 3 4.29857 3 4.66688V10.0019C3 10.3702 3.29857 10.6687 3.66688 10.6687H13.0031C13.3714 10.6687 13.67 10.3702 13.67 10.0019V4.66688C13.67 4.29857 13.3714 4 13.0031 4H3.66688Z" fill="black"/>
<path d="M4.76722 11.3356C4.52782 11.3356 4.33375 11.5297 4.33375 11.7691C4.33375 12.0085 4.52782 12.2026 4.76722 12.2026H11.9028C12.1422 12.2026 12.3363 12.0085 12.3363 11.7691C12.3363 11.5297 12.1422 11.3356 11.9028 11.3356H4.76722Z" fill="black"/>
    </svg>
  );
};

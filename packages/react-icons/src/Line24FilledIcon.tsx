import React from 'react';
import { IconProps } from './types';

export const Line24FilledIcon: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {{...props}}
    >
      width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.3092 3.89541C19.6997 4.2859 19.6997 4.91901 19.3092 5.30951L5.30902 19.3097C4.91853 19.7002 4.28541 19.7002 3.89492 19.3097C3.50443 18.9192 3.50443 18.2861 3.89492 17.8956L17.8951 3.89541C18.2856 3.50492 18.9187 3.50492 19.3092 3.89541Z" fill="black"/>
    </svg>
  );
};

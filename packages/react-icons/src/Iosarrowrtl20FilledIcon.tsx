import React from 'react';
import { IconProps } from './types';

export const Iosarrowrtl20FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M10.3181 16.1454C9.94803 15.8544 9.8928 15.3295 10.1948 14.973L14.4658 9.92972C14.5957 9.77641 14.5957 9.55627 14.4658 9.40296L10.1948 4.3597C9.8928 4.00314 9.94803 3.47825 10.3181 3.18733C10.6882 2.89641 11.233 2.94962 11.535 3.30618L16.4752 9.13958C16.7349 9.4462 16.7349 9.88648 16.4752 10.1931L11.535 16.0265C11.233 16.3831 10.6882 16.4363 10.3181 16.1454Z" fill="black"/>
    </svg>
  );
};

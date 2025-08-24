import React from 'react';
import { IconProps } from './types';

export const Iosarrowltr20FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M9.35186 3.18766C9.72196 3.47858 9.77719 4.00346 9.47522 4.36002L5.20415 9.40329C5.07431 9.5566 5.07431 9.77674 5.20415 9.93005L9.47522 14.9733C9.77719 15.3299 9.72196 15.8548 9.35186 16.1457C8.98176 16.4366 8.43695 16.3834 8.13498 16.0268L3.19475 10.1934C2.93508 9.88681 2.93508 9.44653 3.19475 9.13991L8.13498 3.3065C8.43695 2.94994 8.98176 2.89673 9.35186 3.18766Z" fill="black"/>
    </svg>
  );
};

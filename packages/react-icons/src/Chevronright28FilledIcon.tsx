import React from 'react';
import { IconProps } from './types';

export const Chevronright28FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M9.34165 6.99156C8.88612 6.53591 8.88612 5.79734 9.34165 5.34169C9.79719 4.88613 10.5356 4.88607 10.9911 5.34169L18.9617 13.3142C19.525 13.8781 19.525 14.792 18.9617 15.356L10.9911 23.3285L10.9023 23.4082C10.4441 23.782 9.76872 23.7556 9.34165 23.3285C8.91459 22.9013 8.88823 22.2257 9.26191 21.7675L9.34165 21.6786L16.6834 14.3351L9.34165 6.99156Z" fill="black"/>
    </svg>
  );
};

import React from 'react';
import { IconProps } from './types';

export const Alignright28FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M22.2415 5C21.8226 5 21.4831 5.33946 21.4831 5.75821L21.4831 22.9085C21.4831 23.3272 21.8226 23.6667 22.2415 23.6667C22.6604 23.6667 23 23.3272 23 22.9085L23 5.75821C23 5.33946 22.6604 5 22.2415 5Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M18.0549 6.98322C19.3438 6.98322 20.3886 8.02773 20.3886 9.31619L20.3886 11.3878C20.3886 12.6763 19.3438 13.7208 18.0549 13.7208L6.66369 13.7208C5.37482 13.7208 4.32998 12.6763 4.32998 11.3878L4.32998 9.31619C4.32998 8.02772 5.37482 6.98322 6.66369 6.98322L18.0549 6.98322Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M20.3886 17.2788C20.3886 15.9903 19.3438 14.9458 18.0549 14.9458L10.3695 14.9458C9.08066 14.9458 8.03582 15.9903 8.03582 17.2788L8.03582 19.3505C8.03582 20.6389 9.08066 21.6834 10.3695 21.6834L18.0549 21.6834C19.3438 21.6834 20.3886 20.6389 20.3886 19.3505L20.3886 17.2788Z" fill="black"/>
    </svg>
  );
};

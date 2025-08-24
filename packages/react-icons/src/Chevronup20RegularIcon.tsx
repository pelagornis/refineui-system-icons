import React from 'react';
import { IconProps } from './types';

export const Chevronup20RegularIcon: React.FC<IconProps> = ({ 
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
<path d="M3.85003 13.3176C3.64327 13.4613 3.35686 13.4452 3.16749 13.2647C2.9512 13.0584 2.94349 12.7155 3.1496 12.499L9.12244 6.23228C9.39936 5.94202 9.85118 5.92373 10.1499 6.17776L10.2077 6.23228L16.1805 12.499L16.248 12.5853C16.3817 12.7987 16.3512 13.0841 16.1618 13.2647C15.9725 13.4448 15.6867 13.4611 15.4801 13.3176L15.3963 13.246L9.66505 7.23307L3.93301 13.246L3.85003 13.3176Z" fill="black"/>
    </svg>
  );
};

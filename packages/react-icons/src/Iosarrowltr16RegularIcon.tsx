import React from 'react';
import { IconProps } from './types';

export const Iosarrowltr16RegularIcon: React.FC<IconProps> = ({ 
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
<path d="M8.19531 3.1144C8.36649 3.27469 8.37574 3.54385 8.21597 3.71559L4.12766 8.11008C4.01071 8.23579 4.01071 8.43087 4.12766 8.55659L8.21597 12.9511C8.37574 13.1228 8.36649 13.392 8.19531 13.5523C8.02412 13.7126 7.75583 13.7033 7.59605 13.5315L3.17543 8.77984C2.94152 8.52842 2.94152 8.13825 3.17543 7.88683L7.59605 3.13513C7.75583 2.96339 8.02412 2.95411 8.19531 3.1144Z" fill="black"/>
    </svg>
  );
};

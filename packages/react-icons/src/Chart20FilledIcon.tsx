import React from 'react';
import { IconProps } from './types';

export const Chart20FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M4.08329 3.54164C4.08329 3.2425 3.84079 3 3.54164 3C3.2425 3 3 3.2425 3 3.54164V14.9584C3 15.7177 3.61558 16.3333 4.37494 16.3333H15.7917C16.0908 16.3333 16.3333 16.0908 16.3333 15.7917C16.3333 15.4925 16.0908 15.25 15.7917 15.25H4.37494C4.21387 15.25 4.08329 15.1195 4.08329 14.9584V3.54164Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.7937 5.13084C15.7937 4.27709 14.7615 3.84953 14.1578 4.45322L10.4135 8.19747L9.09117 6.87509C8.78023 6.56416 8.29758 6.50474 7.92052 6.73098L5.17607 8.37764C4.88743 8.55083 4.71082 8.86276 4.71082 9.19937V13.9162C4.71082 14.3304 5.04659 14.6662 5.46079 14.6662H15.0437C15.4579 14.6662 15.7937 14.3304 15.7937 13.9162V5.13084Z" fill="black"/>
    </svg>
  );
};

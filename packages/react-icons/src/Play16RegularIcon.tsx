import React from 'react';
import { IconProps } from './types';

export const Play16RegularIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.2673 8.97943C13.7998 8.71322 13.7998 7.95345 13.2673 7.68724L4.04559 3.07719C3.56521 2.83705 3 3.1863 3 3.72329V12.9434C3 13.4804 3.56521 13.8296 4.04558 13.5895L13.2673 8.97943ZM12.0251 8.63149C12.2708 8.50865 12.2708 8.15801 12.0251 8.03518L4.34905 4.19783C4.12742 4.08703 3.86667 4.2482 3.86667 4.49598L3.86667 12.1707C3.86667 12.4185 4.12742 12.5796 4.34905 12.4688L12.0251 8.63149Z" fill="black"/>
    </svg>
  );
};

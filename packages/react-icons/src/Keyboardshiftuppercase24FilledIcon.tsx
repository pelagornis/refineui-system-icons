import React from 'react';
import { IconProps } from './types';

export const Keyboardshiftuppercase24FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.1416 4.37925C11.6005 3.87359 12.3989 3.87358 12.8578 4.37925L19.5679 11.7728C20.5425 12.8467 19.7521 14.5212 18.333 14.5212H16.1888V15.8531C16.1888 16.7714 15.4363 17.5 14.5276 17.5H9.47176C8.56308 17.5 7.81059 16.7714 7.81059 15.8531V14.5212H5.66632C4.24727 14.5212 3.45683 12.8467 4.43143 11.7728L11.1416 4.37925Z" fill="black"/>
<path d="M8.50001 18.7C8.14103 18.7 7.85001 18.991 7.85001 19.35C7.85001 19.709 8.14103 20 8.50001 20H15.5C15.859 20 16.15 19.709 16.15 19.35C16.15 18.991 15.859 18.7 15.5 18.7H8.50001Z" fill="black"/>
    </svg>
  );
};

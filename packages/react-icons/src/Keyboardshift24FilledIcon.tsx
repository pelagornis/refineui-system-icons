import React from 'react';
import { IconProps } from './types';

export const Keyboardshift24FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.8578 4.37925C12.3989 3.87358 11.6005 3.87359 11.1416 4.37925L4.43143 11.7728C3.45683 12.8467 4.24727 14.5212 5.66632 14.5212H7.81059V18.3572C7.81059 19.2754 8.56308 20.0041 9.47176 20.0041H14.5276C15.4363 20.0041 16.1888 19.2754 16.1888 18.3572V14.5212H18.333C19.7521 14.5212 20.5425 12.8467 19.5679 11.7728L12.8578 4.37925Z" fill="black"/>
    </svg>
  );
};

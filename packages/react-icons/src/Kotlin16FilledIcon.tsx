import React from 'react';
import { IconProps } from './types';

export const Kotlin16FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M12.9205 3C13.5821 3 13.9064 3.73214 13.4289 4.14809L8.99774 8.00846L3.61825 12.584C3.38369 12.7835 3 12.6325 3 12.3406V8.96685C3 8.8784 3.0387 8.79358 3.10759 8.73104L9.31358 3.09763C9.38244 3.03512 9.47582 3 9.5732 3H12.9205Z" fill="black"/>
<path d="M13.4405 12.523C13.9162 12.9394 13.5916 13.67 12.9308 13.67H4.65502C4.32205 13.67 4.16097 13.2999 4.40398 13.0932L9.0628 9.13064C9.2055 9.00927 9.42792 9.01072 9.56869 9.13394L13.4405 12.523Z" fill="black"/>
<path d="M7.19587 3C7.52305 3 7.68688 3.35921 7.45549 3.56925L3.62683 7.04468C3.39548 7.25468 3 7.1059 3 6.80886V3.66688C3 3.29857 3.32881 3 3.73443 3H7.19587Z" fill="black"/>
    </svg>
  );
};

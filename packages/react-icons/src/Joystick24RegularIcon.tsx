import React from 'react';
import { IconProps } from './types';

export const Joystick24RegularIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.65 9.92939C13.9944 9.63243 15 8.43366 15 7C15 5.34315 13.6569 4 12 4C10.3431 4 9 5.34315 9 7C9 8.43366 10.0056 9.63243 11.35 9.92939V12.35H10C9.08873 12.35 8.35 13.0887 8.35 14V15H7C6.44772 15 6 15.4477 6 16V18C6 18.5523 6.44772 19 7 19H17C17.5523 19 18 18.5523 18 18V16C18 15.4477 17.5523 15 17 15H15.65V14C15.65 13.0887 14.9113 12.35 14 12.35H12.65V9.92939ZM13.7 7C13.7 7.93888 12.9389 8.7 12 8.7C11.0611 8.7 10.3 7.93888 10.3 7C10.3 6.06112 11.0611 5.3 12 5.3C12.9389 5.3 13.7 6.06112 13.7 7ZM14.35 15V14C14.35 13.8067 14.1933 13.65 14 13.65H10C9.8067 13.65 9.65 13.8067 9.65 14V15H14.35ZM7.3 16.3V17.7H16.7V16.3H7.3Z" fill="black"/>
    </svg>
  );
};

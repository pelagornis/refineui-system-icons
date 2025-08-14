import React from 'react';
import { IconProps } from './types';

export const Organization24FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.65 9.92939C13.9944 9.63243 15 8.43366 15 7C15 5.34315 13.6569 4 12 4C10.3431 4 9 5.34315 9 7C9 8.43366 10.0056 9.63243 11.35 9.92939V11.1C11.35 11.2381 11.2381 11.35 11.1 11.35H8C7.08873 11.35 6.35 12.0887 6.35 13V14.0706C5.00564 14.3676 4 15.5663 4 17C4 18.6569 5.34315 20 7 20C8.65685 20 10 18.6569 10 17C10 15.5663 8.99436 14.3676 7.65 14.0706V13C7.65 12.8067 7.8067 12.65 8 12.65H16C16.1933 12.65 16.35 12.8067 16.35 13V14.0706C15.0056 14.3676 14 15.5663 14 17C14 18.6569 15.3431 20 17 20C18.6569 20 20 18.6569 20 17C20 15.5663 18.9944 14.3676 17.65 14.0706V13C17.65 12.0887 16.9113 11.35 16 11.35H12.9C12.7619 11.35 12.65 11.2381 12.65 11.1V9.92939Z" fill="black"/>
    </svg>
  );
};

import React from 'react';
import { IconProps } from './types';

export const Flagoff24FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M4.10962 3.19038C3.85578 2.93654 3.44422 2.93654 3.19038 3.19038C2.93654 3.44422 2.93654 3.85578 3.19038 4.10962L19.8908 20.8101C20.1447 21.0639 20.5562 21.0639 20.8101 20.8101C21.0639 20.5562 21.0639 20.1447 20.8101 19.8908L4.10962 3.19038Z" fill="black"/>
<path d="M4 19.3519V6L14.0814 16.0814H5.8C5.52386 16.0814 5.3 16.3053 5.3 16.5814V19.3519C5.3 19.7109 5.00899 20.0019 4.65 20.0019C4.29101 20.0019 4 19.7109 4 19.3519Z" fill="black"/>
<path d="M6 4L18.0814 16.0814H18.289C19.6 16.0814 20.534 14.6166 19.6486 13.4762L17.1196 10.2186C17.0349 10.1095 17.0349 9.97197 17.1196 9.86283L19.6486 6.60521C20.534 5.46478 19.6 4 18.289 4H6Z" fill="black"/>
    </svg>
  );
};

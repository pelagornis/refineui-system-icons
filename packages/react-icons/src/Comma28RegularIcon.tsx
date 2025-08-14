import React from 'react';
import { IconProps } from './types';

export const Comma28RegularIcon: React.FC<IconProps> = ({ 
  size = 28, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {{...props}}
    >
      width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8 10.6798C8 7.54293 10.608 5 13.8252 5C17.036 5 19.6401 7.53295 19.6504 10.6613C19.7563 12.9905 19.3696 16.2001 17.8043 18.8616C16.3003 21.4187 13.7238 23.4303 9.62837 23.6654C9.17944 23.6911 8.81427 23.3329 8.81427 22.8944C8.81427 22.4559 9.18013 22.1037 9.62883 22.0743C13.082 21.8479 15.1538 20.1761 16.3916 18.0716C16.9551 17.1135 17.3485 16.0583 17.6091 14.9983C16.5912 15.847 15.2696 16.3596 13.8252 16.3596C10.608 16.3596 8 13.8166 8 10.6798Z" fill="black"/>
    </svg>
  );
};

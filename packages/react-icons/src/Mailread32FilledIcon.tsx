import React from 'react';
import { IconProps } from './types';

export const Mailread32FilledIcon: React.FC<IconProps> = ({ 
  size = 32, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {{...props}}
    >
      width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.4281 5.2019C15.9566 4.93259 15.3779 4.93271 14.9066 5.2022L6.17458 10.1948C6.09056 10.2428 6.0841 10.3615 6.16242 10.4184L15.666 17.3185L25.2421 10.4541C25.321 10.3975 25.3149 10.2782 25.2305 10.23L16.4281 5.2019Z" fill="black"/>
<path d="M24.8016 26.3333C25.6484 26.3333 26.3349 25.6469 26.3349 24.8001V12.0688C26.3349 11.9602 26.2122 11.8972 26.1239 11.9604L16.5588 18.811C16.0251 19.1933 15.3073 19.1934 14.7735 18.8112L5.21095 11.9642C5.12272 11.901 5 11.9641 5 12.0726V24.8001C5 25.6469 5.68646 26.3333 6.53326 26.3333H24.8016Z" fill="black"/>
    </svg>
  );
};

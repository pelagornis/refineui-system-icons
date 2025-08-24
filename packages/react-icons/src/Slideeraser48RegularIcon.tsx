import React from 'react';
import { IconProps } from './types';

export const Slideeraser48RegularIcon: React.FC<IconProps> = ({ 
  size = 48, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {{...props}}
    >
      width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11 13.6H35C35.7732 13.6 36.4 14.2268 36.4 15V23.247C37.2332 22.9159 38.1679 22.9177 39 23.2523V15C39 12.7909 37.2091 11 35 11H11C8.79086 11 7 12.7909 7 15V31C7 33.2091 8.79086 35 11 35H27.2523C26.9177 34.1679 26.9159 33.2332 27.247 32.4H11C10.2268 32.4 9.6 31.7732 9.6 31V15C9.6 14.2268 10.2268 13.6 11 13.6Z" fill="black"/>
<path d="M29.4384 32.635C28.8539 33.2195 28.8539 34.1672 29.4384 34.7517L33.2483 38.5616C33.8328 39.1461 34.7805 39.1461 35.365 38.5616L36.1361 37.7905L30.2095 31.8639L29.4384 32.635Z" fill="black"/>
<path d="M31.2679 30.8055L37.1945 36.7321L42.5616 31.365C43.1461 30.7805 43.1461 29.8328 42.5616 29.2483L38.7517 25.4384C38.1672 24.8539 37.2195 24.8539 36.635 25.4384L31.2679 30.8055Z" fill="black"/>
    </svg>
  );
};

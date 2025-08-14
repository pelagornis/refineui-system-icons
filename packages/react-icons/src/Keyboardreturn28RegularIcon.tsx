import React from 'react';
import { IconProps } from './types';

export const Keyboardreturn28RegularIcon: React.FC<IconProps> = ({ 
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
<path d="M12.1073 8.25699C12.3933 8.57118 12.362 9.05025 12.0373 9.32703L7.64129 13.0752H22.1V9.26567C22.1 8.84696 22.4507 8.50753 22.8833 8.50753C23.3159 8.50753 23.6667 8.84696 23.6667 9.26567V13.4251C23.6667 14.0693 23.1271 14.5915 22.4615 14.5915H7.64129L12.0373 18.3396C12.362 18.6164 12.3933 19.0955 12.1073 19.4097C11.8213 19.7239 11.3263 19.7542 11.0017 19.4774L5.4085 14.7085C4.86383 14.2441 4.86383 13.4225 5.4085 12.9581L11.0017 8.18928C11.3263 7.91249 11.8213 7.94281 12.1073 8.25699Z" fill="black"/>
    </svg>
  );
};

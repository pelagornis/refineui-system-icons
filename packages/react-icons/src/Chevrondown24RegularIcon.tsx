import React from 'react';
import { IconProps } from './types';

export const Chevrondown24RegularIcon: React.FC<IconProps> = ({ 
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
<path d="M18.9812 8.11583C19.2294 7.94335 19.5732 7.96267 19.8005 8.17932C20.0602 8.42699 20.0694 8.83856 19.822 9.09842L12.6521 16.6212C12.3197 16.9696 11.7773 16.9916 11.4187 16.6866L11.3494 16.6212L4.17945 9.09842L4.09839 8.99489C3.93796 8.73865 3.97459 8.39607 4.20191 8.17932C4.42919 7.96309 4.77224 7.94357 5.02027 8.11583L5.12086 8.20179L12.0007 15.4198L18.8816 8.20179L18.9812 8.11583Z" fill="black"/>
    </svg>
  );
};

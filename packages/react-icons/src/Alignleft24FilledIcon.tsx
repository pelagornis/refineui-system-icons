import React from 'react';
import { IconProps } from './types';

export const Alignleft24FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M4.65 4C5.00899 4 5.3 4.29101 5.3 4.65V19.3452C5.3 19.7041 5.00899 19.9952 4.65 19.9952C4.29101 19.9952 4 19.7041 4 19.3452V4.65C4 4.29101 4.29101 4 4.65 4Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.23773 5.69967C7.13316 5.69967 6.23773 6.5951 6.23773 7.69966V9.47276C6.23773 10.5773 7.13316 11.4728 8.23773 11.4728H17.9985C19.1031 11.4728 19.9985 10.5773 19.9985 9.47276V7.69967C19.9985 6.5951 19.1031 5.69967 17.9985 5.69967H8.23773Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.23773 14.5224C6.23773 13.4178 7.13316 12.5224 8.23773 12.5224H14.8229C15.9275 12.5224 16.8229 13.4178 16.8229 14.5224V16.2955C16.8229 17.4001 15.9275 18.2955 14.8229 18.2955H8.23773C7.13317 18.2955 6.23773 17.4001 6.23773 16.2955V14.5224Z" fill="black"/>
    </svg>
  );
};

import React from 'react';
import { IconProps } from './types';

export const Numbercircle528FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.3333 23.6667C19.488 23.6667 23.6667 19.488 23.6667 14.3333C23.6667 9.17868 19.488 5 14.3333 5C9.17868 5 5 9.17868 5 14.3333C5 19.488 9.17868 23.6667 14.3333 23.6667ZM13.2833 10.075C12.6132 10.075 11.825 10.5521 11.825 11.4167V13.1667C11.825 14.0312 12.6132 14.5083 13.2833 14.5083H15.325V17.075H12.5833C12.1645 17.075 11.825 17.4145 11.825 17.8333C11.825 18.2521 12.1645 18.5917 12.5833 18.5917H15.3833C16.0534 18.5917 16.8417 18.1146 16.8417 17.25V14.3333C16.8417 13.4688 16.0534 12.9917 15.3833 12.9917H13.3417V11.5917H16.0833C16.5021 11.5917 16.8417 11.2521 16.8417 10.8333C16.8417 10.4145 16.5021 10.075 16.0833 10.075H13.2833Z" fill="black"/>
    </svg>
  );
};

import React from 'react';
import { IconProps } from './types';

export const Badge20FilledIcon: React.FC<IconProps> = ({ 
  size = 20, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {{...props}}
    >
      width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.5556 6.55556C15.5374 6.55556 16.3333 5.75962 16.3333 4.77778C16.3333 3.79594 15.5374 3 14.5556 3C13.5737 3 12.7778 3.79594 12.7778 4.77778C12.7778 5.75962 13.5737 6.55556 14.5556 6.55556Z" fill="black"/>
<path d="M14.5556 7.44444C14.8672 7.44444 15.1664 7.39098 15.4444 7.29271V14.5556C15.4444 15.5374 14.6485 16.3333 13.6667 16.3333H4.77778C3.79595 16.3333 3 15.5374 3 14.5556V5.66667C3 4.68483 3.79595 3.88889 4.77778 3.88889H12.0406C11.9424 4.16691 11.8889 4.46611 11.8889 4.77778C11.8889 6.25054 13.0828 7.44444 14.5556 7.44444Z" fill="black"/>
    </svg>
  );
};

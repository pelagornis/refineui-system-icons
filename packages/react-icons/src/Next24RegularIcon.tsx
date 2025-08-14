import React from 'react';
import { IconProps } from './types';

export const Next24RegularIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.8383 11.107C17.4577 11.4887 17.4577 12.3567 16.8383 12.7384L5.55857 19.6898C4.88537 20.1047 4 19.6413 4 18.8741V4.97132C4 4.2041 4.88537 3.74072 5.55857 4.1556L16.8383 11.107ZM5.3 6.41875C5.3 6.02745 5.7292 5.78779 6.06232 5.99309L14.9933 11.497C15.3102 11.6923 15.3102 12.1531 14.9933 12.3484L6.06232 17.8523C5.7292 18.0576 5.3 17.818 5.3 17.4267L5.3 6.41875Z" fill="black"/>
<path d="M19.9994 4.99034C19.9994 4.63136 19.7084 4.34034 19.3494 4.34034C18.9904 4.34034 18.6994 4.63136 18.6994 4.99034V19.3502C18.6994 19.7092 18.9904 20.0002 19.3494 20.0002C19.7084 20.0002 19.9994 19.7092 19.9994 19.3502V4.99034Z" fill="black"/>
    </svg>
  );
};

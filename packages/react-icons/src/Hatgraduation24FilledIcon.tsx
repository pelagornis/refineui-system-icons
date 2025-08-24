import React from 'react';
import { IconProps } from './types';

export const Hatgraduation24FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M12.8013 5.14709C12.4517 4.95097 12.0253 4.95097 11.6758 5.14709L4 9.45356V14.6238C4 14.9828 4.29102 15.2738 4.65002 15.2738C5.00903 15.2738 5.30005 14.9828 5.30005 14.6238V11.013L11.6246 15.005C11.9996 15.2417 12.4773 15.2417 12.8523 15.005L19.4641 10.8318C20.2009 10.3667 20.173 9.28299 19.413 8.85661L12.8013 5.14709Z" fill="black"/>
<path d="M12.8169 16.0058L17.4061 13.1091V16.0614C17.4061 16.2934 17.3362 16.5445 17.1659 16.7559C16.4791 17.6083 14.7363 19 12.2031 19C9.6698 19 7.92712 17.6083 7.24036 16.7559C7.06995 16.5445 7 16.2934 7 16.0614V13.1091L11.5892 16.0058C11.9642 16.2425 12.4419 16.2425 12.8169 16.0058Z" fill="black"/>
    </svg>
  );
};

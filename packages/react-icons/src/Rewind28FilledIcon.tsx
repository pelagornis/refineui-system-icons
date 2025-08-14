import React from 'react';
import { IconProps } from './types';

export const Rewind28FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.6447 19.7462C16.6447 20.7099 15.6694 21.3123 14.8892 20.8304L5.58515 15.0842C4.80494 14.6023 4.80494 13.3977 5.58515 12.9158L14.8892 7.16959C15.6694 6.68773 16.6447 7.29006 16.6447 8.25378L16.6447 10.2053C16.6447 10.3017 16.7422 10.3619 16.8203 10.3137L21.9112 7.16959C22.6914 6.68773 23.6667 7.29006 23.6667 8.25378L23.6667 19.7462C23.6667 20.7099 22.6914 21.3123 21.9112 20.8304L16.8203 17.6862C16.7422 17.6381 16.6447 17.6983 16.6447 17.7947L16.6447 19.7462Z" fill="black"/>
    </svg>
  );
};

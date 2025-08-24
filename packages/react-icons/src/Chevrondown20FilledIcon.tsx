import React from 'react';
import { IconProps } from './types';

export const Chevrondown20FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M14.911 6.24399C15.2365 5.91867 15.7639 5.91867 16.0893 6.24399C16.4147 6.56932 16.4147 7.09667 16.0893 7.42197L10.3957 13.1142C9.99293 13.5165 9.34032 13.5165 8.93752 13.1142L3.24392 7.42197L3.18696 7.35852C2.92003 7.03132 2.93886 6.54899 3.24392 6.24399C3.54898 5.939 4.03144 5.92018 4.35872 6.18705L4.42219 6.24399L9.66662 11.4872L14.911 6.24399Z" fill="black"/>
    </svg>
  );
};

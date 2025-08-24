import React from 'react';
import { IconProps } from './types';

export const Parallelogram24FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.21536 6.91614C8.46679 6.36137 9.05638 6 9.71009 6H18.379C19.5345 6 20.3182 7.0807 19.8738 8.06131L15.7846 17.0839C15.5332 17.6386 14.9436 18 14.2899 18H5.62097C4.46548 18 3.68182 16.9193 4.12624 15.9387L8.21536 6.91614Z" fill="black"/>
    </svg>
  );
};

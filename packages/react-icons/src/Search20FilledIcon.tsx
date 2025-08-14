import React from 'react';
import { IconProps } from './types';

export const Search20FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.6775 12.4883C11.6734 12.4914 11.6692 12.4946 11.665 12.4977C10.9688 13.0208 10.1033 13.3308 9.16538 13.3308C6.86491 13.3308 5 11.4659 5 9.16538C5 6.86491 6.86491 5 9.16538 5C11.4659 5 13.3308 6.86491 13.3308 9.16538C13.3308 10.1089 13.0171 10.9791 12.4883 11.6775L15.3131 14.5023C15.5833 14.7726 16.0428 15.3941 15.7185 15.7185C15.3941 16.0428 14.7726 15.5833 14.5023 15.3131L11.6775 12.4883ZM11.6646 9.16538C11.6646 10.5457 10.5457 11.6646 9.16538 11.6646C7.7851 11.6646 6.66615 10.5457 6.66615 9.16538C6.66615 7.7851 7.7851 6.66615 9.16538 6.66615C10.5457 6.66615 11.6646 7.7851 11.6646 9.16538Z" fill="black"/>
    </svg>
  );
};

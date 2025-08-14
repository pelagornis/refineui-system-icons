import React from 'react';
import { IconProps } from './types';

export const Textaligncenter48RegularIcon: React.FC<IconProps> = ({ 
  size = 48, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {{...props}}
    >
      width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.2152 15.3017C13.2152 14.5828 13.7973 14 14.5153 14H33.4844C34.2024 14 34.7845 14.5828 34.7845 15.3017C34.7845 16.0206 34.2024 16.6033 33.4844 16.6033H14.5153C13.7973 16.6033 13.2152 16.0206 13.2152 15.3017Z" fill="black"/>
<path d="M9 24C9 23.2811 9.58205 22.6983 10.3 22.6983H37.7C38.418 22.6983 39 23.2811 39 24C39 24.7189 38.418 25.3017 37.7 25.3017H10.3C9.58205 25.3017 9 24.7189 9 24Z" fill="black"/>
<path d="M18.7307 31.3967C18.0127 31.3967 17.4307 31.9794 17.4307 32.6983C17.4307 33.4172 18.0127 34 18.7307 34H29.2692C29.9872 34 30.5692 33.4172 30.5692 32.6983C30.5692 31.9794 29.9872 31.3967 29.2692 31.3967H18.7307Z" fill="black"/>
    </svg>
  );
};

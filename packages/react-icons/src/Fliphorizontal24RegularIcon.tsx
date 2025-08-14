import React from 'react';
import { IconProps } from './types';

export const Fliphorizontal24RegularIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.8727 12.6809C13.4123 12.2894 13.4123 11.5883 13.8727 11.1968L18.3452 7.39486C18.9929 6.8443 19.9999 7.29589 19.9999 8.13687L19.9999 15.7409C19.9999 16.5818 18.9929 17.0334 18.3452 16.4829L13.8727 12.6809ZM18.6999 15.0963L14.9857 11.9389L18.6999 8.78146L18.6999 15.0963Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.1271 11.1968C10.5875 11.5883 10.5875 12.2894 10.1271 12.6809L5.65459 16.4829C5.00695 17.0334 3.99994 16.5818 3.99994 15.7409L3.99994 8.13687C3.99994 7.29589 5.00695 6.8443 5.65459 7.39486L10.1271 11.1968ZM5.29994 8.78146L9.01415 11.9389L5.29994 15.0963L5.29994 8.78146Z" fill="black"/>
<path d="M11.3499 19.362C11.3499 19.7143 11.6409 20 11.9999 20C12.3589 20 12.6499 19.7143 12.6499 19.362L12.6499 4.63804C12.6499 4.28566 12.3589 4 11.9999 4C11.6409 4 11.3499 4.28566 11.3499 4.63804L11.3499 19.362Z" fill="black"/>
    </svg>
  );
};

import React from 'react';
import { IconProps } from './types';

export const Usbcable28FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M11.5 5.65039H16.167C16.4522 5.65057 16.6836 5.88175 16.6836 6.16699V10.3164H17.333C18.2627 10.3164 19.0166 11.0703 19.0166 12V17.833C19.0166 18.7627 18.2627 19.5166 17.333 19.5166H10.333C9.40348 19.5164 8.65039 18.7626 8.65039 17.833V12C8.65039 11.0704 9.40348 10.3166 10.333 10.3164H10.9834V6.16699C10.9834 5.88164 11.2147 5.65039 11.5 5.65039ZM11.2002 10.3047H16.4668V5.86621H11.2002V10.3047Z" fill="black" stroke="black" stroke-width="1.3"/>
    </svg>
  );
};

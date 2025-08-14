import React from 'react';
import { IconProps } from './types';

export const Zoomout24FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.0155 14.9887L13.0005 15C12.1647 15.6279 11.1258 16 10 16C7.23858 16 5 13.7614 5 11C5 8.23858 7.23858 6 10 6C12.7614 6 15 8.23858 15 11C15 12.1326 14.6234 13.1772 13.9887 14.0155L17.3795 17.4063C17.4563 17.483 17.5458 17.5834 17.6325 17.6971L17.6426 17.7105C17.9182 18.076 18.1597 18.5725 17.8661 18.8661C17.5725 19.1597 17.076 18.9182 16.7105 18.6426L16.6971 18.6325C16.5834 18.5458 16.483 18.4563 16.4063 18.3795L13.0155 14.9887ZM8.15031 10.5C8.06731 10.5 8.00002 10.7239 8.00002 11C8.00002 11.2761 8.06731 11.5 8.15031 11.5H11.8497C11.9327 11.5 12 11.2761 12 11C12 10.7239 11.9327 10.5 11.8497 10.5H8.15031Z" fill="black"/>
    </svg>
  );
};

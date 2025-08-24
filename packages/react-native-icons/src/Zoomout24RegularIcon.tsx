import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Zoomout24RegularIcon: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <Svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 24 24"
      fill="none"
      {{...props}}
    >
      width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.15031 10.5C8.06731 10.5 8.00002 10.7239 8.00002 11C8.00002 11.2761 8.06731 11.5 8.15031 11.5H11.8497C11.9327 11.5 12 11.2761 12 11C12 10.7239 11.9327 10.5 11.8497 10.5H8.15031Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.0005 15L13.0155 14.9887L16.4063 18.3795C16.483 18.4563 16.5834 18.5458 16.6971 18.6325L16.7105 18.6426C17.076 18.9182 17.5725 19.1597 17.8661 18.8661C18.1597 18.5725 17.9182 18.076 17.6426 17.7105L17.6325 17.6971C17.5458 17.5834 17.4563 17.483 17.3795 17.4063L13.9887 14.0155C14.6234 13.1772 15 12.1326 15 11C15 8.23858 12.7614 6 10 6C7.23858 6 5 8.23858 5 11C5 13.7614 7.23858 16 10 16C11.1258 16 12.1647 15.6279 13.0005 15ZM6.3 11C6.3 13.0435 7.95655 14.7 10 14.7C10.8346 14.7 11.6013 14.4252 12.2196 13.9607C13.121 13.2834 13.7 12.2095 13.7 11C13.7 8.95655 12.0435 7.3 10 7.3C7.95655 7.3 6.3 8.95655 6.3 11Z" fill="black"/>
    </Svg>
  );
};

import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Sim20RegularIcon: React.FC<IconProps> = ({ 
  size = 20, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <Svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 20 20"
      fill="none"
      {{...props}}
    >
      width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.95833 9.66667C6.95833 8.90728 7.57394 8.29167 8.33333 8.29167H11.6667C12.4261 8.29167 13.0417 8.90728 13.0417 9.66667V13C13.0417 13.7594 12.4261 14.375 11.6667 14.375H8.33333C7.57394 14.375 6.95833 13.7594 6.95833 13V9.66667ZM10.5417 13.2917H11.6667C11.8278 13.2917 11.9583 13.1611 11.9583 13V11.875H10.5417V13.2917ZM11.9583 10.7917V9.66667C11.9583 9.50558 11.8278 9.375 11.6667 9.375H10.5417V10.7917H11.9583ZM9.45833 9.375V13.2917H8.33333C8.17225 13.2917 8.04167 13.1611 8.04167 13V9.66667C8.04167 9.50558 8.17225 9.375 8.33333 9.375H9.45833Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.7559 6.92259C14.9122 7.07887 15 7.29083 15 7.51184V15.5C15 15.9602 14.6269 16.3333 14.1667 16.3333H5.83333C5.3731 16.3333 5 15.9602 5 15.5V3.83333C5 3.3731 5.3731 3 5.83333 3H10.4882C10.7092 3 10.9211 3.0878 11.0774 3.24408L14.7559 6.92259ZM13.9167 7.6154L10.3846 4.08333H6.08333V15.25H13.9167V7.6154Z" fill="black"/>
    </Svg>
  );
};

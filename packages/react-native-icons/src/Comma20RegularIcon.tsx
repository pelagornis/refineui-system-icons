import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Comma20RegularIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M6 7.05699C6 4.81638 7.86288 3 10.1609 3C12.4543 3 14.3144 4.80925 14.3217 7.0438C14.3973 8.7075 14.1212 11.0001 13.0031 12.9011C11.9288 14.7277 10.0885 16.1645 7.16312 16.3324C6.84245 16.3508 6.58162 16.0949 6.58162 15.7817C6.58162 15.4685 6.84295 15.2169 7.16345 15.1959C9.63003 15.0342 11.1099 13.8401 11.994 12.3369C12.3965 11.6525 12.6775 10.8988 12.8636 10.1416C12.1365 10.7479 11.1925 11.114 10.1609 11.114C7.86288 11.114 6 9.29761 6 7.05699Z" fill="black"/>
    </Svg>
  );
};

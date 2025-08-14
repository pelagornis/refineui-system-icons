import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Bluetooth28RegularIcon: React.FC<IconProps> = ({ 
  size = 28, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <Svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 28 28"
      fill="none"
      {{...props}}
    >
      width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.7081 5.03819C13.9866 4.94047 14.2952 5.03447 14.476 5.27214L18.1881 10.1516C18.414 10.4485 18.372 10.8746 18.0926 11.1194L14.6212 14.1614V14.5974L18.0926 17.6394C18.3738 17.8859 18.4143 18.3156 18.1842 18.6124L14.472 23.3997C14.2898 23.6347 13.9821 23.7261 13.7051 23.6274C13.428 23.5288 13.2424 23.2617 13.2424 22.9618V16.081L10.1769 19.2151C9.90765 19.4903 9.47115 19.4903 9.20193 19.2151C8.9327 18.9398 8.9327 18.4936 9.20193 18.2183L13.2061 14.1246L9.23543 10.5725C8.9489 10.3162 8.91986 9.87095 9.17058 9.57801C9.4213 9.28506 9.85683 9.25538 10.1434 9.51171L13.2424 12.284V5.70485C13.2424 5.40375 13.4295 5.13591 13.7081 5.03819ZM14.6212 12.3048L16.6962 10.4865L14.6212 7.75904V12.3048ZM14.6212 16.454V20.9382L16.6915 18.2682L14.6212 16.454Z" fill="black"/>
    </Svg>
  );
};

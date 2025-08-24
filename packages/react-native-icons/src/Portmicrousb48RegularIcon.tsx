import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Portmicrousb48RegularIcon: React.FC<IconProps> = ({ 
  size = 48, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <Svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 48 48"
      fill="none"
      {{...props}}
    >
      width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.2694 18.717C15.6704 18.265 16.2466 18 16.8592 18H31.1409C31.7534 18 32.3296 18.265 32.7306 18.717L37.0201 23.5515C39.1839 25.9902 37.5527 30.0042 34.1955 30.0042H13.8045C10.4473 30.0042 8.81609 25.9902 10.9799 23.5515L15.2694 18.717ZM17.9735 20.5997C17.4017 20.5997 16.8572 20.8445 16.4777 21.2722L12.9245 25.2768C12.1645 26.1333 12.8152 27.4045 13.8045 27.4045H34.1955C35.1848 27.4045 35.8355 26.1333 35.0755 25.2768L31.5223 21.2722C31.1428 20.8445 30.5983 20.5997 30.0265 20.5997H17.9735Z" fill="black"/>
    </Svg>
  );
};

import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Porthdmi48FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.9642 17.6486C15.3933 17.2326 15.9674 17 16.5651 17H31.4349C32.0326 17 32.6067 17.2326 33.0358 17.6486L39.3011 23.7233C39.7479 24.1565 40 24.7522 40 25.3744V28.7022C40 29.9723 38.9704 31.002 37.7003 31.002H10.2997C9.02962 31.002 8 29.9723 8 28.7022V25.3744C8 24.7522 8.25215 24.1565 8.69889 23.7233L14.9642 17.6486ZM17.14 22.7012C16.4221 22.7012 15.8401 23.2831 15.8401 24.001C15.8401 24.7189 16.4221 25.3008 17.14 25.3008H30.8601C31.578 25.3008 32.16 24.7189 32.16 24.001C32.16 23.2831 31.578 22.7012 30.8601 22.7012H17.14Z" fill="black"/>
    </Svg>
  );
};

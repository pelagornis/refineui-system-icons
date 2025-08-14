import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Bluetooth24FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.9372 4.04839C12.2775 3.92457 12.6544 4.04368 12.8752 4.34484L15.8226 8.36379C16.0986 8.7401 16.0472 9.27994 15.7059 9.59019L13.0526 12.0022V12.0737L15.7059 14.4857C16.0495 14.798 16.0989 15.3425 15.8178 15.7186L12.8704 19.6617C12.6478 19.9595 12.2719 20.0752 11.9335 19.9503C11.5952 19.8253 11.3684 19.4869 11.3684 19.1068V14.1941L9.43757 16.2419C9.10871 16.5906 8.57552 16.5906 8.24666 16.2419C7.9178 15.8931 7.9178 15.3276 8.24666 14.9788L11.2032 11.8433L8.28759 9.13768C7.93758 8.81287 7.90211 8.24864 8.20837 7.87744C8.51462 7.50623 9.04663 7.46862 9.39664 7.79342L11.3684 9.62321V4.89315C11.3684 4.51162 11.5969 4.17222 11.9372 4.04839ZM13.0526 14.4263V16.5426L13.9945 15.2825L13.0526 14.4263ZM13.0526 9.6496L14.0002 8.78821L13.0526 7.49612V9.6496Z" fill="black"/>
    </Svg>
  );
};

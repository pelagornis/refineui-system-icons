import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Toolbox48FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M40 27.6H31.3V28.3C31.3 29.018 30.718 29.6 30 29.6C29.282 29.6 28.7 29.018 28.7 28.3V27.6H19.3V28.3C19.3 29.018 18.718 29.6 18 29.6C17.282 29.6 16.7 29.018 16.7 28.3V27.6H8V35.3C8 36.4046 8.89543 37.3 10 37.3H38C39.1046 37.3 40 36.4046 40 35.3V27.6Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.7 16.3H13.8284C13.298 16.3 12.7893 16.5107 12.4142 16.8858L8.58579 20.7142C8.21071 21.0893 8 21.598 8 22.1284V25H16.7V24.3C16.7 23.582 17.282 23 18 23C18.718 23 19.3 23.582 19.3 24.3V25H28.7V24.3C28.7 23.582 29.282 23 30 23C30.718 23 31.3 23.582 31.3 24.3V25H40V22.1284C40 21.598 39.7893 21.0893 39.4142 20.7142L35.5858 16.8858C35.2107 16.5107 34.702 16.3 34.1716 16.3H30.3V13C30.3 11.8954 29.4046 11 28.3 11H19.7C18.5954 11 17.7 11.8954 17.7 13V16.3ZM27.7 14.6V16.3H20.3V14.6C20.3 14.0477 20.7477 13.6 21.3 13.6H26.7C27.2523 13.6 27.7 14.0477 27.7 14.6Z" fill="black"/>
    </Svg>
  );
};

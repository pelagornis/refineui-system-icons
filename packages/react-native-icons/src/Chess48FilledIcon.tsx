import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Chess48FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M32.1276 10.4596L31.3397 16.361H16.6603L15.8724 10.4596C15.6595 8.86546 17.4847 7.81371 18.7573 8.79716L20.876 10.4346L22.7083 8.54643C23.4153 7.81786 24.5847 7.81786 25.2917 8.54643L27.124 10.4346L29.2427 8.7971C30.5153 7.81371 32.3405 8.86546 32.1276 10.4596Z" fill="black"/>
<path d="M15.9054 29.6926C16.5143 26.9762 16.6865 24.9037 16.6992 23.1398H31.3008C31.3135 24.9037 31.4857 26.9762 32.0946 29.6926C34.26 29.7428 36 31.514 36 33.6915V37.9962C36 39.1008 35.1046 39.9962 34 39.9962H14C12.8954 39.9962 12 39.1008 12 37.9962V33.6915C12 31.514 13.74 29.7428 15.9054 29.6926Z" fill="black"/>
<path d="M16 17.7C14.8954 17.7 14 18.5954 14 19.7C14 20.8046 14.8954 21.7 16 21.7H32C33.1046 21.7 34 20.8046 34 19.7C34 18.5954 33.1046 17.7 32 17.7H16Z" fill="black"/>
    </Svg>
  );
};

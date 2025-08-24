import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Pipeline48FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M12 12C9.79086 12 8 13.7909 8 16V32C8 34.2091 9.79086 36 12 36C14.2091 36 16 34.2091 16 32V16C16 13.7909 14.2091 12 12 12Z" fill="black"/>
<path d="M19.1 16.7C18.8239 16.7 18.6 16.9239 18.6 17.2V30.8C18.6 31.0761 18.8239 31.3 19.1 31.3H28.9C29.1761 31.3 29.4 31.0761 29.4 30.8V17.2C29.4 16.9239 29.1761 16.7 28.9 16.7H19.1Z" fill="black"/>
<path d="M32 16V32C32 34.2091 33.7909 36 36 36C38.2091 36 40 34.2091 40 32V16C40 13.7909 38.2091 12 36 12C33.7909 12 32 13.7909 32 16Z" fill="black"/>
    </Svg>
  );
};

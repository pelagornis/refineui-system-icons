import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const News48RegularIcon: React.FC<IconProps> = ({ 
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
<path d="M14 19C14 17.8954 14.8954 17 16 17H20C21.1046 17 22 17.8954 22 19V24C22 25.1046 21.1046 26 20 26H16C14.8954 26 14 25.1046 14 24V19Z" fill="black"/>
<path d="M25 17.7C24.282 17.7 23.7 18.282 23.7 19C23.7 19.718 24.282 20.3 25 20.3H33C33.718 20.3 34.3 19.718 34.3 19C34.3 18.282 33.718 17.7 33 17.7H25Z" fill="black"/>
<path d="M23.7 24C23.7 23.282 24.282 22.7 25 22.7H33C33.718 22.7 34.3 23.282 34.3 24C34.3 24.718 33.718 25.3 33 25.3H25C24.282 25.3 23.7 24.718 23.7 24Z" fill="black"/>
<path d="M15 28.7C14.282 28.7 13.7 29.282 13.7 30C13.7 30.718 14.282 31.3 15 31.3H33C33.718 31.3 34.3 30.718 34.3 30C34.3 29.282 33.718 28.7 33 28.7H15Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 10C9.79086 10 8 11.7909 8 14V34C8 36.2091 9.79086 38 12 38H36C38.2091 38 40 36.2091 40 34V14C40 11.7909 38.2091 10 36 10H12ZM36 12.6H12C11.2268 12.6 10.6 13.2268 10.6 14V34C10.6 34.7732 11.2268 35.4 12 35.4H36C36.7732 35.4 37.4 34.7732 37.4 34V14C37.4 13.2268 36.7732 12.6 36 12.6Z" fill="black"/>
    </Svg>
  );
};

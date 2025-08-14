import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Ioschevronrtl48RegularIcon: React.FC<IconProps> = ({ 
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
<path d="M27.9484 31.6718C27.4003 31.195 27.3509 30.3735 27.838 29.837L32.5348 24.6641C32.8787 24.2854 32.8787 23.7146 32.5348 23.3359L27.838 18.1629C27.3509 17.6265 27.4003 16.805 27.9484 16.3282C28.4964 15.8514 29.3355 15.8998 29.8226 16.4363L35.4842 22.6718C36.1719 23.4293 36.1719 24.5707 35.4842 25.3282L29.8226 31.5637C29.3355 32.1002 28.4964 32.1486 27.9484 31.6718Z" fill="black"/>
    </Svg>
  );
};

import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Ioschevronltr48RegularIcon: React.FC<IconProps> = ({ 
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
<path d="M20.0516 16.3282C20.5997 16.805 20.6491 17.6265 20.162 18.163L15.4652 23.3359C15.1213 23.7146 15.1213 24.2854 15.4652 24.6641L20.162 29.8371C20.6491 30.3735 20.5997 31.195 20.0516 31.6718C19.5036 32.1486 18.6645 32.1002 18.1774 31.5637L12.5158 25.3282C11.8281 24.5707 11.8281 23.4293 12.5158 22.6718L18.1774 16.4363C18.6645 15.8998 19.5036 15.8514 20.0516 16.3282Z" fill="black"/>
    </Svg>
  );
};

import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Emojisurprise32FilledIcon: React.FC<IconProps> = ({ 
  size = 32, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <Svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 32 32"
      fill="none"
      {{...props}}
    >
      width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.6667 26.33C21.5577 26.33 26.3333 21.5551 26.3333 15.665C26.3333 9.77488 21.5577 5 15.6667 5C9.77563 5 5 9.77488 5 15.665C5 21.5551 9.77563 26.33 15.6667 26.33ZM11.6667 15.665C12.403 15.665 13 15.0681 13 14.3319C13 13.5956 12.403 12.9987 11.6667 12.9987C10.9303 12.9987 10.3333 13.5956 10.3333 14.3319C10.3333 15.0681 10.9303 15.665 11.6667 15.665ZM21 14.3319C21 15.0681 20.403 15.665 19.6667 15.665C18.9303 15.665 18.3333 15.0681 18.3333 14.3319C18.3333 13.5956 18.9303 12.9987 19.6667 12.9987C20.403 12.9987 21 13.5956 21 14.3319ZM15.6667 22.3306C17.1394 22.3306 18.3333 21.1369 18.3333 19.6644C18.3333 18.1918 17.1394 16.9981 15.6667 16.9981C14.1939 16.9981 13 18.1918 13 19.6644C13 21.1369 14.1939 22.3306 15.6667 22.3306Z" fill="black"/>
    </Svg>
  );
};

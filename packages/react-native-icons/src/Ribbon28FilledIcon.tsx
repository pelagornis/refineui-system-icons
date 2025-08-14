import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Ribbon28FilledIcon: React.FC<IconProps> = ({ 
  size = 28, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <Svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 28 28"
      fill="none"
      {{...props}}
    >
      width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14 19.0686C17.866 19.0686 21 15.9193 21 12.0343C21 8.14938 17.866 5 14 5C10.134 5 7 8.14938 7 12.0343C7 15.9193 10.134 19.0686 14 19.0686Z" fill="black"/>
<path d="M10.1647 19.0774C9.96776 18.9892 9.74164 19.1308 9.74164 19.3466V22.6097C9.74164 23.4525 10.6763 23.9552 11.3741 23.4877L14 21.7285L16.6259 23.4877C17.3237 23.9552 18.2583 23.4525 18.2583 22.6097V19.3841C18.2583 19.1596 18.0131 19.0154 17.8096 19.1103C16.9108 19.5296 15.4716 19.9798 14 19.9798C12.4899 19.9798 11.1205 19.5057 10.1647 19.0774Z" fill="black"/>
    </Svg>
  );
};

import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Textboxalignmiddle48FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 8C9.79086 8 8 9.79086 8 12V36C8 38.2091 9.79086 40 12 40H36C38.2091 40 40 38.2091 40 36V12C40 9.79086 38.2091 8 36 8H12ZM15.5 19.2C14.782 19.2 14.2 19.782 14.2 20.5C14.2 21.218 14.782 21.8 15.5 21.8H32.5C33.218 21.8 33.8 21.218 33.8 20.5C33.8 19.782 33.218 19.2 32.5 19.2H15.5ZM15.5 26.2C14.782 26.2 14.2 26.782 14.2 27.5C14.2 28.218 14.782 28.8 15.5 28.8H32.5C33.218 28.8 33.8 28.218 33.8 27.5C33.8 26.782 33.218 26.2 32.5 26.2H15.5Z" fill="black"/>
    </Svg>
  );
};

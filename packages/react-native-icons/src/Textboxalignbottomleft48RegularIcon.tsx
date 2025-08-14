import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Textboxalignbottomleft48RegularIcon: React.FC<IconProps> = ({ 
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
<path d="M13.7 24C13.7 23.282 14.282 22.7 15 22.7H32C32.718 22.7 33.3 23.282 33.3 24C33.3 24.718 32.718 25.3 32 25.3H15C14.282 25.3 13.7 24.718 13.7 24Z" fill="black"/>
<path d="M15 29.7C14.282 29.7 13.7 30.282 13.7 31C13.7 31.718 14.282 32.3 15 32.3H27C27.718 32.3 28.3 31.718 28.3 31C28.3 30.282 27.718 29.7 27 29.7H15Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 8C9.79086 8 8 9.79086 8 12V36C8 38.2091 9.79086 40 12 40H36C38.2091 40 40 38.2091 40 36V12C40 9.79086 38.2091 8 36 8H12ZM36 10.6H12C11.2268 10.6 10.6 11.2268 10.6 12V36C10.6 36.7732 11.2268 37.4 12 37.4H36C36.7732 37.4 37.4 36.7732 37.4 36V12C37.4 11.2268 36.7732 10.6 36 10.6Z" fill="black"/>
    </Svg>
  );
};

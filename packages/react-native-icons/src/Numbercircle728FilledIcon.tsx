import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Numbercircle728FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.3333 23.6667C19.488 23.6667 23.6667 19.488 23.6667 14.3333C23.6667 9.17868 19.488 5 14.3333 5C9.17868 5 5 9.17868 5 14.3333C5 19.488 9.17868 23.6667 14.3333 23.6667ZM12.5833 10.075C12.1645 10.075 11.825 10.4145 11.825 10.8333C11.825 11.2521 12.1645 11.5917 12.5833 11.5917H15.1631C14.8783 12.5442 14.5432 13.7045 14.2601 14.768C14.087 15.418 13.9317 16.0385 13.819 16.5561C13.7121 17.0474 13.6263 17.5201 13.6263 17.8333C13.6263 18.2521 13.9658 18.5917 14.3846 18.5917C14.8034 18.5917 15.1429 18.2521 15.1429 17.8333C15.1429 17.7081 15.1896 17.3905 15.301 16.8787C15.4066 16.3932 15.5554 15.7978 15.7257 15.1582C16.0659 13.8802 16.4847 12.4525 16.7962 11.4296C17.0102 10.7269 16.4629 10.075 15.7824 10.075H12.5833Z" fill="black"/>
    </Svg>
  );
};

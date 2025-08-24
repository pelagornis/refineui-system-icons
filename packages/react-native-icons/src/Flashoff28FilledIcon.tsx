import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Flashoff28FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M4.29452 4.2221C3.99838 3.92596 3.51824 3.92597 3.2221 4.22211C2.92596 4.51825 2.92597 4.99838 3.22211 5.29452L22.7055 24.7779C23.0016 25.074 23.4818 25.074 23.7779 24.7779C24.074 24.4817 24.074 24.0016 23.7779 23.7055L4.29452 4.2221Z" fill="black"/>
<path d="M5.41946 13.4907L6.84191 10.1752L15.1468 18.4801L10.1016 23.5199C9.37139 24.2494 8.13721 23.5978 8.32762 22.5834L9.75954 14.9546H6.38438C5.63041 14.9546 5.12219 14.1836 5.41946 13.4907Z" fill="black"/>
<path d="M8.24292 6.90965L17.4813 16.1481L21.3568 12.2768C22.0188 11.6155 21.5505 10.4839 20.6148 10.4839H16.4574L17.7705 6.54896C17.9974 5.86901 17.4913 5.16664 16.7745 5.16664H9.68278C9.26291 5.16664 8.88341 5.41677 8.71787 5.80263L8.24292 6.90965Z" fill="black"/>
    </Svg>
  );
};

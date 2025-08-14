import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Previewlink48RegularIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M14 16C12.8954 16 12 16.8954 12 18V22C12 23.1046 12.8954 24 14 24H34C35.1046 24 36 23.1046 36 22V18C36 16.8954 35.1046 16 34 16H14ZM15.1 18.6C14.8239 18.6 14.6 18.8239 14.6 19.1V20.9C14.6 21.1761 14.8239 21.4 15.1 21.4H32.9C33.1761 21.4 33.4 21.1761 33.4 20.9V19.1C33.4 18.8239 33.1761 18.6 32.9 18.6H15.1Z" fill="black"/>
<path d="M12 27C12 27.718 12.582 28.3 13.3 28.3H21.7C22.418 28.3 23 27.718 23 27C23 26.282 22.418 25.7 21.7 25.7H13.3C12.582 25.7 12 26.282 12 27Z" fill="black"/>
<path d="M23 31C23 31.718 22.418 32.3 21.7 32.3H13.3C12.582 32.3 12 31.718 12 31C12 30.282 12.582 29.7 13.3 29.7H21.7C22.418 29.7 23 30.282 23 31Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M24 27.5C24 26.3954 24.8954 25.5 26 25.5H34C35.1046 25.5 36 26.3954 36 27.5V30.5C36 31.6046 35.1046 32.5 34 32.5H26C24.8954 32.5 24 31.6046 24 30.5V27.5ZM27.1 29.9C26.8239 29.9 26.6 29.6761 26.6 29.4V28.6C26.6 28.3239 26.8239 28.1 27.1 28.1H32.9C33.1761 28.1 33.4 28.3239 33.4 28.6V29.4C33.4 29.6761 33.1761 29.9 32.9 29.9H27.1Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 12C9.79086 12 8 13.7909 8 16V32C8 34.2091 9.79086 36 12 36H36C38.2091 36 40 34.2091 40 32V16C40 13.7909 38.2091 12 36 12H12ZM36 14.6H12C11.2268 14.6 10.6 15.2268 10.6 16V32C10.6 32.7732 11.2268 33.4 12 33.4H36C36.7732 33.4 37.4 32.7732 37.4 32V16C37.4 15.2268 36.7732 14.6 36 14.6Z" fill="black"/>
    </Svg>
  );
};

import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Keyboardbackspace32RegularIcon: React.FC<IconProps> = ({ 
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
<path d="M13.1225 9.2937C13.4493 9.6527 13.4134 10.2001 13.0424 10.5163L8.01835 14.7988H25.4382C25.9326 14.7988 26.3333 15.1866 26.3333 15.665C26.3333 16.1434 25.9326 16.5312 25.4382 16.5312H8.01835L13.0424 20.8137C13.4134 21.1299 13.4493 21.6773 13.1225 22.0363C12.7958 22.3953 12.2302 22.43 11.8592 22.1138L5.46688 16.6651C4.84437 16.1344 4.84437 15.1956 5.46688 14.6649L11.8592 9.21621C12.2302 8.9 12.7958 8.93469 13.1225 9.2937Z" fill="black"/>
    </Svg>
  );
};

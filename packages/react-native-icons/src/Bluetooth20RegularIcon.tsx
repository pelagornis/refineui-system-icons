import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Bluetooth20RegularIcon: React.FC<IconProps> = ({ 
  size = 20, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <Svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 20 20"
      fill="none"
      {{...props}}
    >
      width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.3629 3.02728C10.5619 2.95748 10.7823 3.02462 10.9114 3.19439L13.5629 6.6797C13.7243 6.89182 13.6943 7.19613 13.4947 7.37101L11.0151 9.54386V9.85528L13.4947 12.0281C13.6956 12.2042 13.7245 12.5111 13.5601 12.7231L10.9086 16.1426C10.7784 16.3105 10.5586 16.3758 10.3608 16.3053C10.1629 16.2348 10.0303 16.0441 10.0303 15.8299V10.915L7.84062 13.1536C7.64832 13.3502 7.33654 13.3502 7.14423 13.1536C6.95193 12.957 6.95193 12.6383 7.14423 12.4416L10.0044 9.51756L7.16817 6.98039C6.9635 6.7973 6.94276 6.47925 7.12184 6.27001C7.30093 6.06076 7.61202 6.03956 7.81669 6.22265L10.0303 8.20287V3.50346C10.0303 3.28839 10.1639 3.09708 10.3629 3.02728ZM11.0151 8.21774L12.4973 6.91894L11.0151 4.97074V8.21774ZM11.0151 11.1814V14.3844L12.494 12.4773L11.0151 11.1814Z" fill="black"/>
    </Svg>
  );
};

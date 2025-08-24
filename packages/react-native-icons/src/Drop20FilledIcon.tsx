import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Drop20FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M10 16.3333C12.7614 16.3333 15 13.6958 15 10.4422C15 7.64152 11.2953 4.0502 10.2638 3.10449C10.1118 2.96517 9.8882 2.96517 9.73624 3.10449C8.70467 4.0502 5 7.64152 5 10.4422C5 13.6958 7.23858 16.3333 10 16.3333ZM13.0417 11.2024C13.0417 10.9033 12.7992 10.6607 12.5 10.6607C12.2008 10.6607 11.9583 10.9033 11.9583 11.2024C11.9583 11.5324 11.8549 12.0394 11.5604 12.4484C11.2858 12.8298 10.8235 13.1607 10 13.1607C9.70085 13.1607 9.45833 13.4033 9.45833 13.7024C9.45833 14.0016 9.70085 14.2441 10 14.2441C11.1765 14.2441 11.9642 13.7417 12.4396 13.0814C12.8951 12.4487 13.0417 11.7058 13.0417 11.2024Z" fill="black"/>
    </Svg>
  );
};

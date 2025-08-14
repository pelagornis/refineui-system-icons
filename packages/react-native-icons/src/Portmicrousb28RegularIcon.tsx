import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Portmicrousb28RegularIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.07384 11.4182C9.30776 11.1546 9.64387 11 10.0012 11H18.3322C18.6895 11 19.0256 11.1546 19.2595 11.4182L21.7617 14.2384C23.0239 15.6609 22.0724 18.0024 20.114 18.0024H8.21929C6.26092 18.0024 5.30939 15.6609 6.57161 14.2384L9.07384 11.4182ZM10.6512 12.5165C10.3177 12.5165 10 12.6593 9.77866 12.9088L7.70594 15.2448C7.26263 15.7444 7.64221 16.486 8.21929 16.486H20.114C20.6911 16.486 21.0707 15.7444 20.6274 15.2448L18.5547 12.9088C18.3333 12.6593 18.0157 12.5165 17.6821 12.5165H10.6512Z" fill="black"/>
    </Svg>
  );
};

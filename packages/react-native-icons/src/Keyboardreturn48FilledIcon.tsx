import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Keyboardreturn48FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M21.2114 14.6926C21.9581 15.5284 21.8627 16.7912 20.9983 17.5132L15.6263 22.0002H35.8636V16.7998C35.8636 15.6954 36.7896 14.8001 37.9318 14.8001C39.074 14.8001 40 15.6954 40 16.7998V24C40 25.1045 39.074 25.9998 37.9318 25.9998H15.6263L20.9983 30.4868C21.8627 31.2088 21.9581 32.4716 21.2114 33.3074C20.4647 34.1432 19.1587 34.2355 18.2943 33.5135L8.71621 25.5133C7.76126 24.7157 7.76126 23.2843 8.71621 22.4867L18.2943 14.4865C19.1587 13.7645 20.4647 13.8568 21.2114 14.6926Z" fill="black"/>
    </Svg>
  );
};

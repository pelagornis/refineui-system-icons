import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Textalignjustify20RegularIcon: React.FC<IconProps> = ({ 
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
<path d="M4 6.54154C4 6.24246 4.24252 6 4.54168 6H15.9583C16.2575 6 16.5 6.24246 16.5 6.54154C16.5 6.84062 16.2575 7.08308 15.9583 7.08308H4.54168C4.24252 7.08308 4 6.84062 4 6.54154Z" fill="black"/>
<path d="M4 10.165C4 9.86592 4.24252 9.62346 4.54168 9.62346H15.9583C16.2575 9.62346 16.5 9.86592 16.5 10.165C16.5 10.4641 16.2575 10.7065 15.9583 10.7065H4.54168C4.24252 10.7065 4 10.4641 4 10.165Z" fill="black"/>
<path d="M4.54168 13.2469C4.24252 13.2469 4 13.4894 4 13.7885C4 14.0875 4.24252 14.33 4.54168 14.33H15.9583C16.2575 14.33 16.5 14.0875 16.5 13.7885C16.5 13.4894 16.2575 13.2469 15.9583 13.2469H4.54168Z" fill="black"/>
    </Svg>
  );
};

import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Textalignright20RegularIcon: React.FC<IconProps> = ({ 
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
<path d="M6.51279 6.54133C6.51279 6.24236 6.75531 6 7.05448 6H14.9583C15.2575 6 15.5 6.24236 15.5 6.54133C15.5 6.84029 15.2575 7.08266 14.9583 7.08266H7.05448C6.75531 7.08266 6.51279 6.84029 6.51279 6.54133Z" fill="black"/>
<path d="M3 10.165C3 9.86606 3.24252 9.6237 3.54168 9.6237H14.9583C15.2575 9.6237 15.5 9.86606 15.5 10.165C15.5 10.464 15.2575 10.7064 14.9583 10.7064H3.54168C3.24252 10.7064 3 10.464 3 10.165Z" fill="black"/>
<path d="M10.5673 13.2473C10.2681 13.2473 10.0256 13.4897 10.0256 13.7887C10.0256 14.0876 10.2681 14.33 10.5673 14.33H14.9583C15.2574 14.33 15.5 14.0876 15.5 13.7887C15.5 13.4897 15.2574 13.2473 14.9583 13.2473H10.5673Z" fill="black"/>
    </Svg>
  );
};

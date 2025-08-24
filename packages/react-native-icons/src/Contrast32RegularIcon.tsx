import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Contrast32RegularIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.6667 26.33C9.78398 26.33 5.01354 21.5686 5.00003 15.69C5.00001 15.6817 5 15.6733 5 15.665C5 15.6567 5.00001 15.6483 5.00003 15.64C5.00673 12.7252 6.1829 10.0851 8.08427 8.16383C8.09754 8.15042 8.11085 8.13705 8.12419 8.12371C8.13754 8.11036 8.15092 8.09706 8.16433 8.08379C10.0859 6.18272 12.7264 5.00673 15.6416 5.00003C15.65 5.00001 15.6583 5 15.6667 5C21.5577 5 26.3333 9.77488 26.3333 15.665C26.3333 21.5551 21.5577 26.33 15.6667 26.33ZM15.6667 24.5969V6.73306C20.6004 6.73306 24.6 10.732 24.6 15.665C24.6 20.598 20.6004 24.5969 15.6667 24.5969Z" fill="black"/>
    </Svg>
  );
};

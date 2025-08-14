import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Checkmark20RegularIcon: React.FC<IconProps> = ({ 
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
<path d="M16.1866 5.14683C16.3822 5.3426 16.3822 5.66 16.1866 5.85577L8.25374 13.794C7.75712 14.2909 6.95194 14.2909 6.45532 13.794L3.14673 10.4831C2.95109 10.2874 2.95109 9.96997 3.14673 9.7742C3.34237 9.57843 3.65956 9.57843 3.8552 9.7742L7.16379 13.085C7.26913 13.1904 7.43993 13.1904 7.54527 13.085L15.4781 5.14683C15.6738 4.95106 15.991 4.95106 16.1866 5.14683Z" fill="black"/>
    </Svg>
  );
};

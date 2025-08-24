import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Star48FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.9378 5.26411C18.7875 3.57863 21.2125 3.57863 22.0622 5.26411L25.3029 11.6929C25.5963 12.2748 26.1256 12.7052 26.7585 12.8764L34.2998 14.9164C36.0741 15.3963 36.5954 17.6424 35.2114 18.8436L30.1896 23.2019C29.5883 23.7237 29.3023 24.5172 29.4336 25.2988L30.7835 33.3325C31.0933 35.1761 29.1636 36.5897 27.4783 35.7539L21.0311 32.5565C20.382 32.2346 19.618 32.2346 18.9689 32.5565L12.5217 35.7538C10.8364 36.5897 8.90667 35.1761 9.21645 33.3325L10.5664 25.2988C10.6977 24.5172 10.4117 23.7237 9.81042 23.2019L4.7886 18.8436C3.40456 17.6424 3.92593 15.3963 5.70019 14.9164L13.2415 12.8764C13.8744 12.7052 14.4037 12.2748 14.6971 11.6929L17.9378 5.26411Z" fill="black"/>
    </Svg>
  );
};

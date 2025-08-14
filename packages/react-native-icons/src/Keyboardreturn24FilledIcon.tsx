import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Keyboardreturn24FilledIcon: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <Svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 24 24"
      fill="none"
      {{...props}}
    >
      width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.6057 7.34628C10.9791 7.76418 10.9313 8.39559 10.4992 8.75659L7.81313 11.0001H17.9318V8.39992C17.9318 7.84769 18.3948 7.40003 18.9659 7.40003C19.537 7.40003 20 7.84769 20 8.39992V12C20 12.5522 19.537 12.9999 18.9659 12.9999H7.81313L10.4992 15.2434C10.9313 15.6044 10.9791 16.2358 10.6057 16.6537C10.2324 17.0716 9.57936 17.1178 9.14716 16.7568L4.35811 12.7567C3.88063 12.3579 3.88063 11.6421 4.35811 11.2433L9.14716 7.24324C9.57936 6.88225 10.2324 6.92838 10.6057 7.34628Z" fill="black"/>
    </Svg>
  );
};

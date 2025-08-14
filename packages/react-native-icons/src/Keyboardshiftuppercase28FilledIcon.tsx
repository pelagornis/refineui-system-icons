import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Keyboardshiftuppercase28FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.3322 5.44247C13.8676 4.85251 14.7991 4.85251 15.3345 5.44247L23.1633 14.0687C24.3004 15.3216 23.3782 17.2753 21.7225 17.2753H19.2208V18.8292C19.2208 19.9005 18.3429 20.7506 17.2827 20.7506H11.384C10.3238 20.7506 9.44587 19.9005 9.44587 18.8292V17.2753H6.94412C5.28849 17.2753 4.36628 15.3216 5.50336 14.0687L13.3322 5.44247Z" fill="black"/>
<path d="M10.2502 22.1507C9.8314 22.1507 9.49186 22.4902 9.49186 22.9091C9.49186 23.3279 9.8314 23.6674 10.2502 23.6674H18.4172C18.8361 23.6674 19.1756 23.3279 19.1756 22.9091C19.1756 22.4902 18.8361 22.1507 18.4172 22.1507H10.2502Z" fill="black"/>
    </Svg>
  );
};

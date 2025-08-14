import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Keyboardoption20FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M3.83327 6C3.37307 6 3 6.37306 3 6.83325C3 7.29344 3.37307 7.6665 3.83327 7.6665H7.2641C7.42359 7.6665 7.56909 7.75754 7.63881 7.90098L10.5376 13.8644C10.6771 14.1512 10.9681 14.3333 11.2871 14.3333H15.5001C15.9603 14.3333 16.3333 13.9603 16.3333 13.5001C16.3333 13.0399 15.9603 12.6668 15.5001 12.6668H12.0692C11.9097 12.6668 11.7642 12.5758 11.6945 12.4324L8.79569 6.46897C8.65624 6.18209 8.36526 6 8.04628 6H3.83327Z" fill="black"/>
<path d="M10.8333 6C10.3731 6 10.0001 6.37306 10.0001 6.83325C10.0001 7.29344 10.3731 7.6665 10.8333 7.6665H15.5C15.9602 7.6665 16.3333 7.29344 16.3333 6.83325C16.3333 6.37306 15.9602 6 15.5 6H10.8333Z" fill="black"/>
    </Svg>
  );
};

import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Lockopen24RegularIcon: React.FC<IconProps> = ({ 
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
<path d="M13 14.2342C13 14.765 12.5523 15.1952 12 15.1952C11.4477 15.1952 11 14.765 11 14.2342C11 13.7035 11.4477 13.2733 12 13.2733C12.5523 13.2733 13 13.7035 13 14.2342Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 4C10.2139 4 8.72746 5.2328 8.41183 6.86123C8.34352 7.21366 8.64102 7.50751 9 7.50751C9.35898 7.50751 9.64045 7.21008 9.74589 6.86693C10.0332 5.93173 10.9337 5.24925 12 5.24925C13.2979 5.24925 14.35 6.26031 14.35 7.50751V8.46847H8C6.89543 8.46847 6 9.32894 6 10.3904V18.0781C6 19.1395 6.89543 20 8 20H16C17.1046 20 18 19.1395 18 18.0781V10.3904C18 9.32894 17.1046 8.46847 16 8.46847H15.65V7.50751C15.65 5.57037 14.0158 4 12 4ZM16 9.71772C16.3866 9.71772 16.7 10.0189 16.7 10.3904V18.0781C16.7 18.4496 16.3866 18.7508 16 18.7508H8C7.6134 18.7508 7.3 18.4496 7.3 18.0781V10.3904C7.3 10.0189 7.6134 9.71772 8 9.71772H16Z" fill="black"/>
    </Svg>
  );
};

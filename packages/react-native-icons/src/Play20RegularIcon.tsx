import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Play20RegularIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.8341 10.4743C16.4997 10.1415 16.4997 9.19181 15.8341 8.85905L4.30698 3.09649C3.70651 2.79631 3 3.23288 3 3.90411V15.4292C3 16.1005 3.70651 16.537 4.30698 16.2368L15.8341 10.4743ZM14.2814 10.0394C14.5885 9.88582 14.5885 9.44752 14.2814 9.29398L4.68631 4.49729C4.40927 4.35879 4.08333 4.56025 4.08333 4.86998L4.08333 14.4634C4.08333 14.7731 4.40927 14.9745 4.68631 14.836L14.2814 10.0394Z" fill="black"/>
    </Svg>
  );
};

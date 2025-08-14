import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Iosarrowrtl24FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M12.3816 19.7748C11.9377 19.4257 11.8714 18.7958 12.2336 18.368L17.3563 12.3161C17.5121 12.1321 17.5121 11.8679 17.3563 11.6839L12.2336 5.63203C11.8714 5.20415 11.9377 4.57429 12.3816 4.22519C12.8255 3.87608 13.4789 3.93993 13.8411 4.3678L19.7664 11.3679C20.0779 11.7358 20.0779 12.2642 19.7664 12.6321L13.8411 19.6322C13.4789 20.0601 12.8255 20.1239 12.3816 19.7748Z" fill="black"/>
    </Svg>
  );
};

import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Shield28FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.1667 23.6667L14.2622 23.6492C15.8999 23.3504 17.9003 22.1584 19.4842 20.5192C21.0691 18.8791 22.3333 16.6904 22.3333 14.3357V8.30583C22.3333 7.98364 22.084 7.72245 21.7765 7.72245C20.2988 7.72245 18.7306 7.26609 17.3863 6.69812C16.0431 6.13063 14.9699 5.47168 14.4928 5.11052C14.2981 4.96316 14.0352 4.96316 13.8405 5.11052C13.3633 5.47172 12.2905 6.13067 10.9477 6.69813C9.60368 7.26607 8.03549 7.72245 6.55688 7.72245C6.24932 7.72245 6 7.98364 6 8.30583V14.3357C6 16.6904 7.26421 18.8791 8.84911 20.5192C10.4331 22.1584 12.4335 23.3504 14.0711 23.6492L14.1667 23.6667Z" fill="black"/>
    </Svg>
  );
};

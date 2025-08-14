import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Porthdmi28FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.06247 10.3784C9.31275 10.1357 9.64767 10 9.99628 10H18.6704C19.019 10 19.3539 10.1357 19.6042 10.3784L23.259 13.9219C23.5196 14.1746 23.6667 14.5221 23.6667 14.8851V16.8263C23.6667 17.5672 23.0661 18.1678 22.3252 18.1678H6.3415C5.60061 18.1678 5 17.5672 5 16.8263V14.8851C5 14.5221 5.14709 14.1746 5.40768 13.9219L9.06247 10.3784ZM10.3317 13.3257C9.91289 13.3257 9.57341 13.6651 9.57341 14.0839C9.57341 14.5027 9.91289 14.8422 10.3317 14.8422H18.3351C18.7538 14.8422 19.0933 14.5027 19.0933 14.0839C19.0933 13.6651 18.7538 13.3257 18.3351 13.3257H10.3317Z" fill="black"/>
    </Svg>
  );
};

import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Crop32FilledIcon: React.FC<IconProps> = ({ 
  size = 32, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <Svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 32 32"
      fill="none"
      {{...props}}
    >
      width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.0196 6C11.7127 6 12.2745 6.56184 12.2745 7.2549V19.8039C12.2745 20.497 12.8363 21.0588 13.5294 21.0588H26.0784C26.7715 21.0588 27.3333 21.6207 27.3333 22.3137C27.3333 23.0068 26.7715 23.5686 26.0784 23.5686H13.5294C11.4502 23.5686 9.76471 21.8831 9.76471 19.8039V7.2549C9.76471 6.56184 10.3265 6 11.0196 6Z" fill="black"/>
<path d="M8.5098 9.76471H7.2549C6.56184 9.76471 6 10.3265 6 11.0196C6 11.7127 6.56184 12.2745 7.2549 12.2745H8.5098V9.76471Z" fill="black"/>
<path d="M21.0588 24.8235V26.0784C21.0588 26.7715 21.6207 27.3333 22.3137 27.3333C23.0068 27.3333 23.5686 26.7715 23.5686 26.0784V24.8235H21.0588Z" fill="black"/>
<path d="M23.5686 19.8039V13.5294C23.5686 11.4502 21.8831 9.76471 19.8039 9.76471H13.5294V12.2745H19.8039C20.497 12.2745 21.0588 12.8363 21.0588 13.5294V19.8039H23.5686Z" fill="black"/>
    </Svg>
  );
};

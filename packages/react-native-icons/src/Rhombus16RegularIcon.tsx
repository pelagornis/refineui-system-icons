import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Rhombus16RegularIcon: React.FC<IconProps> = ({ 
  size = 16, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <Svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 16 16"
      fill="none"
      {{...props}}
    >
      width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.13913 7.89697C3.95362 8.15556 3.95362 8.51111 4.13913 8.7697L7.44348 13.3758C7.72174 13.7636 8.27826 13.7636 8.55652 13.3758L11.8609 8.7697C12.0464 8.51111 12.0464 8.15556 11.8609 7.89697L8.55652 3.29091C8.27826 2.90303 7.72174 2.90303 7.44348 3.29091L4.13913 7.89697ZM5.03209 8.13903C4.94878 8.25517 4.94878 8.4115 5.03209 8.52764L7.72915 12.2872C7.86214 12.4725 8.13786 12.4725 8.27085 12.2872L10.9679 8.52764C11.0512 8.4115 11.0512 8.25517 10.9679 8.13903L8.27085 4.37949C8.13786 4.19412 7.86214 4.19412 7.72915 4.37949L5.03209 8.13903Z" fill="black"/>
    </Svg>
  );
};

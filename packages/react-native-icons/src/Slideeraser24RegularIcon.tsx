import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Slideeraser24RegularIcon: React.FC<IconProps> = ({ 
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
<path d="M6 7.3H18C18.3866 7.3 18.7 7.6134 18.7 8V12.1235C19.1166 11.9579 19.584 11.9588 20 12.1262V8C20 6.89543 19.1046 6 18 6H6C4.89543 6 4 6.89543 4 8V16C4 17.1046 4.89543 18 6 18H14.1262C13.9588 17.584 13.9579 17.1166 14.1235 16.7H6C5.6134 16.7 5.3 16.3866 5.3 16V8C5.3 7.6134 5.6134 7.3 6 7.3Z" fill="black"/>
<path d="M15.2192 16.8175C14.9269 17.1097 14.9269 17.5836 15.2192 17.8759L17.1241 19.7808C17.4164 20.0731 17.8903 20.0731 18.1825 19.7808L18.5681 19.3953L15.6047 16.4319L15.2192 16.8175Z" fill="black"/>
<path d="M16.1339 15.9027L19.0973 18.8661L21.7808 16.1825C22.0731 15.8903 22.0731 15.4164 21.7808 15.1241L19.8759 13.2192C19.5836 12.9269 19.1097 12.9269 18.8175 13.2192L16.1339 15.9027Z" fill="black"/>
    </Svg>
  );
};

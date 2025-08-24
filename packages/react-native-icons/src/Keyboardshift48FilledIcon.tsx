import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Keyboardshift48FilledIcon: React.FC<IconProps> = ({ 
  size = 48, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <Svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 48 48"
      fill="none"
      {{...props}}
    >
      width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M25.7163 8.7583C24.7984 7.74723 23.2016 7.74724 22.2837 8.7583L8.8629 23.5417C6.91362 25.6889 8.49455 29.0371 11.3328 29.0371H15.6215V36.7071C15.6215 38.5431 17.1265 40 18.944 40H29.056C30.8735 40 32.3785 38.5431 32.3785 36.7071V29.0371H36.6672C39.5055 29.0371 41.0864 25.6889 39.1371 23.5417L25.7163 8.7583Z" fill="black"/>
    </Svg>
  );
};

import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Doctor24FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M9.56058 4C8.92546 4 8.41058 4.51487 8.41058 5.15V8.16058C8.41058 8.29865 8.29865 8.41058 8.16058 8.41058H5.15C4.51487 8.41058 4 8.92545 4 9.56058V14.4414C4 15.0765 4.51487 15.5914 5.15 15.5914H8.16058C8.29865 15.5914 8.41058 15.7033 8.41058 15.8414V18.8519C8.41058 19.4871 8.92545 20.0019 9.56058 20.0019H14.4414C15.0765 20.0019 15.5914 19.4871 15.5914 18.8519V15.8414C15.5914 15.7033 15.7033 15.5914 15.8414 15.5914H18.8519C19.4871 15.5914 20.0019 15.0765 20.0019 14.4414V9.56058C20.0019 8.92546 19.4871 8.41058 18.8519 8.41058H15.8414C15.7033 8.41058 15.5914 8.29865 15.5914 8.16058V5.15C15.5914 4.51487 15.0765 4 14.4414 4H9.56058Z" fill="black"/>
    </Svg>
  );
};

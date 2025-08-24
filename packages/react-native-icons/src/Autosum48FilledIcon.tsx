import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Autosum48FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M8.29822 9.69746C7.65374 9.0638 8.12275 8 9.04661 8H37.911C39.0647 8 40 8.89536 40 9.99984C40 11.1043 39.0647 11.9997 37.911 11.9997H17.7086C17.2466 11.9997 17.0121 12.5316 17.3344 12.8484L27.967 23.3025C28.3618 23.6907 28.3618 24.3093 27.967 24.6975L17.3344 35.1516C17.0121 35.4684 17.2466 36.0003 17.7086 36.0003H37.911C39.0647 36.0003 40 36.8957 40 38.0002C40 39.1046 39.0647 40 37.911 40H9.04661C8.12275 40 7.65374 38.9362 8.29822 38.3025L22.4903 24.3488C22.6877 24.1547 22.6877 23.8453 22.4903 23.6512L8.29822 9.69746Z" fill="black"/>
    </Svg>
  );
};

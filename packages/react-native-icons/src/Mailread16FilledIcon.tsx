import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Mailread16FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M8.71405 3.10095C8.47832 2.9663 8.18896 2.96635 7.95328 3.1011L3.58729 5.59738C3.54528 5.6214 3.54205 5.68077 3.58121 5.7092L8.333 9.15927L13.121 5.72707C13.1605 5.69877 13.1574 5.6391 13.1153 5.615L8.71405 3.10095Z" fill="black"/>
<path d="M12.9008 13.6667C13.3242 13.6667 13.6674 13.3234 13.6674 12.9V6.53438C13.6674 6.48012 13.6061 6.44859 13.562 6.48019L8.77941 9.90552C8.51256 10.0966 8.15365 10.0967 7.88676 9.90562L3.10547 6.48208C3.06136 6.45049 3 6.48203 3 6.53628V12.9C3 13.3234 3.34323 13.6667 3.76663 13.6667H12.9008Z" fill="black"/>
    </Svg>
  );
};

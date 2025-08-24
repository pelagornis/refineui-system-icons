import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Keyboardtab48RegularIcon: React.FC<IconProps> = ({ 
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
<path d="M22.6673 10.3904C22.1648 9.87739 21.3417 9.86888 20.8288 10.3714C20.3158 10.8738 20.3073 11.6971 20.8098 12.21L31.0836 22.6998H9.30009C8.58207 22.6998 8 23.2819 8 24C8 24.7181 8.58207 25.3002 9.30009 25.3002H31.0836L20.8098 35.79C20.3073 36.303 20.3158 37.1262 20.8288 37.6286C21.3417 38.1311 22.1648 38.1226 22.6673 37.6096L34.6259 25.3997C35.3876 24.622 35.3876 23.378 34.6259 22.6003L22.6673 10.3904Z" fill="black"/>
<path d="M40 11.3002C40 10.5821 39.4179 10 38.6999 10C37.9819 10 37.3998 10.5821 37.3998 11.3002V36.6998C37.3998 37.4179 37.9819 38 38.6999 38C39.4179 38 40 37.4179 40 36.6998V11.3002Z" fill="black"/>
    </Svg>
  );
};

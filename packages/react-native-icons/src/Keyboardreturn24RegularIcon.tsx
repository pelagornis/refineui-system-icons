import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Keyboardreturn24RegularIcon: React.FC<IconProps> = ({ 
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
<path d="M10.092 7.22028C10.3371 7.48958 10.3103 7.90021 10.032 8.13746L6.26396 11.3502H18.6571V8.08486C18.6571 7.72597 18.9577 7.43502 19.3286 7.43502C19.6994 7.43502 20 7.72597 20 8.08486V11.6501C20 12.2022 19.5375 12.6498 18.967 12.6498H6.26396L10.032 15.8625C10.3103 16.0998 10.3371 16.5104 10.092 16.7797C9.84685 17.049 9.42257 17.075 9.14431 16.8378L4.35015 12.7502C3.88328 12.3521 3.88328 11.6479 4.35015 11.2498L9.14431 7.16224C9.42257 6.92499 9.84685 6.95098 10.092 7.22028Z" fill="black"/>
    </Svg>
  );
};

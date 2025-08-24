import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Heart24RegularIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M18.9704 6.46554C17.319 4.51717 14.3862 4.51048 12.7266 6.4516L11.9999 7.3015L11.2733 6.45163C9.61369 4.5105 6.68084 4.51721 5.02951 6.46562C3.59534 8.15778 3.66728 10.7079 5.19714 12.3106L11.2927 18.6966C11.6789 19.1011 12.3211 19.1011 12.7072 18.6966L18.8028 12.3107C20.3328 10.708 20.4047 8.15773 18.9704 6.46554ZM18.0003 7.30144C16.8568 5.95222 14.8421 5.94781 13.6931 7.29171L12.8765 8.24678C12.6578 8.50255 12.3395 8.65357 12 8.65357C11.6605 8.65357 11.3421 8.5026 11.1233 8.24678L10.3068 7.29173C9.1578 5.94784 7.14313 5.95226 5.99961 7.3015C4.99092 8.49165 5.04331 10.294 6.11656 11.4184L11.6463 17.2116C11.8394 17.4139 12.1605 17.4139 12.3536 17.2116L17.8834 11.4185C18.9567 10.2941 19.0091 8.49162 18.0003 7.30144Z" fill="black"/>
    </Svg>
  );
};

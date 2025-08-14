import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Flashoff32FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M5.47945 4.25383C5.14101 3.91539 4.59228 3.91539 4.25383 4.25383C3.91539 4.59228 3.91539 5.14101 4.25383 5.47946L26.5205 27.7462C26.859 28.0846 27.4077 28.0846 27.7462 27.7462C28.0846 27.4077 28.0846 26.859 27.7462 26.5205L5.47945 4.25383Z" fill="black"/>
<path d="M6.7651 14.8465L8.39075 11.0574L17.8821 20.5487L12.1161 26.3085C11.2816 27.1421 9.8711 26.3975 10.0887 25.2381L11.7252 16.5196H7.86786C7.00619 16.5196 6.42536 15.6384 6.7651 14.8465Z" fill="black"/>
<path d="M9.99191 7.32531L20.5501 17.8835L24.9792 13.4591C25.7358 12.7034 25.2005 11.4102 24.1312 11.4102H19.3799L20.8806 6.9131C21.1399 6.13601 20.5615 5.3333 19.7423 5.3333H11.6375C11.1576 5.3333 10.7239 5.61917 10.5347 6.06015L9.99191 7.32531Z" fill="black"/>
    </Svg>
  );
};

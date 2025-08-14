import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Crop20FilledIcon: React.FC<IconProps> = ({ 
  size = 20, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <Svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 20 20"
      fill="none"
      {{...props}}
    >
      width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.13725 4C7.57042 4 7.92157 4.35115 7.92157 4.78431V12.6275C7.92157 13.0606 8.27272 13.4118 8.70588 13.4118H16.549C16.9822 13.4118 17.3333 13.7629 17.3333 14.1961C17.3333 14.6292 16.9822 14.9804 16.549 14.9804H8.70588C7.40639 14.9804 6.35294 13.9269 6.35294 12.6275V4.78431C6.35294 4.35115 6.70409 4 7.13725 4Z" fill="black"/>
<path d="M5.56863 6.35294H4.78431C4.35115 6.35294 4 6.70409 4 7.13725C4 7.57042 4.35115 7.92157 4.78431 7.92157H5.56863V6.35294Z" fill="black"/>
<path d="M13.4118 15.7647V16.549C13.4118 16.9822 13.7629 17.3333 14.1961 17.3333C14.6292 17.3333 14.9804 16.9822 14.9804 16.549V15.7647H13.4118Z" fill="black"/>
<path d="M14.9804 12.6275V8.70588C14.9804 7.40639 13.9269 6.35294 12.6275 6.35294H8.70588V7.92157H12.6275C13.0606 7.92157 13.4118 8.27272 13.4118 8.70588V12.6275H14.9804Z" fill="black"/>
    </Svg>
  );
};

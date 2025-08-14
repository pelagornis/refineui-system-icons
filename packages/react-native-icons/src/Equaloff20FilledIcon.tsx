import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Equaloff20FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M2.92466 3.15865C2.71313 2.94712 2.37018 2.94712 2.15865 3.15865C1.94712 3.37018 1.94712 3.71313 2.15865 3.92466L16.0753 17.8413C16.2869 18.0529 16.6298 18.0529 16.8414 17.8413C17.0529 17.6298 17.0529 17.2869 16.8414 17.0753L2.92466 3.15865Z" fill="black"/>
<path d="M3.66656 7.16656H4.49994L6.16605 8.83268H3.66656C3.20637 8.83268 2.83331 8.4597 2.83331 7.99962C2.83331 7.53953 3.20637 7.16656 3.66656 7.16656Z" fill="black"/>
<path d="M7.83319 7.16656L9.4993 8.83268H15.3331C15.7933 8.83268 16.1663 8.4597 16.1663 7.99962C16.1663 7.53953 15.7933 7.16656 15.3331 7.16656H7.83319Z" fill="black"/>
<path d="M3.66656 12.1669H9.50032L11.1664 13.8331H3.66656C3.20637 13.8331 2.83331 13.4601 2.83331 13C2.83331 12.5399 3.20637 12.1669 3.66656 12.1669Z" fill="black"/>
<path d="M12.8336 12.1669L14.4997 13.8331H15.3331C15.7933 13.8331 16.1663 13.4601 16.1663 13C16.1663 12.5399 15.7933 12.1669 15.3331 12.1669H12.8336Z" fill="black"/>
    </Svg>
  );
};

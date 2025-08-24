import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Crop32RegularIcon: React.FC<IconProps> = ({ 
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
<path d="M11.6278 6.85071C11.6278 6.38088 11.247 6 10.7771 6C10.3073 6 9.92641 6.38088 9.92641 6.85071V19.9386C9.92641 21.8541 11.4792 23.4069 13.3947 23.4069H26.4826C26.9525 23.4069 27.3333 23.026 27.3333 22.5562C27.3333 22.0864 26.9525 21.7055 26.4826 21.7055H13.3947C12.4189 21.7055 11.6278 20.9144 11.6278 19.9386V6.85071Z" fill="black"/>
<path d="M8.61755 9.92638H6.85071C6.38088 9.92638 6 10.3073 6 10.7771C6 11.2469 6.38088 11.6278 6.85071 11.6278H8.61755V9.92638Z" fill="black"/>
<path d="M21.7055 24.7157V26.4826C21.7055 26.9524 22.0864 27.3333 22.5562 27.3333C23.026 27.3333 23.4069 26.9524 23.4069 26.4826V24.7157H21.7055Z" fill="black"/>
<path d="M23.4069 20.3967V13.3947C23.4069 11.4792 21.8541 9.92638 19.9386 9.92638H12.9366V11.6278H19.9386C20.9144 11.6278 21.7055 12.4189 21.7055 13.3947V20.3967H23.4069Z" fill="black"/>
    </Svg>
  );
};

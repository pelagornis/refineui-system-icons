import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Dismisssquare48FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 8C9.79086 8 8 9.79086 8 12V36C8 38.2091 9.79086 40 12 40H36C38.2091 40 40 38.2091 40 36V12C40 9.79086 38.2091 8 36 8H12ZM17.0807 17.0808C17.5884 16.5731 18.4115 16.5731 18.9192 17.0808L24 22.1615L29.0807 17.0808C29.5884 16.5731 30.4115 16.5731 30.9192 17.0808C31.4269 17.5885 31.4269 18.4116 30.9192 18.9193L25.8384 24L30.9192 29.0808C31.4269 29.5885 31.4269 30.4116 30.9192 30.9193C30.4115 31.4269 29.5884 31.4269 29.0807 30.9193L24 25.8385L18.9192 30.9193C18.4115 31.4269 17.5884 31.4269 17.0807 30.9193C16.573 30.4116 16.573 29.5885 17.0807 29.0808L22.1615 24L17.0807 18.9193C16.573 18.4116 16.573 17.5885 17.0807 17.0808Z" fill="black"/>
    </Svg>
  );
};

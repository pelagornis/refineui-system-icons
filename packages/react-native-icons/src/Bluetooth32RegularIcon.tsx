import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Bluetooth32RegularIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.3807 5.04365C16.699 4.93197 17.0516 5.03939 17.2583 5.31102L21.5007 10.8875C21.7589 11.2269 21.7108 11.7138 21.3915 11.9936L17.4242 15.4702V15.9685L21.3915 19.445C21.713 19.7267 21.7592 20.2178 21.4962 20.557L17.2538 26.0282C17.0455 26.2968 16.6938 26.4012 16.3772 26.2885C16.0606 26.1757 15.8485 25.8705 15.8485 25.5278V17.664L12.345 21.2458C12.0373 21.5603 11.5385 21.5603 11.2308 21.2458C10.9231 20.9312 10.9231 20.4212 11.2308 20.1066L15.807 15.4281L11.2691 11.3686C10.9416 11.0757 10.9084 10.5668 11.1949 10.232C11.4815 9.89722 11.9792 9.86329 12.3067 10.1562L15.8485 13.3246V5.80554C15.8485 5.46143 16.0623 5.15532 16.3807 5.04365ZM17.4242 13.3484L19.7956 11.2703L17.4242 8.15319V13.3484ZM17.4242 18.0903V23.2151L19.7903 20.1637L17.4242 18.0903Z" fill="black"/>
    </Svg>
  );
};

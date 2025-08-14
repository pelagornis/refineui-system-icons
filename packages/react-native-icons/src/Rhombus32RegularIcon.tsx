import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Rhombus32RegularIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.27826 14.7939C7.90725 15.3111 7.90725 16.0222 8.27826 16.5394L14.887 25.7515C15.4435 26.5273 16.5565 26.5273 17.113 25.7515L23.7217 16.5394C24.0928 16.0222 24.0928 15.3111 23.7217 14.7939L17.113 5.58182C16.5565 4.80606 15.4435 4.80606 14.887 5.58182L8.27826 14.7939ZM10.0642 15.2781C9.89756 15.5103 9.89756 15.823 10.0642 16.0553L15.4583 23.5744C15.7243 23.9451 16.2757 23.9451 16.5417 23.5743L21.9358 16.0553C22.1024 15.823 22.1024 15.5103 21.9358 15.2781L16.5417 7.75899C16.2757 7.38824 15.7243 7.38824 15.4583 7.75899L10.0642 15.2781Z" fill="black"/>
    </Svg>
  );
};

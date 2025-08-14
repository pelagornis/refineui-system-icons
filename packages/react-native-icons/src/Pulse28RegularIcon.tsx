import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Pulse28RegularIcon: React.FC<IconProps> = ({ 
  size = 28, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <Svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 28 28"
      fill="none"
      {{...props}}
    >
      width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.9807 10.8131L10.6075 13.954C10.394 14.4424 9.91148 14.7581 9.37838 14.7581H5.75824C5.33948 14.7581 5 14.4186 5 13.9998C5 13.5811 5.33948 13.2416 5.75824 13.2416H9.26392L10.7668 9.80413C11.2522 8.69387 12.8443 8.74521 13.2572 9.88443L16.0775 17.6663L17.484 14.0919C17.6859 13.5789 18.181 13.2416 18.7323 13.2416H22.9084C23.3272 13.2416 23.6667 13.5811 23.6667 13.9998C23.6667 14.4186 23.3272 14.7581 22.9084 14.7581H18.8515L17.3191 18.6525C16.8665 19.8029 15.2308 19.7806 14.8095 18.6184L11.9807 10.8131Z" fill="black"/>
    </Svg>
  );
};

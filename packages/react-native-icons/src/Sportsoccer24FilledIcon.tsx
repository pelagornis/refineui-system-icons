import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Sportsoccer24FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM13.5488 18.5201C13.0517 18.6377 12.5331 18.7 12 18.7C11.5247 18.7 11.061 18.6505 10.6137 18.5564L9.72999 16.5206L10.3741 15.5313H13.6186L14.2499 16.5381L13.5488 18.5201ZM17.5128 15.8088C18.2209 14.7858 18.6517 13.5562 18.6962 12.2286L17.0113 11.041L15.6514 11.5831L14.6858 14.7862L15.327 15.8088H17.5128ZM17.0891 7.64198L16.5473 9.82646L15.2069 10.3609L12.65 8.55075V6.91949L14.4759 5.77234C15.4933 6.17718 16.3881 6.8241 17.0891 7.64198ZM6.48719 15.8088H8.64216L9.31223 14.7798L8.34932 11.5856L6.95585 11.0405L5.30367 12.2239C5.34732 13.5532 5.77822 14.7846 6.48719 15.8088ZM6.90818 7.64512L7.41907 9.82582L8.79088 10.3624L11.35 8.55075V6.90114L9.64757 5.72462C8.57775 6.12584 7.63782 6.7928 6.90818 7.64512Z" fill="black"/>
    </Svg>
  );
};

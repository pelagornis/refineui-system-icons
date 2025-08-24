import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Crop28RegularIcon: React.FC<IconProps> = ({ 
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
<path d="M9.92436 5.74438C9.92436 5.33327 9.59109 5 9.17998 5C8.76887 5 8.43561 5.33327 8.43561 5.74438V17.1963C8.43561 18.8724 9.79431 20.2311 11.4704 20.2311H22.9223C23.3334 20.2311 23.6667 19.8978 23.6667 19.4867C23.6667 19.0756 23.3334 18.7423 22.9223 18.7423H11.4704C10.6165 18.7423 9.92436 18.0501 9.92436 17.1963V5.74438Z" fill="black"/>
<path d="M7.29036 8.43559H5.74438C5.33327 8.43559 5 8.76885 5 9.17996C5 9.59107 5.33327 9.92434 5.74438 9.92434H7.29036V8.43559Z" fill="black"/>
<path d="M18.7423 21.3763V22.9223C18.7423 23.3334 19.0756 23.6666 19.4867 23.6666C19.8978 23.6666 20.2311 23.3334 20.2311 22.9223V21.3763H18.7423Z" fill="black"/>
<path d="M20.2311 17.5971V11.4703C20.2311 9.79429 18.8724 8.43559 17.1963 8.43559H11.0695V9.92434H17.1963C18.0501 9.92434 18.7423 10.6165 18.7423 11.4703V17.5971H20.2311Z" fill="black"/>
    </Svg>
  );
};

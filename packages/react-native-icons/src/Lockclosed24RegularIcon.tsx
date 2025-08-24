import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Lockclosed24RegularIcon: React.FC<IconProps> = ({ 
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
<path d="M13 14.5838C13 15.1146 12.5523 15.5448 12 15.5448C11.4477 15.5448 11 15.1146 11 14.5838C11 14.0531 11.4477 13.6229 12 13.6229C12.5523 13.6229 13 14.0531 13 14.5838Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.35 8.81808V7.85712C8.35 5.91997 9.98416 4.34961 12 4.34961C14.0158 4.34961 15.65 5.91997 15.65 7.85712V8.81808H16C17.1046 8.81808 18 9.67855 18 10.74V18.4277C18 19.4891 17.1046 20.3496 16 20.3496H8C6.89543 20.3496 6 19.4891 6 18.4277V10.74C6 9.67855 6.89543 8.81808 8 8.81808H8.35ZM9.65 7.85712C9.65 6.60992 10.7021 5.59886 12 5.59886C13.2979 5.59886 14.35 6.60992 14.35 7.85712V8.81808H9.65V7.85712ZM16.7 10.74C16.7 10.3685 16.3866 10.0673 16 10.0673H8C7.6134 10.0673 7.3 10.3685 7.3 10.74V18.4277C7.3 18.7992 7.6134 19.1004 8 19.1004H16C16.3866 19.1004 16.7 18.7992 16.7 18.4277V10.74Z" fill="black"/>
    </Svg>
  );
};

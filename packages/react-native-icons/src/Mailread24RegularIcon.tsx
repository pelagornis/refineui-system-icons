import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Mailread24RegularIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.4303 4.15166C11.7838 3.94953 12.2179 3.94944 12.5715 4.15143L19.4979 8.10796C19.8096 8.28598 20.0019 8.61737 20.0019 8.97628V18.8508C20.0019 19.4859 19.4871 20.0008 18.8519 20.0008H5.15C4.51487 20.0008 4 19.4859 4 18.8508V8.98012C4 8.62135 4.19219 8.29007 4.50365 8.112L11.4303 4.15166ZM12.1252 5.39363C12.0483 5.34972 11.9539 5.34974 11.8771 5.39368L6.19064 8.64494C6.03247 8.73537 6.02106 8.95919 6.1692 9.06525L11.8543 13.1351C11.9414 13.1975 12.0584 13.1974 12.1454 13.1351L17.8326 9.06182C17.9807 8.95572 17.9692 8.73187 17.811 8.64149L12.1252 5.39363ZM18.7019 10.0382L12.6695 14.3588C12.2692 14.6455 11.7308 14.6455 11.3305 14.3589L5.3 10.0418V18.7008H18.7019V10.0382Z" fill="black"/>
    </Svg>
  );
};

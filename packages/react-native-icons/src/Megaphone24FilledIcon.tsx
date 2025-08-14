import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Megaphone24FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M19.9951 6.80514C19.9951 5.50713 18.6673 4.66659 17.4862 5.12763L4.73184 10.1062C4.29052 10.2785 4 10.7037 4 11.1775V12.8772C4 13.3509 4.29052 13.7762 4.73184 13.9484L6.60038 14.6778C6.35967 15.1539 6.22446 15.6902 6.22446 16.2793C6.22446 18.334 7.86927 19.9997 9.89825 19.9997C11.5633 19.9997 12.9696 18.878 13.4206 17.34L17.4862 18.927C18.6673 19.388 19.9951 18.5475 19.9951 17.2495V6.80514ZM12.189 16.9175L7.80964 15.1723C7.62379 15.5015 7.52446 15.8702 7.52446 16.2793C7.52446 17.6316 8.60266 18.6997 9.89825 18.6997C10.9816 18.6997 11.913 17.9528 12.189 16.9175Z" fill="black"/>
    </Svg>
  );
};

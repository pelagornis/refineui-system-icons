import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Shield20FilledIcon: React.FC<IconProps> = ({ 
  size = 20, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <Svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 20 20"
      fill="none"
      {{...props}}
    >
      width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.83333 16.3333L9.90159 16.3209C11.0713 16.1074 12.5002 15.256 13.6316 14.0852C14.7637 12.9137 15.6667 11.3503 15.6667 9.66834V5.36131C15.6667 5.13117 15.4886 4.94461 15.2689 4.94461C14.2134 4.94461 13.0933 4.61863 12.1331 4.21294C11.1737 3.80759 10.4071 3.33691 10.0663 3.07894C9.92724 2.97369 9.73943 2.97369 9.60038 3.07894C9.25952 3.33694 8.49325 3.80762 7.53406 4.21295C6.57406 4.61862 5.45392 4.94461 4.39777 4.94461C4.17809 4.94461 4 5.13117 4 5.36131V9.66834C4 11.3503 4.90301 12.9137 6.03508 14.0852C7.16647 15.256 8.59532 16.1074 9.76508 16.3209L9.83333 16.3333Z" fill="black"/>
    </Svg>
  );
};

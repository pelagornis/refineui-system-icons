import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Checkmark16FilledIcon: React.FC<IconProps> = ({ 
  size = 16, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <Svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 16 16"
      fill="none"
      {{...props}}
    >
      width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.87018 3.14224C10.0494 3.32554 10.0422 3.61566 9.85395 3.79023L4.91278 8.37356C4.72781 8.54513 4.43609 8.54167 4.25548 8.36576L2.13783 6.30326C1.95406 6.12427 1.95406 5.83407 2.13783 5.65508C2.32161 5.47609 2.61957 5.47609 2.80334 5.65508L4.51507 7.32222C4.56022 7.3662 4.63315 7.36707 4.67939 7.32417L9.20487 3.12644C9.39307 2.95186 9.69094 2.95894 9.87018 3.14224Z" fill="black"/>
    </Svg>
  );
};

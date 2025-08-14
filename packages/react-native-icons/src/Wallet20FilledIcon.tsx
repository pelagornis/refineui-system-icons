import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Wallet20FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.9975 4C13.9177 4 14.6637 4.74601 14.6637 5.66625C15.584 5.66625 16.33 6.41226 16.33 7.3325V9.62359C16.33 9.73862 16.2367 9.83187 16.1217 9.83187H11.7478C11.0576 9.83187 10.4981 10.3914 10.4981 11.0816C10.4981 11.7717 11.0576 12.3313 11.7478 12.3313H16.1217C16.2367 12.3313 16.33 12.4245 16.33 12.5395V14.8306C16.33 15.7509 15.584 16.4969 14.6637 16.4969H4.66625C3.74601 16.4969 3 15.7509 3 14.8306V5.66625C3 4.74601 3.74601 4 4.66625 4H12.9975ZM12.9975 5.08306H4.66625C4.34416 5.08306 4.08306 5.34416 4.08306 5.66625V5.77116C4.26457 5.70333 4.46108 5.66625 4.66625 5.66625H13.5807C13.5807 5.34416 13.3196 5.08306 12.9975 5.08306Z" fill="black"/>
<path d="M15.2469 11.2482V10.9149H11.7478C11.6558 10.9149 11.5812 10.9895 11.5812 11.0816C11.5812 11.1736 11.6558 11.2482 11.7478 11.2482H15.2469Z" fill="black"/>
    </Svg>
  );
};

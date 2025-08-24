import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Autosum20FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M3.12423 3.7071C2.85576 3.44314 3.05113 3 3.43598 3H15.4598C15.9404 3 16.33 3.37297 16.33 3.83306C16.33 4.29314 15.9404 4.66611 15.4598 4.66611H7.04422C6.8518 4.66611 6.75411 4.88768 6.88834 5.01966L11.3175 9.37443C11.482 9.53615 11.482 9.79385 11.3175 9.95557L6.88834 14.3103C6.75411 14.4423 6.8518 14.6639 7.04422 14.6639H15.4598C15.9404 14.6639 16.33 15.0369 16.33 15.4969C16.33 15.957 15.9404 16.33 15.4598 16.33H3.43598C3.05113 16.33 2.85576 15.8869 3.12423 15.6229L9.03612 9.81029C9.11836 9.72943 9.11836 9.60057 9.03612 9.51971L3.12423 3.7071Z" fill="black"/>
    </Svg>
  );
};

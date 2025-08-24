import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Parallelogram24RegularIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.21536 6.91614C8.46679 6.36137 9.05638 6 9.71009 6H18.379C19.5345 6 20.3182 7.0807 19.8738 8.06131L15.7846 17.0839C15.5332 17.6386 14.9436 18 14.2899 18H5.62097C4.46548 18 3.68182 16.9193 4.12624 15.9387L8.21536 6.91614ZM9.71009 7.17293C9.57143 7.17293 9.44636 7.24959 9.39303 7.36726L5.30391 16.3898C5.20964 16.5978 5.37587 16.8271 5.62097 16.8271H14.2899C14.4286 16.8271 14.5536 16.7504 14.607 16.6327L18.6961 7.61018C18.7904 7.40217 18.6241 7.17293 18.379 7.17293H9.71009Z" fill="black"/>
    </Svg>
  );
};

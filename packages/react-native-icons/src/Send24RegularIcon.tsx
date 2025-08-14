import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Send24RegularIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M19.7125 11.5349C20.0958 11.7265 20.0958 12.2735 19.7125 12.4651L4.75268 19.9444C4.40687 20.1173 4 19.8659 4 19.4793V4.52072C4 4.13412 4.40687 3.88268 4.75268 4.05557L19.7125 11.5349ZM5.35223 6.28777C5.35223 6.09447 5.55567 5.96875 5.72857 6.05519L17.154 11.7674C17.3457 11.8633 17.3457 12.1367 17.154 12.2326L5.72857 17.9448C5.55567 18.0312 5.35223 17.9055 5.35223 17.7122V12.9361C5.35223 12.7925 5.46866 12.6761 5.61228 12.6761H9.72099C10.0944 12.6761 10.3971 12.3734 10.3971 12C10.3971 11.6266 10.0944 11.3239 9.72099 11.3239H5.61228C5.46866 11.3239 5.35223 11.2075 5.35223 11.0639L5.35223 6.28777Z" fill="black"/>
    </Svg>
  );
};

import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Paintbucket24FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.56649 4.19067C9.31281 3.93667 8.90125 3.93641 8.64725 4.19009C8.39325 4.44377 8.39299 4.85533 8.64667 5.10933L10.1686 6.63321L4.19009 12.6193C3.93664 12.8731 3.93664 13.2842 4.19009 13.538L10.1322 19.4876C10.2541 19.6097 10.4196 19.6783 10.5921 19.6783C10.7646 19.6783 10.9301 19.6097 11.052 19.4876L17.4893 13.0422C17.7428 12.7884 17.7428 12.3773 17.4893 12.1235L9.56649 4.19067ZM6.2837 12.3627L11.0873 7.55303L15.5214 11.9927L6.2837 12.3627Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M18.2775 14.852L18.1015 14.6776C18.004 14.581 17.847 14.581 17.7495 14.6776L17.5735 14.852C17.1591 15.2628 16.7381 15.7608 16.4173 16.2797C16.1034 16.7874 15.8503 17.3709 15.8503 17.9394C15.8503 19.082 16.7836 20.0006 17.9255 20.0006C19.0674 20.0006 20.0007 19.082 20.0007 17.9394C20.0007 17.3709 19.7476 16.7874 19.4337 16.2797C19.1129 15.7608 18.692 15.2628 18.2775 14.852Z" fill="black"/>
    </Svg>
  );
};

import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Mailread20RegularIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.1916 3.12638C9.48619 2.95794 9.8479 2.95787 10.1426 3.12619L15.9143 6.42313C16.174 6.57148 16.3343 6.84762 16.3343 7.1467V15.375C16.3343 15.9043 15.9053 16.3333 15.376 16.3333H3.95829C3.42904 16.3333 3 15.9043 3 15.375V7.1499C3 6.85094 3.16015 6.57489 3.41969 6.4265L9.1916 3.12638ZM9.77066 4.1613C9.7066 4.12471 9.62797 4.12473 9.56392 4.16135L4.82544 6.87059C4.69364 6.94595 4.68413 7.13246 4.80758 7.22083L9.54495 10.6123C9.61748 10.6642 9.71501 10.6642 9.78752 10.6122L14.5266 7.21798C14.65 7.12956 14.6405 6.94303 14.5086 6.86772L9.77066 4.1613ZM15.251 8.03159L10.2243 11.6319C9.8907 11.8708 9.44206 11.8709 9.10845 11.632L4.08328 8.03457V15.2501H15.251V8.03159Z" fill="black"/>
    </Svg>
  );
};

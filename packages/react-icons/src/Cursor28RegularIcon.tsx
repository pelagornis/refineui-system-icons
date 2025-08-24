import React from 'react';
import { IconProps } from './types';

export const Cursor28RegularIcon: React.FC<IconProps> = ({ 
  size = 28, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {{...props}}
    >
      width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.702 5.06852C5.69244 4.73194 4.73198 5.69257 5.0685 6.70231L10.4291 22.7868C10.811 23.9329 12.4166 23.974 12.8568 22.849L15.2544 16.7206C15.5169 16.0496 16.0477 15.5188 16.7185 15.2563L22.8458 12.8582C23.9706 12.418 23.9295 10.812 22.7836 10.43L6.702 5.06852ZM6.64981 6.65011L11.6711 21.7167L13.8421 16.1678C14.2587 15.1029 15.1011 14.2603 16.1658 13.8436L21.7137 11.6723L6.64981 6.65011Z" fill="black"/>
    </svg>
  );
};

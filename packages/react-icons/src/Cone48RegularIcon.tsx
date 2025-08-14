import React from 'react';
import { IconProps } from './types';

export const Cone48RegularIcon: React.FC<IconProps> = ({ 
  size = 48, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {{...props}}
    >
      width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M22.6181 8.90534C23.1418 7.69822 24.8582 7.69822 25.382 8.90534L36.8828 35.4117C37.1957 36.133 36.8525 36.9215 36.204 37.2328C28.5198 40.9224 19.4802 40.9224 11.796 37.2328C11.1475 36.9214 10.8043 36.133 11.1172 35.4117L22.6181 8.90534ZM23.552 13.1412C23.7225 12.7483 24.2775 12.7483 24.448 13.1412L33.9034 34.9335C34.0119 35.1835 33.8967 35.4749 33.6449 35.5768C27.4804 38.0715 20.5196 38.0715 14.3551 35.5768C14.1033 35.4749 13.9881 35.1835 14.0966 34.9335L23.552 13.1412Z" fill="black"/>
    </svg>
  );
};

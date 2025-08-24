import React from 'react';
import { IconProps } from './types';

export const Textboxaligntopright20FilledIcon: React.FC<IconProps> = ({ 
  size = 20, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {{...props}}
    >
      width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.66625 3C3.74601 3 3 3.74601 3 4.66625V14.6637C3 15.584 3.74601 16.33 4.66625 16.33H14.6637C15.584 16.33 16.33 15.584 16.33 14.6637V4.66625C16.33 3.74601 15.584 3 14.6637 3H4.66625ZM7.6655 9.45672C7.6655 9.15764 7.90795 8.91519 8.20703 8.91519H13.2058C13.5049 8.91519 13.7473 9.15764 13.7473 9.45672C13.7473 9.7558 13.5049 9.99825 13.2058 9.99825H8.20703C7.90795 9.99825 7.6655 9.7558 7.6655 9.45672ZM5.58269 6.54078C5.58269 6.2417 5.82514 5.99925 6.12422 5.99925H13.2058C13.5049 5.99925 13.7473 6.2417 13.7473 6.54078C13.7473 6.83986 13.5049 7.08231 13.2058 7.08231H6.12422C5.82514 7.08231 5.58269 6.83986 5.58269 6.54078Z" fill="black"/>
    </svg>
  );
};

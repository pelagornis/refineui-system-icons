import React from 'react';
import IconUtils from './IconUtils';

export interface FlutterIconProps {
  name: string;
  size?: number;
  color?: string;
  style?: 'regular' | 'filled';
  className?: string;
  onClick?: () => void;
  [key: string]: any;
}

/**
 * Flutter 스타일의 아이콘 컴포넌트
 * 
 * 사용법:
 * <FlutterIcon name="Gavel" size={24} color="red" />
 * <FlutterIcon name="Add" style="filled" size={32} />
 */
export const FlutterIcon: React.FC<FlutterIconProps> = ({
  name,
  size = 24,
  color = 'currentColor',
  style = 'regular',
  className = '',
  onClick,
  ...restProps
}) => {
  const iconChar = IconUtils.getIconChar(name, style, size);
  if (!iconChar) {
    console.warn(`Icon "${name}" with size ${size} and style "${style}" not found`);
    return null;
  }

  const fontFamily = IconUtils.getFontFamily(style);

  return (
    <span
      style={{
        fontFamily,
        fontSize: size,
        color,
        display: 'inline-block',
        lineHeight: 1,
        verticalAlign: 'middle'
      }}
      className={className}
      onClick={onClick}
      {...restProps}
    >
      {iconChar}
    </span>
  );
};

/**
 * 아이콘 컴포넌트 (별칭)
 */
export const Icon = FlutterIcon;

export default FlutterIcon;

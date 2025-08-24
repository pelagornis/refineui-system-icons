import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  style?: React.CSSProperties;
  className?: string;
  onClick?: () => void;
}

// Icon Components
export const GavelFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰀀
    </span>
  );
};
export const DiamondFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰀈
    </span>
  );
};
export const FilmstripFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰀏
    </span>
  );
};
export const OrganizationFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰀒
    </span>
  );
};
export const CodeBlockFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰀛
    </span>
  );
};
export const FullScreenMinimizeFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰀠
    </span>
  );
};
export const ShellScriptFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰀧
    </span>
  );
};
export const PauseFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰀭
    </span>
  );
};
export const PortUsbCFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰀰
    </span>
  );
};
export const KeyboardShiftUppercaseFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰀹
    </span>
  );
};
export const LineHorizontal1FilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰁁
    </span>
  );
};
export const VoteFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰁇
    </span>
  );
};
export const PowerFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰁊
    </span>
  );
};
export const PreviewLinkFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰁓
    </span>
  );
};
export const CrownFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰁖
    </span>
  );
};
export const ShieldFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰁝
    </span>
  );
};
export const NoteFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰁠
    </span>
  );
};
export const OrientationFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰁦
    </span>
  );
};
export const SettingsFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰁱
    </span>
  );
};
export const HomeFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰁲
    </span>
  );
};
export const DatabaseFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰁺
    </span>
  );
};
export const OptionsFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰂀
    </span>
  );
};
export const DustFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰂆
    </span>
  );
};
export const LuggageFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰂏
    </span>
  );
};
export const FlipVerticialFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰂒
    </span>
  );
};
export const AutosumFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰂛
    </span>
  );
};
export const PipelineFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰂜
    </span>
  );
};
export const DrawerFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰂤
    </span>
  );
};
export const NextFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰂫
    </span>
  );
};
export const MoreVerticialFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰂰
    </span>
  );
};
export const TabletFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰂶
    </span>
  );
};
export const PianoFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰂽
    </span>
  );
};
export const AppFolderFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰃃
    </span>
  );
};
export const LockClosedFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰃉
    </span>
  );
};
export const FlagFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰃎
    </span>
  );
};
export const NumberSymbolFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰃕
    </span>
  );
};
export const VideoFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰃚
    </span>
  );
};
export const EditOffFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰃞
    </span>
  );
};
export const BalloonFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰃩
    </span>
  );
};
export const MovieFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰃮
    </span>
  );
};
export const HammerFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰃲
    </span>
  );
};
export const MoreCircleFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰃺
    </span>
  );
};
export const GasFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰃾
    </span>
  );
};
export const PasswordFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰄆
    </span>
  );
};
export const ChevronLeftFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰄌
    </span>
  );
};
export const OpenOffFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰄒
    </span>
  );
};
export const PinFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰄘
    </span>
  );
};
export const SerialPortFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰄜
    </span>
  );
};
export const EyeFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰄤
    </span>
  );
};
export const ZoomOutFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰄪
    </span>
  );
};
export const MacosFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰄮
    </span>
  );
};
export const Battery80FilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰄳
    </span>
  );
};
export const CalendarFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰄷
    </span>
  );
};
export const FastForwardFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰅂
    </span>
  );
};
export const BookmarkFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰅈
    </span>
  );
};
export const AddSquareFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰅌
    </span>
  );
};
export const Battery20FilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰅏
    </span>
  );
};
export const CalculatorFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰅕
    </span>
  );
};
export const TextboxAlignBottomLeftFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰅝
    </span>
  );
};
export const RecordFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰅤
    </span>
  );
};
export const DeskFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰅬
    </span>
  );
};
export const WeatherSnowFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰅲
    </span>
  );
};
export const ToggleMultipleFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰅸
    </span>
  );
};
export const PulseSquareFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰅼
    </span>
  );
};
export const HourglassFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰆄
    </span>
  );
};
export const PreviousFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰆈
    </span>
  );
};
export const CloverFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰆐
    </span>
  );
};
export const RefineuiFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰆔
    </span>
  );
};
export const CheckmarkFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰆙
    </span>
  );
};
export const SlideLayoutFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰆝
    </span>
  );
};
export const VideoPlayPauseFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰆨
    </span>
  );
};
export const TextboxAlignBottomFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰆬
    </span>
  );
};
export const ChatFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰆱
    </span>
  );
};
export const UsbCableFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰆺
    </span>
  );
};
export const SmartwatchFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰆽
    </span>
  );
};
export const WaterFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰇆
    </span>
  );
};
export const HdFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰇌
    </span>
  );
};
export const DeleteFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰇏
    </span>
  );
};
export const BoardFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰇖
    </span>
  );
};
export const Battery10FilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰇛
    </span>
  );
};
export const SubtractFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰇡
    </span>
  );
};
export const LocationArrowFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰇨
    </span>
  );
};
export const EmojiSadFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰇭
    </span>
  );
};
export const FullScreenMaximizeFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰇶
    </span>
  );
};
export const PythonFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰇹
    </span>
  );
};
export const VerifiedFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰇿
    </span>
  );
};
export const CssFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰈈
    </span>
  );
};
export const SportBasketballFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰈉
    </span>
  );
};
export const CursorFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰈒
    </span>
  );
};
export const RecordStopFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰈚
    </span>
  );
};
export const CouchFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰈠
    </span>
  );
};
export const CpuFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰈣
    </span>
  );
};
export const AppstoreFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰈬
    </span>
  );
};
export const HeartFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰈰
    </span>
  );
};
export const EmojiAngryFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰈳
    </span>
  );
};
export const WrenchFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰈾
    </span>
  );
};
export const HighlightFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰉁
    </span>
  );
};
export const WasherFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰉇
    </span>
  );
};
export const GanttChartFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰉎
    </span>
  );
};
export const PersonFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰉖
    </span>
  );
};
export const DartFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰉗
    </span>
  );
};
export const HighwayFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰉟
    </span>
  );
};
export const CommentFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰉨
    </span>
  );
};
export const MailFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰉩
    </span>
  );
};
export const AlertFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰉱
    </span>
  );
};
export const FlipHorizontalFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰉸
    </span>
  );
};
export const HdrOffFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰉾
    </span>
  );
};
export const HeadphonesMicFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰊄
    </span>
  );
};
export const WebFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰊇
    </span>
  );
};
export const TargetFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰊒
    </span>
  );
};
export const AlignRightFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰊓
    </span>
  );
};
export const MailboxFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰊛
    </span>
  );
};
export const MarkdownFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰊡
    </span>
  );
};
export const NumberCircle9FilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰊧
    </span>
  );
};
export const CameraFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰊮
    </span>
  );
};
export const NumberCircle0FilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰊱
    </span>
  );
};
export const LocationFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰊹
    </span>
  );
};
export const BarcodeScannerFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰊿
    </span>
  );
};
export const LocalLanguageFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰋃
    </span>
  );
};
export const PaymentFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰋋
    </span>
  );
};
export const SlideEraserFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰋒
    </span>
  );
};
export const ShapeUnionFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰋘
    </span>
  );
};
export const NumberCircle7FilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰋛
    </span>
  );
};
export const Battery50FilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰋡
    </span>
  );
};
export const TrophyFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰋩
    </span>
  );
};
export const IosChevronLtrFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰋲
    </span>
  );
};
export const SquareFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰋸
    </span>
  );
};
export const HdrFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰋹
    </span>
  );
};
export const TypescriptFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰌄
    </span>
  );
};
export const BarChartHorizontalDescendingFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰌊
    </span>
  );
};
export const CubeFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰌋
    </span>
  );
};
export const EmojiLaughFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰌑
    </span>
  );
};
export const EmojiGrimacingFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰌜
    </span>
  );
};
export const DismissCircleFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰌢
    </span>
  );
};
export const MoonFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰌦
    </span>
  );
};
export const SlideAddFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰌫
    </span>
  );
};
export const FolderFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰌯
    </span>
  );
};
export const ChartFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰌸
    </span>
  );
};
export const SquareMultipleFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰌾
    </span>
  );
};
export const ChatAddFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰍁
    </span>
  );
};
export const DoctorFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰍉
    </span>
  );
};
export const NumberSymbolCircleFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰍐
    </span>
  );
};
export const MoreHorizontalFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰍓
    </span>
  );
};
export const NumberCircle6FilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰍞
    </span>
  );
};
export const ChevronUpFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰍟
    </span>
  );
};
export const TimerFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰍪
    </span>
  );
};
export const NumberCircle1FilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰍰
    </span>
  );
};
export const RssFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰍳
    </span>
  );
};
export const LineHorizontal1DashesFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰍷
    </span>
  );
};
export const AccessTimeFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰎂
    </span>
  );
};
export const TextboxAlignTopRightFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰎅
    </span>
  );
};
export const Battery60FilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰎋
    </span>
  );
};
export const RoadFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰎔
    </span>
  );
};
export const NumberCircle8FilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰎘
    </span>
  );
};
export const CropFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰎝
    </span>
  );
};
export const EyeOffFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰎤
    </span>
  );
};
export const SportSoccerFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰎧
    </span>
  );
};
export const KeyboardTabFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰎭
    </span>
  );
};
export const OrganizationHorizontalFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰎵
    </span>
  );
};
export const PulseFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰎹
    </span>
  );
};
export const DocumentBorderFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰏄
    </span>
  );
};
export const TextboxAlignMiddleRightFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰏇
    </span>
  );
};
export const OvenFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰏐
    </span>
  );
};
export const KeyboardLockFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰏓
    </span>
  );
};
export const CodeFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰏗
    </span>
  );
};
export const ChatEmptyFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰏝
    </span>
  );
};
export const EmojiFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰏨
    </span>
  );
};
export const GuitarFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰏩
    </span>
  );
};
export const PentagonFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰏯
    </span>
  );
};
export const Wifi1FilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰏺
    </span>
  );
};
export const ImportantFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰐀
    </span>
  );
};
export const MicFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰐄
    </span>
  );
};
export const KeyboardOptionFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰐌
    </span>
  );
};
export const HeadphonesFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰐍
    </span>
  );
};
export const EmojiMehFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰐓
    </span>
  );
};
export const StopFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰐙
    </span>
  );
};
export const DeleteOffFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰐢
    </span>
  );
};
export const ConeFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰐧
    </span>
  );
};
export const DesktopFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰐭
    </span>
  );
};
export const ServerFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰐱
    </span>
  );
};
export const ShapesFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰐺
    </span>
  );
};
export const SquareHintFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰑀
    </span>
  );
};
export const FrameFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰑅
    </span>
  );
};
export const CommaFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰑋
    </span>
  );
};
export const HtmlFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰑏
    </span>
  );
};
export const KotlinFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰑚
    </span>
  );
};
export const BarChartVerticalDescendingFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰑠
    </span>
  );
};
export const TextAlignJustifyFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰑣
    </span>
  );
};
export const RewindFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰑧
    </span>
  );
};
export const DualScreenFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰑰
    </span>
  );
};
export const KeyFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰑳
    </span>
  );
};
export const SpacebarFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰑻
    </span>
  );
};
export const HexagonFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰑿
    </span>
  );
};
export const BugFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰒇
    </span>
  );
};
export const HourglassHalfFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰒋
    </span>
  );
};
export const DocumentFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰒖
    </span>
  );
};
export const EmojiSurpriseFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰒗
    </span>
  );
};
export const TabFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰒢
    </span>
  );
};
export const KeyboardReturnFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰒥
    </span>
  );
};
export const TextAlignCenterFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰒬
    </span>
  );
};
export const IosChevronRtlFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰒴
    </span>
  );
};
export const AlignTopFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰒺
    </span>
  );
};
export const TvFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰒻
    </span>
  );
};
export const GlassesFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰓄
    </span>
  );
};
export const AlignLeftFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰓌
    </span>
  );
};
export const DragFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰓏
    </span>
  );
};
export const ZoomInFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰓕
    </span>
  );
};
export const MegaphoneFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰓞
    </span>
  );
};
export const PrintFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰓤
    </span>
  );
};
export const TextboxAlignBottomRightFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰓨
    </span>
  );
};
export const GiftCardFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰓮
    </span>
  );
};
export const IosFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰓶
    </span>
  );
};
export const Battery0FilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰓼
    </span>
  );
};
export const ScriptFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰔀
    </span>
  );
};
export const ImageFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰔆
    </span>
  );
};
export const DentistFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰔎
    </span>
  );
};
export const QrCodeFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰔔
    </span>
  );
};
export const IotFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰔚
    </span>
  );
};
export const ScalesFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰔝
    </span>
  );
};
export const DismissFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰔦
    </span>
  );
};
export const TentFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰔩
    </span>
  );
};
export const RectangleFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰔭
    </span>
  );
};
export const GiftFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰔳
    </span>
  );
};
export const QuestionFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰔻
    </span>
  );
};
export const PortHdmiFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰔿
    </span>
  );
};
export const SearchFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰕊
    </span>
  );
};
export const AlignCenterVerticalFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰕋
    </span>
  );
};
export const DesktopMacFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰕔
    </span>
  );
};
export const MouseFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰕚
    </span>
  );
};
export const RibbonFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰕟
    </span>
  );
};
export const PenFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰕦
    </span>
  );
};
export const FolderOpenFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰕬
    </span>
  );
};
export const WeatherSunnyFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰕲
    </span>
  );
};
export const InfoFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰕵
    </span>
  );
};
export const AlertOffFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰕻
    </span>
  );
};
export const VideoClipFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰖄
    </span>
  );
};
export const ChevronRightFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰖊
    </span>
  );
};
export const OvalFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰖏
    </span>
  );
};
export const UsbFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰖕
    </span>
  );
};
export const EditFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰖛
    </span>
  );
};
export const EqualOffFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰖡
    </span>
  );
};
export const AlignCenterHorizontalFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰖨
    </span>
  );
};
export const WarningFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰖭
    </span>
  );
};
export const StarFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰖶
    </span>
  );
};
export const TextboxAlignMiddleLeftFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰖺
    </span>
  );
};
export const TextboxAlignCenterFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰗀
    </span>
  );
};
export const FlashFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰗈
    </span>
  );
};
export const KeyboardBackspaceFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰗎
    </span>
  );
};
export const WeatherThunderstormFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰗏
    </span>
  );
};
export const TextAlignLeftFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰗘
    </span>
  );
};
export const DropFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰗞
    </span>
  );
};
export const MapFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰗣
    </span>
  );
};
export const JsonFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰗧
    </span>
  );
};
export const ImageCircleFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰗰
    </span>
  );
};
export const GasStationFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰗸
    </span>
  );
};
export const LayerFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰗹
    </span>
  );
};
export const IosArrowLtrFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰘁
    </span>
  );
};
export const ServerPlayFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰘇
    </span>
  );
};
export const FireFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰘎
    </span>
  );
};
export const AddFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰘓
    </span>
  );
};
export const PortUsbAFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰘜
    </span>
  );
};
export const HourglassOneQuarterFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰘢
    </span>
  );
};
export const ShareAndroidFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰘨
    </span>
  );
};
export const ThinkingFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰘮
    </span>
  );
};
export const IncognitoFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰘱
    </span>
  );
};
export const LinkFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰘷
    </span>
  );
};
export const KeyMultipleFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰘽
    </span>
  );
};
export const CartonBoxFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰙆
    </span>
  );
};
export const NewsFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰙊
    </span>
  );
};
export const ServiceBellFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰙒
    </span>
  );
};
export const AlertBadgeFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰙖
    </span>
  );
};
export const AppTitleFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰙛
    </span>
  );
};
export const PlayCircleFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰙟
    </span>
  );
};
export const OpacityFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰙧
    </span>
  );
};
export const ErrorCircleFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰙭
    </span>
  );
};
export const LineFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰙱
    </span>
  );
};
export const SlideGridFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰙹
    </span>
  );
};
export const RhombusFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰚂
    </span>
  );
};
export const LockOpenFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰚃
    </span>
  );
};
export const RulerFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰚉
    </span>
  );
};
export const ClockAlarmFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰚑
    </span>
  );
};
export const SwiftFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰚚
    </span>
  );
};
export const SlideContentFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰚞
    </span>
  );
};
export const EarthFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰚣
    </span>
  );
};
export const PaymentWirelessFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰚬
    </span>
  );
};
export const PaintBucketFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰚰
    </span>
  );
};
export const PersonVoiceFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰚵
    </span>
  );
};
export const BlurFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰚼
    </span>
  );
};
export const SportBaseballFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰛁
    </span>
  );
};
export const RadioButtonFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰛇
    </span>
  );
};
export const BluetoothFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰛋
    </span>
  );
};
export const PauseCircleFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰛖
    </span>
  );
};
export const AndroidFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰛜
    </span>
  );
};
export const TextAlignRightFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰛟
    </span>
  );
};
export const AirplaneFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰛥
    </span>
  );
};
export const ToolboxFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰛫
    </span>
  );
};
export const GuestFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰛲
    </span>
  );
};
export const HatGraduationFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰛺
    </span>
  );
};
export const TextboxAlignTopFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰜀
    </span>
  );
};
export const WeatherBlowingSnowFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰜆
    </span>
  );
};
export const CloudFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰜇
    </span>
  );
};
export const BarChartVerticalFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰜐
    </span>
  );
};
export const Battery70FilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰜕
    </span>
  );
};
export const CutFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰜞
    </span>
  );
};
export const ShoppingBagFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰜤
    </span>
  );
};
export const FlashlightOffFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰜥
    </span>
  );
};
export const BookFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰜭
    </span>
  );
};
export const ShapeIntersectFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰜱
    </span>
  );
};
export const Battery100FilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰜼
    </span>
  );
};
export const HourglassThreeQuarterFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰝂
    </span>
  );
};
export const RoadConeFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰝈
    </span>
  );
};
export const UmbrellaFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰝌
    </span>
  );
};
export const WalletFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰝏
    </span>
  );
};
export const CartFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰝚
    </span>
  );
};
export const PhoneFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰝠
    </span>
  );
};
export const PaddingFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰝦
    </span>
  );
};
export const ZoomFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰝩
    </span>
  );
};
export const SoundSourceFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰝯
    </span>
  );
};
export const TicketFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰝸
    </span>
  );
};
export const EqualFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰝼
    </span>
  );
};
export const BackspaceFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰞁
    </span>
  );
};
export const ChessFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰞅
    </span>
  );
};
export const AddCircleFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰞐
    </span>
  );
};
export const AppRecentFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰞖
    </span>
  );
};
export const ShapeSubtractFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰞚
    </span>
  );
};
export const ChevronDownFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰞢
    </span>
  );
};
export const FlashlightFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰞨
    </span>
  );
};
export const PulseCircleFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰞮
    </span>
  );
};
export const AlignBottomFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰞯
    </span>
  );
};
export const Battery40FilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰞵
    </span>
  );
};
export const IosArrowRtlFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰞽
    </span>
  );
};
export const MailReadFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰟄
    </span>
  );
};
export const KioskFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰟇
    </span>
  );
};
export const KeyboardCommandFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰟐
    </span>
  );
};
export const CopyFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰟖
    </span>
  );
};
export const CircleFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰟜
    </span>
  );
};
export const WeatherSnowflakeFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰟢
    </span>
  );
};
export const DialpadFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰟪
    </span>
  );
};
export const FlagOffFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰟫
    </span>
  );
};
export const VoicemailFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰟴
    </span>
  );
};
export const ContrastFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰟷
    </span>
  );
};
export const CookieFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰟽
    </span>
  );
};
export const WeatherRainFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰠃
    </span>
  );
};
export const DismissSquareFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰠌
    </span>
  );
};
export const NumberCircle4FilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰠏
    </span>
  );
};
export const NumberCircle3FilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰠕
    </span>
  );
};
export const LightbulbFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰠛
    </span>
  );
};
export const RocketFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰠦
    </span>
  );
};
export const NumberSymbolSquareFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰠬
    </span>
  );
};
export const TextFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰠲
    </span>
  );
};
export const ControlButtonFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰠵
    </span>
  );
};
export const EyedropperOffFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰠻
    </span>
  );
};
export const JoystickFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰡄
    </span>
  );
};
export const SprayCanFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰡇
    </span>
  );
};
export const TextboxAlignMiddleFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰡋
    </span>
  );
};
export const FlashOffFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰡓
    </span>
  );
};
export const TextboxAlignBottomCenterFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰡜
    </span>
  );
};
export const BackpackFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰡟
    </span>
  );
};
export const HardDriveFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰡨
    </span>
  );
};
export const PageFitFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰡬
    </span>
  );
};
export const ShapeExcludeFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰡴
    </span>
  );
};
export const NotebookFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰡺
    </span>
  );
};
export const JavascriptFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰡻
    </span>
  );
};
export const NumberCircle2FilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰢆
    </span>
  );
};
export const FilterFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰢊
    </span>
  );
};
export const WeatherCloudyFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰢒
    </span>
  );
};
export const RunFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰢘
    </span>
  );
};
export const HeadsetVrFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰢛
    </span>
  );
};
export const NumberCircle5FilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰢤
    </span>
  );
};
export const LaptopFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰢨
    </span>
  );
};
export const HeartBrokenFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰢫
    </span>
  );
};
export const WindowsFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰢱
    </span>
  );
};
export const Battery90FilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰢹
    </span>
  );
};
export const ServerLinkFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰢿
    </span>
  );
};
export const EyedropperFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰣅
    </span>
  );
};
export const PlayFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰣋
    </span>
  );
};
export const MathSymbolsFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰣏
    </span>
  );
};
export const RotationFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰣗
    </span>
  );
};
export const ParallelogramFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰣞
    </span>
  );
};
export const Battery30FilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰣡
    </span>
  );
};
export const TemperatureFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰣧
    </span>
  );
};
export const SimFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰣯
    </span>
  );
};
export const AccessibilityFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰣵
    </span>
  );
};
export const SaveFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰣼
    </span>
  );
};
export const PlaystoreFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰤄
    </span>
  );
};
export const SlideHideFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰤈
    </span>
  );
};
export const ElevatorFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰤋
    </span>
  );
};
export const SendFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰤓
    </span>
  );
};
export const PenOffFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰤙
    </span>
  );
};
export const AlbumFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰤢
    </span>
  );
};
export const EngineFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰤥
    </span>
  );
};
export const GamesFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰤩
    </span>
  );
};
export const FilmstripOffFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰤯
    </span>
  );
};
export const ShareIosFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰤵
    </span>
  );
};
export const LineDashesFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰤽
    </span>
  );
};
export const PortMicroUsbFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰥆
    </span>
  );
};
export const TextboxFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰥌
    </span>
  );
};
export const KeyboardOffFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰥏
    </span>
  );
};
export const TagFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰥓
    </span>
  );
};
export const GlobalFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰥞
    </span>
  );
};
export const ToggleRightFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰥤
    </span>
  );
};
export const Wifi2FilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰥪
    </span>
  );
};
export const BarChartHorizontalFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰥰
    </span>
  );
};
export const WandFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰥶
    </span>
  );
};
export const EqualCircleFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰥹
    </span>
  );
};
export const NotepadFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰦂
    </span>
  );
};
export const OpenFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰦆
    </span>
  );
};
export const GitFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰦌
    </span>
  );
};
export const HomeCheckmarkFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰦏
    </span>
  );
};
export const XrayFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰦕
    </span>
  );
};
export const KeyboardFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰦝
    </span>
  );
};
export const PaintBrushFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰦤
    </span>
  );
};
export const ClockFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰦧
    </span>
  );
};
export const TextboxAlignTopCenterFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰦭
    </span>
  );
};
export const RamFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰦳
    </span>
  );
};
export const KeyboardShiftFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰦾
    </span>
  );
};
export const TextboxAlignTopLeftFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰧄
    </span>
  );
};
export const WalkieTalkieFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰧇
    </span>
  );
};
export const Wifi4FilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰧋
    </span>
  );
};
export const DoorFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰧓
    </span>
  );
};
export const EmojiCoolFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰧜
    </span>
  );
};
export const BlockFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰧝
    </span>
  );
};
export const JsonFileFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰧥
    </span>
  );
};
export const Wifi3FilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰧩
    </span>
  );
};
export const ShareFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰧯
    </span>
  );
};
export const GifFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰧸
    </span>
  );
};
export const GridFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰧾
    </span>
  );
};
export const BadgeFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰨁
    </span>
  );
};
export const ToggleLeftFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰨌
    </span>
  );
};
export const NetworkCheckFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰨏
    </span>
  );
};
export const QuestionCircleFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰨖
    </span>
  );
};
export const ClipboardFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰨙
    </span>
  );
};
export const RouterFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰨡
    </span>
  );
};
export const DumbbellFilledIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-filled',
        ...props.style
      }
      {...props}
    >
      󰨧
    </span>
  );
};

// Exports
export { GavelFilledIcon };
export { DiamondFilledIcon };
export { FilmstripFilledIcon };
export { OrganizationFilledIcon };
export { CodeBlockFilledIcon };
export { FullScreenMinimizeFilledIcon };
export { ShellScriptFilledIcon };
export { PauseFilledIcon };
export { PortUsbCFilledIcon };
export { KeyboardShiftUppercaseFilledIcon };
export { LineHorizontal1FilledIcon };
export { VoteFilledIcon };
export { PowerFilledIcon };
export { PreviewLinkFilledIcon };
export { CrownFilledIcon };
export { ShieldFilledIcon };
export { NoteFilledIcon };
export { OrientationFilledIcon };
export { SettingsFilledIcon };
export { HomeFilledIcon };
export { DatabaseFilledIcon };
export { OptionsFilledIcon };
export { DustFilledIcon };
export { LuggageFilledIcon };
export { FlipVerticialFilledIcon };
export { AutosumFilledIcon };
export { PipelineFilledIcon };
export { DrawerFilledIcon };
export { NextFilledIcon };
export { MoreVerticialFilledIcon };
export { TabletFilledIcon };
export { PianoFilledIcon };
export { AppFolderFilledIcon };
export { LockClosedFilledIcon };
export { FlagFilledIcon };
export { NumberSymbolFilledIcon };
export { VideoFilledIcon };
export { EditOffFilledIcon };
export { BalloonFilledIcon };
export { MovieFilledIcon };
export { HammerFilledIcon };
export { MoreCircleFilledIcon };
export { GasFilledIcon };
export { PasswordFilledIcon };
export { ChevronLeftFilledIcon };
export { OpenOffFilledIcon };
export { PinFilledIcon };
export { SerialPortFilledIcon };
export { EyeFilledIcon };
export { ZoomOutFilledIcon };
export { MacosFilledIcon };
export { Battery80FilledIcon };
export { CalendarFilledIcon };
export { FastForwardFilledIcon };
export { BookmarkFilledIcon };
export { AddSquareFilledIcon };
export { Battery20FilledIcon };
export { CalculatorFilledIcon };
export { TextboxAlignBottomLeftFilledIcon };
export { RecordFilledIcon };
export { DeskFilledIcon };
export { WeatherSnowFilledIcon };
export { ToggleMultipleFilledIcon };
export { PulseSquareFilledIcon };
export { HourglassFilledIcon };
export { PreviousFilledIcon };
export { CloverFilledIcon };
export { RefineuiFilledIcon };
export { CheckmarkFilledIcon };
export { SlideLayoutFilledIcon };
export { VideoPlayPauseFilledIcon };
export { TextboxAlignBottomFilledIcon };
export { ChatFilledIcon };
export { UsbCableFilledIcon };
export { SmartwatchFilledIcon };
export { WaterFilledIcon };
export { HdFilledIcon };
export { DeleteFilledIcon };
export { BoardFilledIcon };
export { Battery10FilledIcon };
export { SubtractFilledIcon };
export { LocationArrowFilledIcon };
export { EmojiSadFilledIcon };
export { FullScreenMaximizeFilledIcon };
export { PythonFilledIcon };
export { VerifiedFilledIcon };
export { CssFilledIcon };
export { SportBasketballFilledIcon };
export { CursorFilledIcon };
export { RecordStopFilledIcon };
export { CouchFilledIcon };
export { CpuFilledIcon };
export { AppstoreFilledIcon };
export { HeartFilledIcon };
export { EmojiAngryFilledIcon };
export { WrenchFilledIcon };
export { HighlightFilledIcon };
export { WasherFilledIcon };
export { GanttChartFilledIcon };
export { PersonFilledIcon };
export { DartFilledIcon };
export { HighwayFilledIcon };
export { CommentFilledIcon };
export { MailFilledIcon };
export { AlertFilledIcon };
export { FlipHorizontalFilledIcon };
export { HdrOffFilledIcon };
export { HeadphonesMicFilledIcon };
export { WebFilledIcon };
export { TargetFilledIcon };
export { AlignRightFilledIcon };
export { MailboxFilledIcon };
export { MarkdownFilledIcon };
export { NumberCircle9FilledIcon };
export { CameraFilledIcon };
export { NumberCircle0FilledIcon };
export { LocationFilledIcon };
export { BarcodeScannerFilledIcon };
export { LocalLanguageFilledIcon };
export { PaymentFilledIcon };
export { SlideEraserFilledIcon };
export { ShapeUnionFilledIcon };
export { NumberCircle7FilledIcon };
export { Battery50FilledIcon };
export { TrophyFilledIcon };
export { IosChevronLtrFilledIcon };
export { SquareFilledIcon };
export { HdrFilledIcon };
export { TypescriptFilledIcon };
export { BarChartHorizontalDescendingFilledIcon };
export { CubeFilledIcon };
export { EmojiLaughFilledIcon };
export { EmojiGrimacingFilledIcon };
export { DismissCircleFilledIcon };
export { MoonFilledIcon };
export { SlideAddFilledIcon };
export { FolderFilledIcon };
export { ChartFilledIcon };
export { SquareMultipleFilledIcon };
export { ChatAddFilledIcon };
export { DoctorFilledIcon };
export { NumberSymbolCircleFilledIcon };
export { MoreHorizontalFilledIcon };
export { NumberCircle6FilledIcon };
export { ChevronUpFilledIcon };
export { TimerFilledIcon };
export { NumberCircle1FilledIcon };
export { RssFilledIcon };
export { LineHorizontal1DashesFilledIcon };
export { AccessTimeFilledIcon };
export { TextboxAlignTopRightFilledIcon };
export { Battery60FilledIcon };
export { RoadFilledIcon };
export { NumberCircle8FilledIcon };
export { CropFilledIcon };
export { EyeOffFilledIcon };
export { SportSoccerFilledIcon };
export { KeyboardTabFilledIcon };
export { OrganizationHorizontalFilledIcon };
export { PulseFilledIcon };
export { DocumentBorderFilledIcon };
export { TextboxAlignMiddleRightFilledIcon };
export { OvenFilledIcon };
export { KeyboardLockFilledIcon };
export { CodeFilledIcon };
export { ChatEmptyFilledIcon };
export { EmojiFilledIcon };
export { GuitarFilledIcon };
export { PentagonFilledIcon };
export { Wifi1FilledIcon };
export { ImportantFilledIcon };
export { MicFilledIcon };
export { KeyboardOptionFilledIcon };
export { HeadphonesFilledIcon };
export { EmojiMehFilledIcon };
export { StopFilledIcon };
export { DeleteOffFilledIcon };
export { ConeFilledIcon };
export { DesktopFilledIcon };
export { ServerFilledIcon };
export { ShapesFilledIcon };
export { SquareHintFilledIcon };
export { FrameFilledIcon };
export { CommaFilledIcon };
export { HtmlFilledIcon };
export { KotlinFilledIcon };
export { BarChartVerticalDescendingFilledIcon };
export { TextAlignJustifyFilledIcon };
export { RewindFilledIcon };
export { DualScreenFilledIcon };
export { KeyFilledIcon };
export { SpacebarFilledIcon };
export { HexagonFilledIcon };
export { BugFilledIcon };
export { HourglassHalfFilledIcon };
export { DocumentFilledIcon };
export { EmojiSurpriseFilledIcon };
export { TabFilledIcon };
export { KeyboardReturnFilledIcon };
export { TextAlignCenterFilledIcon };
export { IosChevronRtlFilledIcon };
export { AlignTopFilledIcon };
export { TvFilledIcon };
export { GlassesFilledIcon };
export { AlignLeftFilledIcon };
export { DragFilledIcon };
export { ZoomInFilledIcon };
export { MegaphoneFilledIcon };
export { PrintFilledIcon };
export { TextboxAlignBottomRightFilledIcon };
export { GiftCardFilledIcon };
export { IosFilledIcon };
export { Battery0FilledIcon };
export { ScriptFilledIcon };
export { ImageFilledIcon };
export { DentistFilledIcon };
export { QrCodeFilledIcon };
export { IotFilledIcon };
export { ScalesFilledIcon };
export { DismissFilledIcon };
export { TentFilledIcon };
export { RectangleFilledIcon };
export { GiftFilledIcon };
export { QuestionFilledIcon };
export { PortHdmiFilledIcon };
export { SearchFilledIcon };
export { AlignCenterVerticalFilledIcon };
export { DesktopMacFilledIcon };
export { MouseFilledIcon };
export { RibbonFilledIcon };
export { PenFilledIcon };
export { FolderOpenFilledIcon };
export { WeatherSunnyFilledIcon };
export { InfoFilledIcon };
export { AlertOffFilledIcon };
export { VideoClipFilledIcon };
export { ChevronRightFilledIcon };
export { OvalFilledIcon };
export { UsbFilledIcon };
export { EditFilledIcon };
export { EqualOffFilledIcon };
export { AlignCenterHorizontalFilledIcon };
export { WarningFilledIcon };
export { StarFilledIcon };
export { TextboxAlignMiddleLeftFilledIcon };
export { TextboxAlignCenterFilledIcon };
export { FlashFilledIcon };
export { KeyboardBackspaceFilledIcon };
export { WeatherThunderstormFilledIcon };
export { TextAlignLeftFilledIcon };
export { DropFilledIcon };
export { MapFilledIcon };
export { JsonFilledIcon };
export { ImageCircleFilledIcon };
export { GasStationFilledIcon };
export { LayerFilledIcon };
export { IosArrowLtrFilledIcon };
export { ServerPlayFilledIcon };
export { FireFilledIcon };
export { AddFilledIcon };
export { PortUsbAFilledIcon };
export { HourglassOneQuarterFilledIcon };
export { ShareAndroidFilledIcon };
export { ThinkingFilledIcon };
export { IncognitoFilledIcon };
export { LinkFilledIcon };
export { KeyMultipleFilledIcon };
export { CartonBoxFilledIcon };
export { NewsFilledIcon };
export { ServiceBellFilledIcon };
export { AlertBadgeFilledIcon };
export { AppTitleFilledIcon };
export { PlayCircleFilledIcon };
export { OpacityFilledIcon };
export { ErrorCircleFilledIcon };
export { LineFilledIcon };
export { SlideGridFilledIcon };
export { RhombusFilledIcon };
export { LockOpenFilledIcon };
export { RulerFilledIcon };
export { ClockAlarmFilledIcon };
export { SwiftFilledIcon };
export { SlideContentFilledIcon };
export { EarthFilledIcon };
export { PaymentWirelessFilledIcon };
export { PaintBucketFilledIcon };
export { PersonVoiceFilledIcon };
export { BlurFilledIcon };
export { SportBaseballFilledIcon };
export { RadioButtonFilledIcon };
export { BluetoothFilledIcon };
export { PauseCircleFilledIcon };
export { AndroidFilledIcon };
export { TextAlignRightFilledIcon };
export { AirplaneFilledIcon };
export { ToolboxFilledIcon };
export { GuestFilledIcon };
export { HatGraduationFilledIcon };
export { TextboxAlignTopFilledIcon };
export { WeatherBlowingSnowFilledIcon };
export { CloudFilledIcon };
export { BarChartVerticalFilledIcon };
export { Battery70FilledIcon };
export { CutFilledIcon };
export { ShoppingBagFilledIcon };
export { FlashlightOffFilledIcon };
export { BookFilledIcon };
export { ShapeIntersectFilledIcon };
export { Battery100FilledIcon };
export { HourglassThreeQuarterFilledIcon };
export { RoadConeFilledIcon };
export { UmbrellaFilledIcon };
export { WalletFilledIcon };
export { CartFilledIcon };
export { PhoneFilledIcon };
export { PaddingFilledIcon };
export { ZoomFilledIcon };
export { SoundSourceFilledIcon };
export { TicketFilledIcon };
export { EqualFilledIcon };
export { BackspaceFilledIcon };
export { ChessFilledIcon };
export { AddCircleFilledIcon };
export { AppRecentFilledIcon };
export { ShapeSubtractFilledIcon };
export { ChevronDownFilledIcon };
export { FlashlightFilledIcon };
export { PulseCircleFilledIcon };
export { AlignBottomFilledIcon };
export { Battery40FilledIcon };
export { IosArrowRtlFilledIcon };
export { MailReadFilledIcon };
export { KioskFilledIcon };
export { KeyboardCommandFilledIcon };
export { CopyFilledIcon };
export { CircleFilledIcon };
export { WeatherSnowflakeFilledIcon };
export { DialpadFilledIcon };
export { FlagOffFilledIcon };
export { VoicemailFilledIcon };
export { ContrastFilledIcon };
export { CookieFilledIcon };
export { WeatherRainFilledIcon };
export { DismissSquareFilledIcon };
export { NumberCircle4FilledIcon };
export { NumberCircle3FilledIcon };
export { LightbulbFilledIcon };
export { RocketFilledIcon };
export { NumberSymbolSquareFilledIcon };
export { TextFilledIcon };
export { ControlButtonFilledIcon };
export { EyedropperOffFilledIcon };
export { JoystickFilledIcon };
export { SprayCanFilledIcon };
export { TextboxAlignMiddleFilledIcon };
export { FlashOffFilledIcon };
export { TextboxAlignBottomCenterFilledIcon };
export { BackpackFilledIcon };
export { HardDriveFilledIcon };
export { PageFitFilledIcon };
export { ShapeExcludeFilledIcon };
export { NotebookFilledIcon };
export { JavascriptFilledIcon };
export { NumberCircle2FilledIcon };
export { FilterFilledIcon };
export { WeatherCloudyFilledIcon };
export { RunFilledIcon };
export { HeadsetVrFilledIcon };
export { NumberCircle5FilledIcon };
export { LaptopFilledIcon };
export { HeartBrokenFilledIcon };
export { WindowsFilledIcon };
export { Battery90FilledIcon };
export { ServerLinkFilledIcon };
export { EyedropperFilledIcon };
export { PlayFilledIcon };
export { MathSymbolsFilledIcon };
export { RotationFilledIcon };
export { ParallelogramFilledIcon };
export { Battery30FilledIcon };
export { TemperatureFilledIcon };
export { SimFilledIcon };
export { AccessibilityFilledIcon };
export { SaveFilledIcon };
export { PlaystoreFilledIcon };
export { SlideHideFilledIcon };
export { ElevatorFilledIcon };
export { SendFilledIcon };
export { PenOffFilledIcon };
export { AlbumFilledIcon };
export { EngineFilledIcon };
export { GamesFilledIcon };
export { FilmstripOffFilledIcon };
export { ShareIosFilledIcon };
export { LineDashesFilledIcon };
export { PortMicroUsbFilledIcon };
export { TextboxFilledIcon };
export { KeyboardOffFilledIcon };
export { TagFilledIcon };
export { GlobalFilledIcon };
export { ToggleRightFilledIcon };
export { Wifi2FilledIcon };
export { BarChartHorizontalFilledIcon };
export { WandFilledIcon };
export { EqualCircleFilledIcon };
export { NotepadFilledIcon };
export { OpenFilledIcon };
export { GitFilledIcon };
export { HomeCheckmarkFilledIcon };
export { XrayFilledIcon };
export { KeyboardFilledIcon };
export { PaintBrushFilledIcon };
export { ClockFilledIcon };
export { TextboxAlignTopCenterFilledIcon };
export { RamFilledIcon };
export { KeyboardShiftFilledIcon };
export { TextboxAlignTopLeftFilledIcon };
export { WalkieTalkieFilledIcon };
export { Wifi4FilledIcon };
export { DoorFilledIcon };
export { EmojiCoolFilledIcon };
export { BlockFilledIcon };
export { JsonFileFilledIcon };
export { Wifi3FilledIcon };
export { ShareFilledIcon };
export { GifFilledIcon };
export { GridFilledIcon };
export { BadgeFilledIcon };
export { ToggleLeftFilledIcon };
export { NetworkCheckFilledIcon };
export { QuestionCircleFilledIcon };
export { ClipboardFilledIcon };
export { RouterFilledIcon };
export { DumbbellFilledIcon };

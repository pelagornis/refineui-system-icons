import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  style?: React.CSSProperties;
  className?: string;
  onClick?: () => void;
}

// Icon Components
export const GavelRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰀂
    </span>
  );
};
export const DiamondRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰀈
    </span>
  );
};
export const FilmstripRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰀍
    </span>
  );
};
export const OrganizationRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰀕
    </span>
  );
};
export const CodeBlockRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰀚
    </span>
  );
};
export const FullScreenMinimizeRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰀠
    </span>
  );
};
export const ShellScriptRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰀨
    </span>
  );
};
export const PauseRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰀭
    </span>
  );
};
export const PortUsbCRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰀱
    </span>
  );
};
export const KeyboardShiftUppercaseRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰀺
    </span>
  );
};
export const LineHorizontal1RegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰀿
    </span>
  );
};
export const VoteRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰁆
    </span>
  );
};
export const PowerRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰁉
    </span>
  );
};
export const PreviewLinkRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰁏
    </span>
  );
};
export const CrownRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰁗
    </span>
  );
};
export const ShieldRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰁛
    </span>
  );
};
export const NoteRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰁢
    </span>
  );
};
export const OrientationRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰁩
    </span>
  );
};
export const SettingsRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰁮
    </span>
  );
};
export const HomeRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰁵
    </span>
  );
};
export const DatabaseRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰁽
    </span>
  );
};
export const OptionsRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰂁
    </span>
  );
};
export const DustRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰂈
    </span>
  );
};
export const LuggageRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰂍
    </span>
  );
};
export const FlipVerticialRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰂑
    </span>
  );
};
export const AutosumRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰂛
    </span>
  );
};
export const PipelineRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰂞
    </span>
  );
};
export const DrawerRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰂤
    </span>
  );
};
export const NextRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰂭
    </span>
  );
};
export const MoreVerticialRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰂱
    </span>
  );
};
export const TabletRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰂷
    </span>
  );
};
export const PianoRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰂾
    </span>
  );
};
export const AppFolderRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰃁
    </span>
  );
};
export const LockClosedRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰃉
    </span>
  );
};
export const FlagRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰃐
    </span>
  );
};
export const NumberSymbolRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰃕
    </span>
  );
};
export const VideoRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰃜
    </span>
  );
};
export const EditOffRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰃟
    </span>
  );
};
export const BalloonRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰃤
    </span>
  );
};
export const MovieRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰃭
    </span>
  );
};
export const HammerRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰃴
    </span>
  );
};
export const MoreCircleRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰃺
    </span>
  );
};
export const GasRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰄀
    </span>
  );
};
export const PasswordRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰄆
    </span>
  );
};
export const ChevronLeftRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰄋
    </span>
  );
};
export const OpenOffRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰄑
    </span>
  );
};
export const PinRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰄖
    </span>
  );
};
export const SerialPortRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰄝
    </span>
  );
};
export const EyeRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰄣
    </span>
  );
};
export const ZoomOutRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰄩
    </span>
  );
};
export const MacosRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰄰
    </span>
  );
};
export const Battery80RegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰄵
    </span>
  );
};
export const CalendarRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰄼
    </span>
  );
};
export const FastForwardRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰄿
    </span>
  );
};
export const BookmarkRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰅇
    </span>
  );
};
export const AddSquareRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰅍
    </span>
  );
};
export const Battery20RegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰅒
    </span>
  );
};
export const CalculatorRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰅚
    </span>
  );
};
export const TextboxAlignBottomLeftRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰅟
    </span>
  );
};
export const RecordRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰅤
    </span>
  );
};
export const DeskRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰅩
    </span>
  );
};
export const WeatherSnowRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰅲
    </span>
  );
};
export const ToggleMultipleRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰅶
    </span>
  );
};
export const PulseSquareRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰅽
    </span>
  );
};
export const HourglassRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰆂
    </span>
  );
};
export const PreviousRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰆉
    </span>
  );
};
export const CloverRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰆏
    </span>
  );
};
export const RefineuiRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰆖
    </span>
  );
};
export const CheckmarkRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰆜
    </span>
  );
};
export const SlideLayoutRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰆡
    </span>
  );
};
export const VideoPlayPauseRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰆦
    </span>
  );
};
export const TextboxAlignBottomRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰆭
    </span>
  );
};
export const ChatRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰆱
    </span>
  );
};
export const UsbCableRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰆺
    </span>
  );
};
export const SmartwatchRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰆿
    </span>
  );
};
export const WaterRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰇅
    </span>
  );
};
export const HdRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰇊
    </span>
  );
};
export const DeleteRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰇑
    </span>
  );
};
export const BoardRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰇖
    </span>
  );
};
export const Battery10RegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰇜
    </span>
  );
};
export const SubtractRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰇣
    </span>
  );
};
export const LocationArrowRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰇨
    </span>
  );
};
export const EmojiSadRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰇭
    </span>
  );
};
export const FullScreenMaximizeRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰇶
    </span>
  );
};
export const PythonRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰇺
    </span>
  );
};
export const VerifiedRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰈀
    </span>
  );
};
export const CssRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰈇
    </span>
  );
};
export const SportBasketballRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰈌
    </span>
  );
};
export const CursorRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰈐
    </span>
  );
};
export const RecordStopRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰈗
    </span>
  );
};
export const CouchRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰈟
    </span>
  );
};
export const CpuRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰈥
    </span>
  );
};
export const AppstoreRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰈫
    </span>
  );
};
export const HeartRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰈱
    </span>
  );
};
export const EmojiAngryRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰈵
    </span>
  );
};
export const WrenchRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰈼
    </span>
  );
};
export const HighlightRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰉁
    </span>
  );
};
export const WasherRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰉉
    </span>
  );
};
export const GanttChartRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰉌
    </span>
  );
};
export const PersonRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰉖
    </span>
  );
};
export const DartRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰉜
    </span>
  );
};
export const HighwayRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰉟
    </span>
  );
};
export const CommentRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰉥
    </span>
  );
};
export const MailRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰉬
    </span>
  );
};
export const AlertRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰉲
    </span>
  );
};
export const FlipHorizontalRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰉺
    </span>
  );
};
export const HdrOffRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰉽
    </span>
  );
};
export const HeadphonesMicRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰊄
    </span>
  );
};
export const WebRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰊊
    </span>
  );
};
export const TargetRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰊑
    </span>
  );
};
export const AlignRightRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰊖
    </span>
  );
};
export const MailboxRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰊝
    </span>
  );
};
export const MarkdownRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰊡
    </span>
  );
};
export const NumberCircle9RegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰊧
    </span>
  );
};
export const CameraRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰊭
    </span>
  );
};
export const NumberCircle0RegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰊵
    </span>
  );
};
export const LocationRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰊺
    </span>
  );
};
export const BarcodeScannerRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰋀
    </span>
  );
};
export const LocalLanguageRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰋅
    </span>
  );
};
export const PaymentRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰋌
    </span>
  );
};
export const SlideEraserRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰋐
    </span>
  );
};
export const ShapeUnionRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰋘
    </span>
  );
};
export const NumberCircle7RegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰋟
    </span>
  );
};
export const Battery50RegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰋥
    </span>
  );
};
export const TrophyRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰋫
    </span>
  );
};
export const IosChevronLtrRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰋱
    </span>
  );
};
export const SquareRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰋷
    </span>
  );
};
export const HdrRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰋽
    </span>
  );
};
export const TypescriptRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰌂
    </span>
  );
};
export const BarChartHorizontalDescendingRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰌉
    </span>
  );
};
export const CubeRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰌎
    </span>
  );
};
export const EmojiLaughRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰌕
    </span>
  );
};
export const EmojiGrimacingRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰌙
    </span>
  );
};
export const DismissCircleRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰌡
    </span>
  );
};
export const MoonRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰌧
    </span>
  );
};
export const SlideAddRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰌬
    </span>
  );
};
export const FolderRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰌱
    </span>
  );
};
export const ChartRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰌹
    </span>
  );
};
export const SquareMultipleRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰍁
    </span>
  );
};
export const ChatAddRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰍄
    </span>
  );
};
export const DoctorRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰍊
    </span>
  );
};
export const NumberSymbolCircleRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰍒
    </span>
  );
};
export const MoreHorizontalRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰍕
    </span>
  );
};
export const NumberCircle6RegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰍝
    </span>
  );
};
export const ChevronUpRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰍣
    </span>
  );
};
export const TimerRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰍩
    </span>
  );
};
export const NumberCircle1RegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰍯
    </span>
  );
};
export const RssRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰍳
    </span>
  );
};
export const LineHorizontal1DashesRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰍺
    </span>
  );
};
export const AccessTimeRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰎀
    </span>
  );
};
export const TextboxAlignTopRightRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰎇
    </span>
  );
};
export const Battery60RegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰎋
    </span>
  );
};
export const RoadRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰎕
    </span>
  );
};
export const NumberCircle8RegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰎙
    </span>
  );
};
export const CropRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰎟
    </span>
  );
};
export const EyeOffRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰎥
    </span>
  );
};
export const SportSoccerRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰎭
    </span>
  );
};
export const KeyboardTabRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰎯
    </span>
  );
};
export const OrganizationHorizontalRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰎷
    </span>
  );
};
export const PulseRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰎼
    </span>
  );
};
export const DocumentBorderRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰏃
    </span>
  );
};
export const TextboxAlignMiddleRightRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰏉
    </span>
  );
};
export const OvenRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰏐
    </span>
  );
};
export const KeyboardLockRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰏔
    </span>
  );
};
export const CodeRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰏛
    </span>
  );
};
export const ChatEmptyRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰏟
    </span>
  );
};
export const EmojiRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰏧
    </span>
  );
};
export const GuitarRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰏭
    </span>
  );
};
export const PentagonRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰏲
    </span>
  );
};
export const Wifi1RegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰏷
    </span>
  );
};
export const ImportantRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰐁
    </span>
  );
};
export const MicRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰐆
    </span>
  );
};
export const KeyboardOptionRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰐋
    </span>
  );
};
export const HeadphonesRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰐏
    </span>
  );
};
export const EmojiMehRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰐖
    </span>
  );
};
export const StopRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰐝
    </span>
  );
};
export const DeleteOffRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰐣
    </span>
  );
};
export const ConeRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰐨
    </span>
  );
};
export const DesktopRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰐯
    </span>
  );
};
export const ServerRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰐳
    </span>
  );
};
export const ShapesRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰐹
    </span>
  );
};
export const SquareHintRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰑁
    </span>
  );
};
export const FrameRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰑆
    </span>
  );
};
export const CommaRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰑋
    </span>
  );
};
export const HtmlRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰑑
    </span>
  );
};
export const KotlinRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰑘
    </span>
  );
};
export const BarChartVerticalDescendingRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰑡
    </span>
  );
};
export const TextAlignJustifyRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰑤
    </span>
  );
};
export const RewindRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰑨
    </span>
  );
};
export const DualScreenRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰑲
    </span>
  );
};
export const KeyRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰑷
    </span>
  );
};
export const SpacebarRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰑼
    </span>
  );
};
export const HexagonRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰒁
    </span>
  );
};
export const BugRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰒇
    </span>
  );
};
export const HourglassHalfRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰒑
    </span>
  );
};
export const DocumentRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰒖
    </span>
  );
};
export const EmojiSurpriseRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰒝
    </span>
  );
};
export const TabRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰒟
    </span>
  );
};
export const KeyboardReturnRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰒥
    </span>
  );
};
export const TextAlignCenterRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰒬
    </span>
  );
};
export const IosChevronRtlRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰒰
    </span>
  );
};
export const AlignTopRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰒸
    </span>
  );
};
export const TvRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰓀
    </span>
  );
};
export const GlassesRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰓄
    </span>
  );
};
export const AlignLeftRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰓊
    </span>
  );
};
export const DragRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰓒
    </span>
  );
};
export const ZoomInRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰓙
    </span>
  );
};
export const MegaphoneRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰓚
    </span>
  );
};
export const PrintRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰓢
    </span>
  );
};
export const TextboxAlignBottomRightRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰓩
    </span>
  );
};
export const GiftCardRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰓬
    </span>
  );
};
export const IosRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰓴
    </span>
  );
};
export const Battery0RegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰓺
    </span>
  );
};
export const ScriptRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰔀
    </span>
  );
};
export const ImageRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰔆
    </span>
  );
};
export const DentistRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰔍
    </span>
  );
};
export const QrCodeRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰔒
    </span>
  );
};
export const IotRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰔘
    </span>
  );
};
export const ScalesRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰔠
    </span>
  );
};
export const DismissRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰔧
    </span>
  );
};
export const TentRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰔪
    </span>
  );
};
export const RectangleRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰔱
    </span>
  );
};
export const GiftRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰔶
    </span>
  );
};
export const QuestionRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰔾
    </span>
  );
};
export const PortHdmiRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰕂
    </span>
  );
};
export const SearchRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰕉
    </span>
  );
};
export const AlignCenterVerticalRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰕎
    </span>
  );
};
export const DesktopMacRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰕔
    </span>
  );
};
export const MouseRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰕚
    </span>
  );
};
export const RibbonRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰕠
    </span>
  );
};
export const PenRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰕩
    </span>
  );
};
export const FolderOpenRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰕬
    </span>
  );
};
export const WeatherSunnyRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰕳
    </span>
  );
};
export const InfoRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰕸
    </span>
  );
};
export const AlertOffRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰖁
    </span>
  );
};
export const VideoClipRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰖃
    </span>
  );
};
export const ChevronRightRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰖈
    </span>
  );
};
export const OvalRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰖐
    </span>
  );
};
export const UsbRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰖗
    </span>
  );
};
export const EditRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰖜
    </span>
  );
};
export const EqualOffRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰖢
    </span>
  );
};
export const AlignCenterHorizontalRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰖪
    </span>
  );
};
export const WarningRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰖰
    </span>
  );
};
export const StarRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰖴
    </span>
  );
};
export const TextboxAlignMiddleLeftRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰖻
    </span>
  );
};
export const TextboxAlignCenterRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰗁
    </span>
  );
};
export const FlashRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰗅
    </span>
  );
};
export const KeyboardBackspaceRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰗌
    </span>
  );
};
export const WeatherThunderstormRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰗒
    </span>
  );
};
export const TextAlignLeftRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰗙
    </span>
  );
};
export const DropRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰗞
    </span>
  );
};
export const MapRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰗥
    </span>
  );
};
export const JsonRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰗪
    </span>
  );
};
export const ImageCircleRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰗱
    </span>
  );
};
export const GasStationRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰗷
    </span>
  );
};
export const LayerRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰗾
    </span>
  );
};
export const IosArrowLtrRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰘂
    </span>
  );
};
export const ServerPlayRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰘉
    </span>
  );
};
export const FireRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰘐
    </span>
  );
};
export const AddRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰘓
    </span>
  );
};
export const PortUsbARegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰘜
    </span>
  );
};
export const HourglassOneQuarterRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰘠
    </span>
  );
};
export const ShareAndroidRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰘨
    </span>
  );
};
export const ThinkingRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰘬
    </span>
  );
};
export const IncognitoRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰘲
    </span>
  );
};
export const LinkRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰘷
    </span>
  );
};
export const KeyMultipleRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰙀
    </span>
  );
};
export const CartonBoxRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰙅
    </span>
  );
};
export const NewsRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰙌
    </span>
  );
};
export const ServiceBellRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰙏
    </span>
  );
};
export const AlertBadgeRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰙘
    </span>
  );
};
export const AppTitleRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰙜
    </span>
  );
};
export const PlayCircleRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰙢
    </span>
  );
};
export const OpacityRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰙧
    </span>
  );
};
export const ErrorCircleRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰙰
    </span>
  );
};
export const LineRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰙵
    </span>
  );
};
export const SlideGridRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰙻
    </span>
  );
};
export const RhombusRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰚀
    </span>
  );
};
export const LockOpenRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰚇
    </span>
  );
};
export const RulerRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰚌
    </span>
  );
};
export const ClockAlarmRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰚒
    </span>
  );
};
export const SwiftRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰚚
    </span>
  );
};
export const SlideContentRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰚟
    </span>
  );
};
export const EarthRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰚤
    </span>
  );
};
export const PaymentWirelessRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰚫
    </span>
  );
};
export const PaintBucketRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰚳
    </span>
  );
};
export const PersonVoiceRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰚷
    </span>
  );
};
export const BlurRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰚽
    </span>
  );
};
export const SportBaseballRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰛅
    </span>
  );
};
export const RadioButtonRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰛈
    </span>
  );
};
export const BluetoothRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰛏
    </span>
  );
};
export const PauseCircleRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰛔
    </span>
  );
};
export const AndroidRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰛛
    </span>
  );
};
export const TextAlignRightRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰛟
    </span>
  );
};
export const AirplaneRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰛦
    </span>
  );
};
export const ToolboxRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰛯
    </span>
  );
};
export const GuestRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰛱
    </span>
  );
};
export const HatGraduationRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰛺
    </span>
  );
};
export const TextboxAlignTopRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰛿
    </span>
  );
};
export const WeatherBlowingSnowRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰜃
    </span>
  );
};
export const CloudRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰜉
    </span>
  );
};
export const BarChartVerticalRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰜐
    </span>
  );
};
export const Battery70RegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰜘
    </span>
  );
};
export const CutRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰜝
    </span>
  );
};
export const ShoppingBagRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰜡
    </span>
  );
};
export const FlashlightOffRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰜨
    </span>
  );
};
export const BookRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰜮
    </span>
  );
};
export const ShapeIntersectRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰜵
    </span>
  );
};
export const Battery100RegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰜺
    </span>
  );
};
export const HourglassThreeQuarterRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰝀
    </span>
  );
};
export const RoadConeRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰝆
    </span>
  );
};
export const UmbrellaRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰝌
    </span>
  );
};
export const WalletRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰝔
    </span>
  );
};
export const CartRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰝛
    </span>
  );
};
export const PhoneRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰝠
    </span>
  );
};
export const PaddingRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰝤
    </span>
  );
};
export const ZoomRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰝪
    </span>
  );
};
export const SoundSourceRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰝱
    </span>
  );
};
export const TicketRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰝷
    </span>
  );
};
export const EqualRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰝼
    </span>
  );
};
export const BackspaceRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰞄
    </span>
  );
};
export const ChessRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰞈
    </span>
  );
};
export const AddCircleRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰞍
    </span>
  );
};
export const AppRecentRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰞕
    </span>
  );
};
export const ShapeSubtractRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰞘
    </span>
  );
};
export const ChevronDownRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰞢
    </span>
  );
};
export const FlashlightRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰞧
    </span>
  );
};
export const PulseCircleRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰞫
    </span>
  );
};
export const AlignBottomRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰞴
    </span>
  );
};
export const Battery40RegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰞸
    </span>
  );
};
export const IosArrowRtlRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰞿
    </span>
  );
};
export const MailReadRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰟅
    </span>
  );
};
export const KioskRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰟊
    </span>
  );
};
export const KeyboardCommandRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰟒
    </span>
  );
};
export const CopyRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰟗
    </span>
  );
};
export const CircleRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰟝
    </span>
  );
};
export const WeatherSnowflakeRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰟥
    </span>
  );
};
export const DialpadRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰟪
    </span>
  );
};
export const FlagOffRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰟰
    </span>
  );
};
export const VoicemailRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰟵
    </span>
  );
};
export const ContrastRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰟼
    </span>
  );
};
export const CookieRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰠁
    </span>
  );
};
export const WeatherRainRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰠆
    </span>
  );
};
export const DismissSquareRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰠍
    </span>
  );
};
export const NumberCircle4RegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰠒
    </span>
  );
};
export const NumberCircle3RegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰠘
    </span>
  );
};
export const LightbulbRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰠠
    </span>
  );
};
export const RocketRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰠦
    </span>
  );
};
export const NumberSymbolSquareRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰠬
    </span>
  );
};
export const TextRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰠰
    </span>
  );
};
export const ControlButtonRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰠷
    </span>
  );
};
export const EyedropperOffRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰠼
    </span>
  );
};
export const JoystickRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰡃
    </span>
  );
};
export const SprayCanRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰡊
    </span>
  );
};
export const TextboxAlignMiddleRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰡏
    </span>
  );
};
export const FlashOffRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰡕
    </span>
  );
};
export const TextboxAlignBottomCenterRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰡝
    </span>
  );
};
export const BackpackRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰡟
    </span>
  );
};
export const HardDriveRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰡥
    </span>
  );
};
export const PageFitRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰡬
    </span>
  );
};
export const ShapeExcludeRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰡲
    </span>
  );
};
export const NotebookRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰡸
    </span>
  );
};
export const JavascriptRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰡿
    </span>
  );
};
export const NumberCircle2RegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰢂
    </span>
  );
};
export const FilterRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰢋
    </span>
  );
};
export const WeatherCloudyRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰢒
    </span>
  );
};
export const RunRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰢖
    </span>
  );
};
export const HeadsetVrRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰢝
    </span>
  );
};
export const NumberCircle5RegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰢠
    </span>
  );
};
export const LaptopRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰢨
    </span>
  );
};
export const HeartBrokenRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰢭
    </span>
  );
};
export const WindowsRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰢵
    </span>
  );
};
export const Battery90RegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰢸
    </span>
  );
};
export const ServerLinkRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰣁
    </span>
  );
};
export const EyedropperRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰣇
    </span>
  );
};
export const PlayRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰣍
    </span>
  );
};
export const MathSymbolsRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰣓
    </span>
  );
};
export const RotationRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰣗
    </span>
  );
};
export const ParallelogramRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰣟
    </span>
  );
};
export const Battery30RegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰣧
    </span>
  );
};
export const TemperatureRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰣩
    </span>
  );
};
export const SimRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰣱
    </span>
  );
};
export const AccessibilityRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰣸
    </span>
  );
};
export const SaveRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰣻
    </span>
  );
};
export const PlaystoreRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰤂
    </span>
  );
};
export const SlideHideRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰤉
    </span>
  );
};
export const ElevatorRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰤍
    </span>
  );
};
export const SendRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰤕
    </span>
  );
};
export const PenOffRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰤙
    </span>
  );
};
export const AlbumRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰤟
    </span>
  );
};
export const EngineRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰤦
    </span>
  );
};
export const GamesRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰤮
    </span>
  );
};
export const FilmstripOffRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰤲
    </span>
  );
};
export const ShareIosRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰤺
    </span>
  );
};
export const LineDashesRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰤼
    </span>
  );
};
export const PortMicroUsbRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰥅
    </span>
  );
};
export const TextboxRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰥋
    </span>
  );
};
export const KeyboardOffRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰥑
    </span>
  );
};
export const TagRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰥖
    </span>
  );
};
export const GlobalRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰥞
    </span>
  );
};
export const ToggleRightRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰥣
    </span>
  );
};
export const Wifi2RegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰥨
    </span>
  );
};
export const BarChartHorizontalRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰥮
    </span>
  );
};
export const WandRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰥴
    </span>
  );
};
export const EqualCircleRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰥼
    </span>
  );
};
export const NotepadRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰦀
    </span>
  );
};
export const OpenRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰦇
    </span>
  );
};
export const GitRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰦌
    </span>
  );
};
export const HomeCheckmarkRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰦒
    </span>
  );
};
export const XrayRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰦗
    </span>
  );
};
export const KeyboardRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰦞
    </span>
  );
};
export const PaintBrushRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰦥
    </span>
  );
};
export const ClockRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰦫
    </span>
  );
};
export const TextboxAlignTopCenterRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰦰
    </span>
  );
};
export const RamRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰦸
    </span>
  );
};
export const KeyboardShiftRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰦾
    </span>
  );
};
export const TextboxAlignTopLeftRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰧄
    </span>
  );
};
export const WalkieTalkieRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰧈
    </span>
  );
};
export const Wifi4RegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰧐
    </span>
  );
};
export const DoorRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰧖
    </span>
  );
};
export const EmojiCoolRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰧙
    </span>
  );
};
export const BlockRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰧟
    </span>
  );
};
export const JsonFileRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰧧
    </span>
  );
};
export const Wifi3RegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰧮
    </span>
  );
};
export const ShareRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰧳
    </span>
  );
};
export const GifRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰧷
    </span>
  );
};
export const GridRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰨁
    </span>
  );
};
export const BadgeRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰨄
    </span>
  );
};
export const ToggleLeftRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰨋
    </span>
  );
};
export const NetworkCheckRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰨑
    </span>
  );
};
export const QuestionCircleRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰨕
    </span>
  );
};
export const ClipboardRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰨞
    </span>
  );
};
export const RouterRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰨣
    </span>
  );
};
export const DumbbellRegularIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <span
      style={
        fontSize: size,
        color: color,
        fontFamily: 'refineui-system-icons-regular',
        ...props.style
      }
      {...props}
    >
      󰨧
    </span>
  );
};

// Exports
export { GavelRegularIcon };
export { DiamondRegularIcon };
export { FilmstripRegularIcon };
export { OrganizationRegularIcon };
export { CodeBlockRegularIcon };
export { FullScreenMinimizeRegularIcon };
export { ShellScriptRegularIcon };
export { PauseRegularIcon };
export { PortUsbCRegularIcon };
export { KeyboardShiftUppercaseRegularIcon };
export { LineHorizontal1RegularIcon };
export { VoteRegularIcon };
export { PowerRegularIcon };
export { PreviewLinkRegularIcon };
export { CrownRegularIcon };
export { ShieldRegularIcon };
export { NoteRegularIcon };
export { OrientationRegularIcon };
export { SettingsRegularIcon };
export { HomeRegularIcon };
export { DatabaseRegularIcon };
export { OptionsRegularIcon };
export { DustRegularIcon };
export { LuggageRegularIcon };
export { FlipVerticialRegularIcon };
export { AutosumRegularIcon };
export { PipelineRegularIcon };
export { DrawerRegularIcon };
export { NextRegularIcon };
export { MoreVerticialRegularIcon };
export { TabletRegularIcon };
export { PianoRegularIcon };
export { AppFolderRegularIcon };
export { LockClosedRegularIcon };
export { FlagRegularIcon };
export { NumberSymbolRegularIcon };
export { VideoRegularIcon };
export { EditOffRegularIcon };
export { BalloonRegularIcon };
export { MovieRegularIcon };
export { HammerRegularIcon };
export { MoreCircleRegularIcon };
export { GasRegularIcon };
export { PasswordRegularIcon };
export { ChevronLeftRegularIcon };
export { OpenOffRegularIcon };
export { PinRegularIcon };
export { SerialPortRegularIcon };
export { EyeRegularIcon };
export { ZoomOutRegularIcon };
export { MacosRegularIcon };
export { Battery80RegularIcon };
export { CalendarRegularIcon };
export { FastForwardRegularIcon };
export { BookmarkRegularIcon };
export { AddSquareRegularIcon };
export { Battery20RegularIcon };
export { CalculatorRegularIcon };
export { TextboxAlignBottomLeftRegularIcon };
export { RecordRegularIcon };
export { DeskRegularIcon };
export { WeatherSnowRegularIcon };
export { ToggleMultipleRegularIcon };
export { PulseSquareRegularIcon };
export { HourglassRegularIcon };
export { PreviousRegularIcon };
export { CloverRegularIcon };
export { RefineuiRegularIcon };
export { CheckmarkRegularIcon };
export { SlideLayoutRegularIcon };
export { VideoPlayPauseRegularIcon };
export { TextboxAlignBottomRegularIcon };
export { ChatRegularIcon };
export { UsbCableRegularIcon };
export { SmartwatchRegularIcon };
export { WaterRegularIcon };
export { HdRegularIcon };
export { DeleteRegularIcon };
export { BoardRegularIcon };
export { Battery10RegularIcon };
export { SubtractRegularIcon };
export { LocationArrowRegularIcon };
export { EmojiSadRegularIcon };
export { FullScreenMaximizeRegularIcon };
export { PythonRegularIcon };
export { VerifiedRegularIcon };
export { CssRegularIcon };
export { SportBasketballRegularIcon };
export { CursorRegularIcon };
export { RecordStopRegularIcon };
export { CouchRegularIcon };
export { CpuRegularIcon };
export { AppstoreRegularIcon };
export { HeartRegularIcon };
export { EmojiAngryRegularIcon };
export { WrenchRegularIcon };
export { HighlightRegularIcon };
export { WasherRegularIcon };
export { GanttChartRegularIcon };
export { PersonRegularIcon };
export { DartRegularIcon };
export { HighwayRegularIcon };
export { CommentRegularIcon };
export { MailRegularIcon };
export { AlertRegularIcon };
export { FlipHorizontalRegularIcon };
export { HdrOffRegularIcon };
export { HeadphonesMicRegularIcon };
export { WebRegularIcon };
export { TargetRegularIcon };
export { AlignRightRegularIcon };
export { MailboxRegularIcon };
export { MarkdownRegularIcon };
export { NumberCircle9RegularIcon };
export { CameraRegularIcon };
export { NumberCircle0RegularIcon };
export { LocationRegularIcon };
export { BarcodeScannerRegularIcon };
export { LocalLanguageRegularIcon };
export { PaymentRegularIcon };
export { SlideEraserRegularIcon };
export { ShapeUnionRegularIcon };
export { NumberCircle7RegularIcon };
export { Battery50RegularIcon };
export { TrophyRegularIcon };
export { IosChevronLtrRegularIcon };
export { SquareRegularIcon };
export { HdrRegularIcon };
export { TypescriptRegularIcon };
export { BarChartHorizontalDescendingRegularIcon };
export { CubeRegularIcon };
export { EmojiLaughRegularIcon };
export { EmojiGrimacingRegularIcon };
export { DismissCircleRegularIcon };
export { MoonRegularIcon };
export { SlideAddRegularIcon };
export { FolderRegularIcon };
export { ChartRegularIcon };
export { SquareMultipleRegularIcon };
export { ChatAddRegularIcon };
export { DoctorRegularIcon };
export { NumberSymbolCircleRegularIcon };
export { MoreHorizontalRegularIcon };
export { NumberCircle6RegularIcon };
export { ChevronUpRegularIcon };
export { TimerRegularIcon };
export { NumberCircle1RegularIcon };
export { RssRegularIcon };
export { LineHorizontal1DashesRegularIcon };
export { AccessTimeRegularIcon };
export { TextboxAlignTopRightRegularIcon };
export { Battery60RegularIcon };
export { RoadRegularIcon };
export { NumberCircle8RegularIcon };
export { CropRegularIcon };
export { EyeOffRegularIcon };
export { SportSoccerRegularIcon };
export { KeyboardTabRegularIcon };
export { OrganizationHorizontalRegularIcon };
export { PulseRegularIcon };
export { DocumentBorderRegularIcon };
export { TextboxAlignMiddleRightRegularIcon };
export { OvenRegularIcon };
export { KeyboardLockRegularIcon };
export { CodeRegularIcon };
export { ChatEmptyRegularIcon };
export { EmojiRegularIcon };
export { GuitarRegularIcon };
export { PentagonRegularIcon };
export { Wifi1RegularIcon };
export { ImportantRegularIcon };
export { MicRegularIcon };
export { KeyboardOptionRegularIcon };
export { HeadphonesRegularIcon };
export { EmojiMehRegularIcon };
export { StopRegularIcon };
export { DeleteOffRegularIcon };
export { ConeRegularIcon };
export { DesktopRegularIcon };
export { ServerRegularIcon };
export { ShapesRegularIcon };
export { SquareHintRegularIcon };
export { FrameRegularIcon };
export { CommaRegularIcon };
export { HtmlRegularIcon };
export { KotlinRegularIcon };
export { BarChartVerticalDescendingRegularIcon };
export { TextAlignJustifyRegularIcon };
export { RewindRegularIcon };
export { DualScreenRegularIcon };
export { KeyRegularIcon };
export { SpacebarRegularIcon };
export { HexagonRegularIcon };
export { BugRegularIcon };
export { HourglassHalfRegularIcon };
export { DocumentRegularIcon };
export { EmojiSurpriseRegularIcon };
export { TabRegularIcon };
export { KeyboardReturnRegularIcon };
export { TextAlignCenterRegularIcon };
export { IosChevronRtlRegularIcon };
export { AlignTopRegularIcon };
export { TvRegularIcon };
export { GlassesRegularIcon };
export { AlignLeftRegularIcon };
export { DragRegularIcon };
export { ZoomInRegularIcon };
export { MegaphoneRegularIcon };
export { PrintRegularIcon };
export { TextboxAlignBottomRightRegularIcon };
export { GiftCardRegularIcon };
export { IosRegularIcon };
export { Battery0RegularIcon };
export { ScriptRegularIcon };
export { ImageRegularIcon };
export { DentistRegularIcon };
export { QrCodeRegularIcon };
export { IotRegularIcon };
export { ScalesRegularIcon };
export { DismissRegularIcon };
export { TentRegularIcon };
export { RectangleRegularIcon };
export { GiftRegularIcon };
export { QuestionRegularIcon };
export { PortHdmiRegularIcon };
export { SearchRegularIcon };
export { AlignCenterVerticalRegularIcon };
export { DesktopMacRegularIcon };
export { MouseRegularIcon };
export { RibbonRegularIcon };
export { PenRegularIcon };
export { FolderOpenRegularIcon };
export { WeatherSunnyRegularIcon };
export { InfoRegularIcon };
export { AlertOffRegularIcon };
export { VideoClipRegularIcon };
export { ChevronRightRegularIcon };
export { OvalRegularIcon };
export { UsbRegularIcon };
export { EditRegularIcon };
export { EqualOffRegularIcon };
export { AlignCenterHorizontalRegularIcon };
export { WarningRegularIcon };
export { StarRegularIcon };
export { TextboxAlignMiddleLeftRegularIcon };
export { TextboxAlignCenterRegularIcon };
export { FlashRegularIcon };
export { KeyboardBackspaceRegularIcon };
export { WeatherThunderstormRegularIcon };
export { TextAlignLeftRegularIcon };
export { DropRegularIcon };
export { MapRegularIcon };
export { JsonRegularIcon };
export { ImageCircleRegularIcon };
export { GasStationRegularIcon };
export { LayerRegularIcon };
export { IosArrowLtrRegularIcon };
export { ServerPlayRegularIcon };
export { FireRegularIcon };
export { AddRegularIcon };
export { PortUsbARegularIcon };
export { HourglassOneQuarterRegularIcon };
export { ShareAndroidRegularIcon };
export { ThinkingRegularIcon };
export { IncognitoRegularIcon };
export { LinkRegularIcon };
export { KeyMultipleRegularIcon };
export { CartonBoxRegularIcon };
export { NewsRegularIcon };
export { ServiceBellRegularIcon };
export { AlertBadgeRegularIcon };
export { AppTitleRegularIcon };
export { PlayCircleRegularIcon };
export { OpacityRegularIcon };
export { ErrorCircleRegularIcon };
export { LineRegularIcon };
export { SlideGridRegularIcon };
export { RhombusRegularIcon };
export { LockOpenRegularIcon };
export { RulerRegularIcon };
export { ClockAlarmRegularIcon };
export { SwiftRegularIcon };
export { SlideContentRegularIcon };
export { EarthRegularIcon };
export { PaymentWirelessRegularIcon };
export { PaintBucketRegularIcon };
export { PersonVoiceRegularIcon };
export { BlurRegularIcon };
export { SportBaseballRegularIcon };
export { RadioButtonRegularIcon };
export { BluetoothRegularIcon };
export { PauseCircleRegularIcon };
export { AndroidRegularIcon };
export { TextAlignRightRegularIcon };
export { AirplaneRegularIcon };
export { ToolboxRegularIcon };
export { GuestRegularIcon };
export { HatGraduationRegularIcon };
export { TextboxAlignTopRegularIcon };
export { WeatherBlowingSnowRegularIcon };
export { CloudRegularIcon };
export { BarChartVerticalRegularIcon };
export { Battery70RegularIcon };
export { CutRegularIcon };
export { ShoppingBagRegularIcon };
export { FlashlightOffRegularIcon };
export { BookRegularIcon };
export { ShapeIntersectRegularIcon };
export { Battery100RegularIcon };
export { HourglassThreeQuarterRegularIcon };
export { RoadConeRegularIcon };
export { UmbrellaRegularIcon };
export { WalletRegularIcon };
export { CartRegularIcon };
export { PhoneRegularIcon };
export { PaddingRegularIcon };
export { ZoomRegularIcon };
export { SoundSourceRegularIcon };
export { TicketRegularIcon };
export { EqualRegularIcon };
export { BackspaceRegularIcon };
export { ChessRegularIcon };
export { AddCircleRegularIcon };
export { AppRecentRegularIcon };
export { ShapeSubtractRegularIcon };
export { ChevronDownRegularIcon };
export { FlashlightRegularIcon };
export { PulseCircleRegularIcon };
export { AlignBottomRegularIcon };
export { Battery40RegularIcon };
export { IosArrowRtlRegularIcon };
export { MailReadRegularIcon };
export { KioskRegularIcon };
export { KeyboardCommandRegularIcon };
export { CopyRegularIcon };
export { CircleRegularIcon };
export { WeatherSnowflakeRegularIcon };
export { DialpadRegularIcon };
export { FlagOffRegularIcon };
export { VoicemailRegularIcon };
export { ContrastRegularIcon };
export { CookieRegularIcon };
export { WeatherRainRegularIcon };
export { DismissSquareRegularIcon };
export { NumberCircle4RegularIcon };
export { NumberCircle3RegularIcon };
export { LightbulbRegularIcon };
export { RocketRegularIcon };
export { NumberSymbolSquareRegularIcon };
export { TextRegularIcon };
export { ControlButtonRegularIcon };
export { EyedropperOffRegularIcon };
export { JoystickRegularIcon };
export { SprayCanRegularIcon };
export { TextboxAlignMiddleRegularIcon };
export { FlashOffRegularIcon };
export { TextboxAlignBottomCenterRegularIcon };
export { BackpackRegularIcon };
export { HardDriveRegularIcon };
export { PageFitRegularIcon };
export { ShapeExcludeRegularIcon };
export { NotebookRegularIcon };
export { JavascriptRegularIcon };
export { NumberCircle2RegularIcon };
export { FilterRegularIcon };
export { WeatherCloudyRegularIcon };
export { RunRegularIcon };
export { HeadsetVrRegularIcon };
export { NumberCircle5RegularIcon };
export { LaptopRegularIcon };
export { HeartBrokenRegularIcon };
export { WindowsRegularIcon };
export { Battery90RegularIcon };
export { ServerLinkRegularIcon };
export { EyedropperRegularIcon };
export { PlayRegularIcon };
export { MathSymbolsRegularIcon };
export { RotationRegularIcon };
export { ParallelogramRegularIcon };
export { Battery30RegularIcon };
export { TemperatureRegularIcon };
export { SimRegularIcon };
export { AccessibilityRegularIcon };
export { SaveRegularIcon };
export { PlaystoreRegularIcon };
export { SlideHideRegularIcon };
export { ElevatorRegularIcon };
export { SendRegularIcon };
export { PenOffRegularIcon };
export { AlbumRegularIcon };
export { EngineRegularIcon };
export { GamesRegularIcon };
export { FilmstripOffRegularIcon };
export { ShareIosRegularIcon };
export { LineDashesRegularIcon };
export { PortMicroUsbRegularIcon };
export { TextboxRegularIcon };
export { KeyboardOffRegularIcon };
export { TagRegularIcon };
export { GlobalRegularIcon };
export { ToggleRightRegularIcon };
export { Wifi2RegularIcon };
export { BarChartHorizontalRegularIcon };
export { WandRegularIcon };
export { EqualCircleRegularIcon };
export { NotepadRegularIcon };
export { OpenRegularIcon };
export { GitRegularIcon };
export { HomeCheckmarkRegularIcon };
export { XrayRegularIcon };
export { KeyboardRegularIcon };
export { PaintBrushRegularIcon };
export { ClockRegularIcon };
export { TextboxAlignTopCenterRegularIcon };
export { RamRegularIcon };
export { KeyboardShiftRegularIcon };
export { TextboxAlignTopLeftRegularIcon };
export { WalkieTalkieRegularIcon };
export { Wifi4RegularIcon };
export { DoorRegularIcon };
export { EmojiCoolRegularIcon };
export { BlockRegularIcon };
export { JsonFileRegularIcon };
export { Wifi3RegularIcon };
export { ShareRegularIcon };
export { GifRegularIcon };
export { GridRegularIcon };
export { BadgeRegularIcon };
export { ToggleLeftRegularIcon };
export { NetworkCheckRegularIcon };
export { QuestionCircleRegularIcon };
export { ClipboardRegularIcon };
export { RouterRegularIcon };
export { DumbbellRegularIcon };

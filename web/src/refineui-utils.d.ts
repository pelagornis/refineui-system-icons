declare module '@refineui/web-icons/utils' {
  export function getIconChar(
    iconName: string,
    style?: 'regular' | 'filled',
    size?: number
  ): string | null;
  export function getFontFamily(style?: 'regular' | 'filled'): string;
}

declare module '@refineui/react-icons/utils' {
  export function getIconChar(
    iconName: string,
    style?: 'regular' | 'filled',
    size?: number
  ): string | null;
  export function getFontFamily(style?: 'regular' | 'filled'): string;
}

declare module '@refineui/react-native-icons/utils' {
  export function getIconChar(
    iconName: string,
    style?: 'regular' | 'filled',
    size?: number
  ): string | null;
  export function getFontFamily(style?: 'regular' | 'filled'): string;
}

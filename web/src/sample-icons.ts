export type IconStyle = 'regular' | 'filled';

export interface SampleIcon {
  id: string;
  label: string;
}

export const SAMPLE_ICONS: SampleIcon[] = [
  { id: 'task-list', label: 'Task List' },
  { id: 'weather-sunny', label: 'Weather Sunny' },
  { id: 'weather-sunny-high', label: 'Weather Sunny High' },
  { id: 'weather-sunny-low', label: 'Weather Sunny Low' },
  { id: 'add', label: 'Add' },
  { id: 'heart', label: 'Heart' },
  { id: 'home', label: 'Home' },
  { id: 'search', label: 'Search' },
];

export const ICON_SIZES = [16, 20, 24, 28, 32, 48] as const;

export function getLocalIconUrl(iconName: string, size: number, style: IconStyle): string {
  return `/cdn/icons/${size}/${iconName}-${style}.svg`;
}

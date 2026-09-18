import * as RefineUIIcons from '@refineui/react-icons';
import { componentNameFor, type IconEntry, type IconStyle } from '../data/icons';

export interface IconComponentProps {
  size?: number;
  color?: string;
  className?: string;
  onClick?: () => void;
}

export type IconComponent = (props: IconComponentProps) => JSX.Element | null;

const registry = RefineUIIcons as unknown as Record<string, IconComponent | undefined>;

/** Resolves the named export of `@refineui/react-icons` for an icon + style pair. */
export function getIconComponent(icon: IconEntry, style: IconStyle): IconComponent | null {
  return registry[componentNameFor(icon, style)] ?? null;
}

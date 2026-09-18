import { useCallback, useEffect, useMemo, useState } from 'react';
import {
  Card,
  Grid,
  SearchField,
  SearchFieldClear,
  SearchFieldIcon,
  SearchFieldInput,
  SegmentedControl,
  SegmentedControlItem,
  Stack,
  Text,
  Toaster,
} from '@refineui/react';
import {
  ICON_STYLES,
  SUPPORTED_SIZES,
  componentNameFor,
  icons,
  resolveSize,
  searchIcons,
  type IconEntry,
  type IconStyle,
} from '../data/icons';
import { IconDetail } from './IconDetail';
import { getIconComponent } from './registry';

const SEARCH_INPUT_ID = 'refineui-icon-search';

export default function IconBrowser() {
  const [query, setQuery] = useState('');
  const [style, setStyle] = useState<IconStyle>('regular');
  const [size, setSize] = useState(24);
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null);

  const results = useMemo(() => searchIcons(query, style), [query, style]);
  const selected = useMemo(
    () => (selectedSlug ? (icons.find((icon) => icon.slug === selectedSlug) ?? null) : null),
    [selectedSlug]
  );

  const closeDetail = useCallback(() => setSelectedSlug(null), []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      const typingInField = target?.tagName === 'INPUT' || target?.tagName === 'TEXTAREA';
      if (event.key === '/' && !typingInField) {
        event.preventDefault();
        document.getElementById(SEARCH_INPUT_ID)?.focus();
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  return (
    <>
      <Stack
        direction="row"
        align="center"
        gap="sizeMedium"
        wrap
        className="sticky top-refineui-foundation-size-540 z-30 border-b border-refineui-alias-border-subtle bg-refineui-alias-background-primary/90 py-refineui-size-medium backdrop-blur"
      >
        <SearchField
          id={SEARCH_INPUT_ID}
          value={query}
          onValueChange={setQuery}
          aria-label="Search icons"
          className="min-w-64 flex-1"
        >
          <SearchFieldIcon />
          <SearchFieldInput placeholder={`Search ${icons.length} icons by name or description`} />
          <SearchFieldClear />
        </SearchField>

        <SegmentedControl value={style} onValueChange={(value) => setStyle(value as IconStyle)}>
          {ICON_STYLES.map((value) => (
            <SegmentedControlItem key={value} value={value}>
              {value === 'regular' ? 'Regular' : 'Filled'}
            </SegmentedControlItem>
          ))}
        </SegmentedControl>

        <SegmentedControl
          value={String(size)}
          onValueChange={(value) => setSize(Number(value))}
          aria-label="Preview size"
        >
          {SUPPORTED_SIZES.map((value) => (
            <SegmentedControlItem key={value} value={String(value)}>
              {value}
            </SegmentedControlItem>
          ))}
        </SegmentedControl>
      </Stack>

      <Text
        variant="captionLg"
        as="p"
        role="status"
        className="py-refineui-size-medium text-refineui-alias-foreground-tertiary"
      >
        {results.length === icons.length
          ? `${results.length} icons`
          : `${results.length} of ${icons.length} icons`}
      </Text>

      {results.length === 0 ? (
        <Stack
          direction="column"
          align="center"
          gap="sizeXSmall"
          className="py-refineui-size-xxx-large"
        >
          <Text variant="titleSm" as="p">
            No icons match “{query}”
          </Text>
          <Text variant="bodyMd" as="p" className="text-refineui-alias-foreground-tertiary">
            Try a shorter keyword, or search by the component name.
          </Text>
        </Stack>
      ) : (
        <Grid
          as="ul"
          columns={6}
          gap="sizeSmall"
          className="docs-icon-grid list-none p-0 pb-refineui-size-xx-large"
        >
          {results.map((icon) => (
            <IconCard
              key={icon.slug}
              icon={icon}
              style={style}
              size={size}
              selected={icon.slug === selectedSlug}
              onSelect={setSelectedSlug}
            />
          ))}
        </Grid>
      )}

      <IconDetail
        icon={selected}
        style={style}
        size={size}
        onClose={closeDetail}
        onStyleChange={setStyle}
      />

      <Toaster />
    </>
  );
}

interface IconCardProps {
  icon: IconEntry;
  style: IconStyle;
  size: number;
  selected: boolean;
  onSelect: (slug: string) => void;
}

function IconCard({ icon, style, size, selected, onSelect }: IconCardProps) {
  const Icon = getIconComponent(icon, style);
  const renderedSize = resolveSize(icon, style, size);
  if (!Icon || renderedSize === null) return null;

  return (
    <li>
      <button
        type="button"
        onClick={() => onSelect(icon.slug)}
        title={`${componentNameFor(icon, style)} — ${icon.description}`}
        aria-pressed={selected}
        className="block w-full rounded-refineui-large text-left"
      >
        <Card
          variant="outlined"
          interactive
          className={`flex flex-col items-center gap-refineui-size-x-small px-refineui-size-x-small py-refineui-size-medium ${
            selected ? 'border-refineui-alias-border-focus' : ''
          }`}
        >
          <span className="grid h-12 place-items-center text-refineui-alias-foreground-primary">
            <Icon size={renderedSize} />
          </span>
          <span className="w-full truncate text-center text-refineui-alias-foreground-secondary">
            <Text variant="captionMd" as="span">
              {icon.label}
            </Text>
          </span>
        </Card>
      </button>
    </li>
  );
}

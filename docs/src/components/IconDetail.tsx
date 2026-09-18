import { useState, type ReactNode } from 'react';
import {
  Badge,
  Divider,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  SegmentedControl,
  SegmentedControlItem,
  Stack,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Text,
} from '@refineui/react';
import { ICON_STYLES, componentNameFor, type IconEntry, type IconStyle } from '../data/icons';
import { PLATFORMS, resolvePlatformSize, type PlatformId } from '../data/platforms';
import { CodeSnippet } from './CodeSnippet';
import { getIconComponent } from './registry';

interface IconDetailProps {
  icon: IconEntry | null;
  style: IconStyle;
  size: number;
  onClose: () => void;
  onStyleChange: (style: IconStyle) => void;
}

export function IconDetail({ icon, style, size, onClose, onStyleChange }: IconDetailProps) {
  const [platformId, setPlatformId] = useState<PlatformId>('react');

  const activeStyle = icon && icon.styles.includes(style) ? style : (icon?.styles[0] ?? 'regular');
  const Icon = icon ? getIconComponent(icon, activeStyle) : null;
  const componentName = icon ? componentNameFor(icon, activeStyle) : '';
  const sizes = icon?.sizesByStyle[activeStyle] ?? [];
  // Only the sizes with a real glyph render; anything else returns null.
  const previewSize = sizes.length > 0 ? sizes[sizes.length - 1] : null;

  return (
    <Drawer
      open={icon !== null}
      onOpenChange={(open) => {
        if (!open) onClose();
      }}
      placement="right"
      size="md"
    >
      <DrawerContent>
        <DrawerHeader showClose>
          <DrawerTitle>{icon?.label ?? ''}</DrawerTitle>
          <DrawerDescription>{icon?.description ?? ''}</DrawerDescription>
        </DrawerHeader>

        <DrawerBody>
          <Stack direction="column" gap="sizeLarge">
            <Stack
              align="center"
              justify="center"
              className="min-h-40 rounded-refineui-x-large bg-refineui-alias-surface-sunken text-refineui-alias-foreground-primary"
            >
              {Icon && previewSize !== null && <Icon size={previewSize} />}
            </Stack>

            <SegmentedControl
              value={activeStyle}
              onValueChange={(value) => onStyleChange(value as IconStyle)}
            >
              {ICON_STYLES.map((value) => (
                <SegmentedControlItem
                  key={value}
                  value={value}
                  disabled={!icon?.styles.includes(value)}
                >
                  {value === 'regular' ? 'Regular' : 'Filled'}
                </SegmentedControlItem>
              ))}
            </SegmentedControl>

            <Section title="Available sizes">
              <Stack direction="row" gap="sizeXSmall" wrap>
                {sizes.map((value) => (
                  <Stack
                    key={value}
                    direction="column"
                    align="center"
                    gap="sizeXXSmall"
                    className="min-w-16 rounded-refineui-large border border-refineui-alias-border-subtle px-refineui-size-x-small py-refineui-size-x-small"
                  >
                    <span className="grid h-12 place-items-center">
                      {Icon && <Icon size={value} />}
                    </span>
                    <Text
                      variant="captionSm"
                      as="span"
                      className="text-refineui-alias-foreground-tertiary"
                    >
                      {value}
                    </Text>
                  </Stack>
                ))}
              </Stack>
            </Section>

            <Section title="Use it">
              <Tabs
                value={platformId}
                onValueChange={(value) => setPlatformId(value as PlatformId)}
              >
                <TabsList className="flex-wrap">
                  {PLATFORMS.map((platform) => (
                    <TabsTrigger key={platform.id} value={platform.id}>
                      {platform.label}
                    </TabsTrigger>
                  ))}
                </TabsList>

                {icon &&
                  PLATFORMS.map((platform) => {
                    // Android and the CDN ship fewer sizes than the metadata
                    // lists, and Android is missing a handful of icons.
                    const snippetSize = resolvePlatformSize(
                      platform.id,
                      icon,
                      activeStyle,
                      size
                    );

                    return (
                      <TabsContent key={platform.id} value={platform.id}>
                        <Stack
                          direction="column"
                          gap="sizeXSmall"
                          className="pt-refineui-size-small"
                        >
                          {snippetSize === null ? (
                            <Text
                              variant="bodyMd"
                              as="p"
                              className="rounded-refineui-large bg-refineui-alias-surface-sunken p-refineui-size-small text-refineui-alias-foreground-secondary"
                            >
                              {platform.label} does not ship this icon yet.
                            </Text>
                          ) : (
                            <CodeSnippet
                              code={platform.iconUsage({
                                icon,
                                style: activeStyle,
                                size: snippetSize,
                              })}
                              label={`${platform.label} snippet`}
                            />
                          )}
                          <Text
                            variant="captionSm"
                            as="p"
                            className="text-refineui-alias-foreground-tertiary"
                          >
                            {platform.coordinate} · {platform.version}
                            {snippetSize !== null && snippetSize !== size
                              ? ` · nearest size ${snippetSize} px`
                              : ''}
                          </Text>
                        </Stack>
                      </TabsContent>
                    );
                  })}
              </Tabs>
            </Section>

            <Divider />

            <Stack direction="row" gap="sizeXSmall" wrap>
              <Badge variant="neutral">{icon?.slug}</Badge>
              <Badge variant="outline">{componentName}</Badge>
              {icon?.styles.map((value) => (
                <Badge key={value} variant="outline">
                  {value}
                </Badge>
              ))}
            </Stack>
          </Stack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <Stack direction="column" gap="sizeXSmall">
      <Text
        variant="captionSm"
        as="h3"
        className="uppercase tracking-wide text-refineui-alias-foreground-tertiary"
      >
        {title}
      </Text>
      {children}
    </Stack>
  );
}

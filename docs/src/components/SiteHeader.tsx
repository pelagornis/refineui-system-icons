import { useEffect, useState } from 'react';
import {
  Button,
  Container,
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  Stack,
  Text,
  WebIcon,
} from '@refineui/react';
import { RefineUILogo } from '../resources/logo/RefineUILogo';
interface SiteHeaderProps {
  base: string;
  current: 'icons' | 'usage' | 'guidelines';
}

const THEME_STORAGE_KEY = 'refineui-docs-theme';

export default function SiteHeader({ base, current }: SiteHeaderProps) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  // The inline script in the layout sets the attribute before paint; this only
  // mirrors it into React state once the island hydrates.
  useEffect(() => {
    setTheme(document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light');
  }, []);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    localStorage.setItem(THEME_STORAGE_KEY, next);
    setTheme(next);
  };

  const href = (path: string) => `${base}${path}`;

  return (
    <header className="sticky top-0 z-40 border-b border-refineui-alias-border-subtle bg-refineui-alias-background-primary/85 backdrop-blur">
      <Container padding="sizeLarge" className="docs-shell">
        <Stack
          direction="row"
          align="center"
          justify="between"
          gap="sizeMedium"
          className="h-refineui-foundation-size-540"
        >
          <a
            href={href('')}
            className="flex items-center gap-refineui-size-x-small no-underline text-refineui-alias-foreground-primary"
          >
            <RefineUILogo />
            <Text variant="subtitleMd" as="span" className="text-refineui-alias-foreground-primary">
              Icons
            </Text>
          </a>

          <Stack direction="row" align="center" gap="sizeSmall">
            <NavigationMenu aria-label="Site">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink href={href('usage')} active={current === 'usage'}>
                    Usage
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink href={href('guidelines')} active={current === 'guidelines'}>
                    Guidelines
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    href="https://github.com/pelagornis/refineui-system-icons"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Button
              variant="ghost"
              size="md"
              layout="icon"
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
            >
              <WebIcon name={theme === 'dark' ? 'weather-sunny' : 'moon'} size={20} />
            </Button>
          </Stack>
        </Stack>
      </Container>
    </header>
  );
}

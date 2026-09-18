import {
  Footer,
  FooterBrand,
  FooterBrandName,
  FooterCopyright,
  FooterExplore,
  FooterGroup,
  FooterGroupLabel,
  FooterLink,
  FooterLogo,
  FooterMeta,
  FooterMetaEnd,
  FooterNav,
  FooterSocial,
  WebIcon,
} from '@refineui/react';
import { RefineUILogo } from '../resources/logo/RefineUILogo';

interface SiteFooterProps {
  base: string;
}

export default function SiteFooter({ base }: SiteFooterProps) {
  return (
    <Footer className="docs-shell mx-auto mt-refineui-size-xxx-large">
      <FooterExplore>
        <FooterNav className="grid-cols-2 sm:grid-cols-3" aria-label="Footer">
          <FooterGroup>
            <FooterGroupLabel>Docs</FooterGroupLabel>
            <FooterLink href={base}>Icons</FooterLink>
            <FooterLink href={`${base}usage`}>Usage</FooterLink>
          </FooterGroup>

          <FooterGroup>
            <FooterGroupLabel>Packages</FooterGroupLabel>
            <FooterLink href="https://www.npmjs.com/package/@refineui/react-icons" target="_blank">
              React
            </FooterLink>
            <FooterLink
              href="https://www.npmjs.com/package/@refineui/react-native-icons"
              target="_blank"
            >
              React Native
            </FooterLink>
            <FooterLink href="https://www.npmjs.com/package/@refineui/web-icons" target="_blank">
              Web
            </FooterLink>
            <FooterLink href="https://pub.dev/packages/refineui_system_icons" target="_blank">
              Flutter
            </FooterLink>
            <FooterLink
              href="https://central.sonatype.com/artifact/com.pelagornis/refineui-system-icons"
              target="_blank"
            >
              Android
            </FooterLink>
          </FooterGroup>

          <FooterGroup>
            <FooterGroupLabel>Community</FooterGroupLabel>
            <FooterLink
              href="https://github.com/pelagornis/refineui-system-icons"
              target="_blank"
            >
              GitHub
            </FooterLink>
          </FooterGroup>
        </FooterNav>
      </FooterExplore>

      <FooterMeta>
        <FooterSocial>
          <FooterLink
            href="https://github.com/pelagornis/refineui-system-icons"
            target="_blank"
            aria-label="GitHub"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" aria-hidden>
            <path
                className="size-4"
                fill="currentColor"
                d="M8 1.3a6.665 6.665 0 0 1 6.667 6.667 6.68 6.68 0 0 1-4.542 6.325c-.333.067-.458-.142-.458-.316 0-.226.008-.942.008-1.834 0-.625-.208-1.025-.45-1.233 1.483-.167 3.042-.734 3.042-3.292a2.58 2.58 0 0 0-.684-1.792c.067-.166.3-.85-.066-1.766 0 0-.559-.184-1.834.683a6.2 6.2 0 0 0-1.666-.225c-.567 0-1.134.075-1.667.225-1.275-.858-1.833-.683-1.833-.683-.367.916-.134 1.6-.067 1.766a2.6 2.6 0 0 0-.683 1.792c0 2.55 1.55 3.125 3.033 3.292-.192.166-.367.458-.425.891-.383.175-1.342.459-1.942-.55-.125-.2-.5-.691-1.025-.683-.558.008-.225.317.009.442.283.158.608.75.683.941.133.376.567 1.092 2.242.784 0 .558.008 1.083.008 1.242 0 .174-.125.374-.458.316a6.66 6.66 0 0 1-4.559-6.325A6.665 6.665 0 0 1 8 1.3"
              />
            </svg>
          </FooterLink>
          <FooterLink
            href="https://www.npmjs.com/package/@refineui/react-icons"
            target="_blank"
            aria-label="npm"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" aria-hidden>
            <path
              className="size-4"
              fill="currentColor"
              d="M0,0h18v6H9v1H5V6H0V0z M1,5h2V2h1v3h1V1H1V5z M6,1v5h2V5h2V1H6z M8,2h1v2H8V2z M11,1v4h2V2h1v3h1V2h1v3h1V1H11z"
              transform="translate(0 4)"
            />
            </svg>
          </FooterLink>
          <FooterLink href="https://ui.pelagornis.com" target="_blank" aria-label="RefineUI">
            <RefineUILogo className="size-4" color="currentColor" />
          </FooterLink>
        </FooterSocial>

        <FooterBrand>
          <FooterCopyright>Pelagornis © 2026</FooterCopyright>
        </FooterBrand>
      </FooterMeta>
    </Footer>
  );
}

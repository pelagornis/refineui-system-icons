// `metadata.json` is ~1.6 MB, so it is declared instead of inferred to keep the
// TypeScript program small. The shape mirrors `packages/react-icons/src/IconUtils.ts`.
declare module '@refineui/react-icons/metadata.json' {
  interface UnicodeInfo {
    unicode: number;
    unicodeHex: string;
    cssClass: string;
  }

  interface RawIcon {
    name: string;
    slug: string;
    size: number[];
    style: string[];
    keyword: string;
    description: string;
    unicodeMapping: Record<string, Record<string, UnicodeInfo | undefined> | undefined>;
  }

  interface RawMetadata {
    totalIcons: number;
    supportedSizes: number[];
    supportedStyles: string[];
    fontFamilies: Record<string, { font_family: string; count: number }>;
    icons: Record<string, RawIcon>;
  }

  const metadata: RawMetadata;
  export default metadata;
}

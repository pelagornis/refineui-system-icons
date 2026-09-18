# @refineui/docs

Documentation site for RefineUI System Icons. Built with [Astro](https://astro.build) and the
[RefineUI](https://ui.pelagornis.com) design system (`@refineui/react` + `@refineui/tokens`).

Every icon in the gallery is rendered by its real `@refineui/react-icons` component, so the site
doubles as a smoke test for the published package.

## Commands

Run from the repository root:

```bash
npm run dev:docs      # start the dev server on http://localhost:4321
npm run build:docs    # build to docs/dist
```

Or from this directory: `npm run dev`, `npm run build`, `npm run preview`, `npm run check`.

## How it resolves the icons

`dist/` is gitignored for every workspace package, so `astro.config.mjs` aliases
`@refineui/react-icons` to `packages/react-icons/src`. The site therefore builds on a fresh clone
without building the icon package first — the same approach `web/vite.config.ts` uses.

`@refineui/react/refineui.css` does import `@refineui/web-icons/dist/...`. Those files are the
committed `packages/web-icons/fonts` (aliased in `astro.config.mjs`), not the npm package, which
still ships the pre-fix Appstore and Accessibility glyphs. `predev`/`prebuild` still build the
workspace package locally. On Netlify the site base is `docs/` so the root `Package.swift` does
not make the image install Swift 5.4, and that workspace build is skipped.

The gallery catalogue in `src/data/icons.ts` is derived from
`packages/react-icons/src/metadata.json` at build time. Icon slugs map 1:1 to the package's named
exports (`local-language` → `LocalLanguage`, plus a `Filled` suffix for the filled style).

## Per-platform snippets

`src/data/platforms.ts` holds the install and setup steps for all seven targets, plus the rule for
turning an icon slug into that platform's identifier. Each platform names icons differently:

| Platform                    | Identifier for `local-language` at 24 px           |
| --------------------------- | -------------------------------------------------- |
| React · React Native · Web  | `LocalLanguage` / `LocalLanguageFilled`            |
| iOS                         | `.localLanguage24Regular`                          |
| Android                     | `@drawable/ic_refineui_local_language_24_regular`   |
| Flutter                     | `RefineUIIcons.local_language_24_regular`           |
| CDN                         | `icons/24/locallanguage-regular.svg`                |

The versions in that file are the ones actually resolvable from each registry, which is not always
the repository version — Maven Central currently trails the npm packages.

`metadata.json` is the union of every platform, so it over-reports what some of them ship: Android
has no 12 px drawables and is missing seven icons outright, and the CDN publishes only the six
documented sizes. `scripts/generate-availability.mjs` scans the real platform assets and writes
`src/data/availability.json`, which the UI uses to fall back to the nearest available size or say
the icon is unavailable. It runs from `predev`, `prebuild` and `precheck`, and the output is
committed so changes in platform coverage show up in review. Regenerate it manually with:

```bash
npm run generate:availability
```

## Tailwind

RefineUI Web Kit components carry Tailwind utility classes in their compiled output, so
`src/styles/app.css` points `@source` at `@refineui/react/dist`. Typography classes are built at
runtime (`refineui-typo-${token}`) and never appear as literals, so they are force-generated with
`@source inline(...)`.

## Deploying under a sub-path

Set `DOCS_BASE` (and optionally `DOCS_SITE`) when building, e.g. for GitHub Pages:

```bash
DOCS_BASE=/refineui-system-icons/ npm run build:docs
```

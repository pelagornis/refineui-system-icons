// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import pagePlugin from "@pelagornis/page";

export const locales = {
  root: {
    label: "English",
    lang: "en",
  },
  ko: {
    label: "한국어",
    lang: "ko",
  },
  ja: {
    label: "日本語",
    lang: "ja",
  },
  zh: {
    label: "中文",
    lang: "zh",
  },
};

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      logo: {
        dark: "./src/assets/page-dark.svg",
        light: "./src/assets/page-light.svg",
        alt: "Starlight Page",
      },
      title: "RefineUI System Icons",
      description: "Cross-platform icon library for modern applications",
      editLink: {
        baseUrl:
          "https://github.com/pelagornis/refineui-system-icons/edit/main/docs/",
      },
      sidebar: [
        {
          label: "Getting Started",
          items: [
            { label: "Introduction", slug: "getting-started/introduction" },
            { label: "Installation", slug: "getting-started/installation" },
          ],
        },
        {
          label: "Platform Guides",
          items: [
            { label: "Flutter", slug: "platforms/flutter" },
            { label: "React", slug: "platforms/react" },
            { label: "React Native", slug: "platforms/react-native" },
            { label: "iOS", slug: "platforms/ios" },
            { label: "Android", slug: "platforms/android" },
            { label: "Web", slug: "platforms/web" },
          ],
        },
        {
          label: "Icon Reference",
          items: [
            { label: "Icon Search", slug: "icons/search" },
            { label: "All Icons", slug: "icons/all-icons" },
          ],
        },
        {
          label: "Advanced Usage",
          items: [
            { label: "Customization", slug: "advanced/customization" },
            { label: "Theming", slug: "advanced/theming" },
            { label: "Performance", slug: "advanced/performance" },
          ],
        },
      ],
      social: [
        {
          icon: "slack",
          label: "Slack",
          href: "https://pelagornis.slack.com/",
        },
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/pelagornis/refineui-system-icons",
        },
      ],
      plugins: [pagePlugin()],
      locales,
    }),
  ],
});

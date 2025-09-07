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
      title: "RefineUI System Icons",
      description: "Cross-platform icon library for modern applications",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/pelagornis/refineui-system-icons",
        },
      ],
      sidebar: [
        {
          label: "시작하기",
          items: [
            { label: "소개", slug: "getting-started/introduction" },
            { label: "설치", slug: "getting-started/installation" },
          ],
        },
        {
          label: "플랫폼 가이드",
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
          label: "아이콘 참조",
          items: [
            { label: "아이콘 검색", slug: "icons/search" },
            { label: "모든 아이콘", slug: "icons/all-icons" },
          ],
        },
        {
          label: "고급 사용법",
          items: [
            { label: "커스터마이징", slug: "advanced/customization" },
            { label: "테마 설정", slug: "advanced/theming" },
            { label: "성능 최적화", slug: "advanced/performance" },
          ],
        },
      ],
      plugins: [pagePlugin()],
      locales,
    }),
  ],
});

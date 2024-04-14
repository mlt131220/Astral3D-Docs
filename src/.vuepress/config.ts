import { defineUserConfig } from "vuepress";
import { searchPlugin } from "@vuepress/plugin-search";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  title: 'ES 3D Editor',
  description: '基于 ThreeJS + Vue 3 + Naive UI 的三维编辑器', // 网站的描述，它将会以 <meta> 标签渲染到当前页面的 HTML 中。

  head: [
    ['link', { rel: 'icon', href: '/ng.ico' }] // 需要被注入到当前页面的 HTML <head> 中的标签
  ],

  locales: {
    "/": {
      lang: "zh-CN",
      title: "",
      description: "ES 3D Editor - 基于 ThreeJS + Vue 3 + Naive UI 的三维编辑器",
    }
  },

  plugins: [
    searchPlugin({
      locales: {
        '/': {
          placeholder: '搜索',
        }
      },
      // 排除首页
      isSearchable: (page) => page.path !== '/',
    }),
  ],

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});

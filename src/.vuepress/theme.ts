import { hopeTheme } from "vuepress-theme-hope";
import { Navbar } from "./navbar/index.js";
import { Sidebar } from "./sidebar/index.js";

export default hopeTheme({
    hostname: "http://editor-doc.astraljs.com",

    author: {
        name: "Er San",
        url: "https://www.mhbdng.cn",
        email: "mlt131220@163.com"
    },

    breadcrumb: true,

    // 图标资源
    iconAssets: "/fontawesome/css/all.min.css",

    logo: "",
    logoDark: "",

    docsDir: "src",

    fullscreen: true,

    // 在深色模式和浅色模式之间切换
    darkmode: "toggle",

    locales: {
        "/": {
            navbar: Navbar,

            sidebar: Sidebar,

            copyright: false,

            footer: `<div>Copyright © 2023-present <a href="https://www.github.com/mlt131220" target="_blank">Er San</a> <p><a href="https://beian.miit.gov.cn/" target="_blank">滇ICP备2022001592号-1</a></p></div>`,

            displayFooter: true,

            // page meta
            metaLocales: {
                editLink: "在 GitHub 上编辑此页",
            },
        },
    },

    // github
    repo: "mlt131220/ES-3DEditor",
    repoLabel: "GitHub",
    // 是否在导航栏内显示仓库链接，默认为 `true`
    repoDisplay: true,

    // 加密页面及密码
    encrypt: {
        config: {
            //"/demo/encrypt.html": ["1234"],
        },
    },

    plugins: {
        search: true,
        // search: {
        //   插件选项
        // },

        // 您必须在生产环境中生成并使用自己的评论服务.
        comment: {
            provider: "Giscus",
            repo: "mlt131220/es-3d-editor-doc",
            repoId: "R_kgDOLuBMGg",
            category: "Announcements",
            categoryId: "DIC_kwDOLuBMGs4Cero3",
            mapping: "pathname",
        },

        components: {
            components: ["Badge", "VPCard"],
        },

        // 所有功能都已启用，仅保留您需要的功能
        mdEnhance: {
            align: true,
            attrs: true,
            codetabs: true,
            component: true,
            demo: true,
            figure: true,
            imgLazyload: true,
            imgSize: true,
            include: true,
            mark: true,
            stylize: [
                {
                    matcher: "Recommended",
                    replacer: ({ tag }) => {
                        if (tag === "em")
                            return {
                                tag: "Badge",
                                attrs: { type: "tip" },
                                content: "Recommended",
                            };
                    },
                },
            ],
            sub: true,
            sup: true,
            tabs: true,
            tasklist: true,
            vPre: true,

            // Install chart.js before enabling it
            // chart: true,

            // insert component easily

            // Install echarts before enabling it
            // echarts: true,

            // Install flowchart.ts before enabling it
            // flowchart: true,

            // gfm requires mathjax-full to provide tex support
            // gfm: true,

            // Install katex before enabling it
            // katex: true,

            // Install mathjax-full before enabling it
            // mathjax: true,

            // Install mermaid before enabling it
            // mermaid: true,

            // playground: {
            //   presets: ["ts", "vue"],
            // },

            // Install reveal.js before enabling it
            // revealJs: {
            //   plugins: ["highlight", "math", "search", "notes", "zoom"],
            // },

            // Install @vue/repl before enabling it
            // vuePlayground: true,

            // Install sandpack-vue3 before enabling it
            // sandpack: true,
        },

        // Install @vuepress/plugin-pwa and uncomment these if you want a PWA
        // pwa: {
        //   favicon: "/favicon.ico",
        //   cacheHTML: true,
        //   cachePic: true,
        //   appendBase: true,
        //   apple: {
        //     icon: "/assets/icon/apple-icon-152.png",
        //     statusBarColor: "black",
        //   },
        //   msTile: {
        //     image: "/assets/icon/ms-icon-144.png",
        //     color: "#ffffff",
        //   },
        //   manifest: {
        //     icons: [
        //       {
        //         src: "/assets/icon/chrome-mask-512.png",
        //         sizes: "512x512",
        //         purpose: "maskable",
        //         type: "image/png",
        //       },
        //       {
        //         src: "/assets/icon/chrome-mask-192.png",
        //         sizes: "192x192",
        //         purpose: "maskable",
        //         type: "image/png",
        //       },
        //       {
        //         src: "/assets/icon/chrome-512.png",
        //         sizes: "512x512",
        //         type: "image/png",
        //       },
        //       {
        //         src: "/assets/icon/chrome-192.png",
        //         sizes: "192x192",
        //         type: "image/png",
        //       },
        //     ],
        //     shortcuts: [
        //       {
        //         name: "Demo",
        //         short_name: "Demo",
        //         url: "/demo/",
        //         icons: [
        //           {
        //             src: "/assets/icon/guide-maskable.png",
        //             sizes: "192x192",
        //             purpose: "maskable",
        //             type: "image/png",
        //           },
        //         ],
        //       },
        //     ],
        //   },
        // },
    },

    // 纯净模式
    //pure: true,
});

import { navbar } from "vuepress-theme-hope";

export const Navbar = navbar([
    "/",
    {
        text: "指南",
        icon: "fa fa-lightbulb",
        prefix: "/guide/",
        children: [
            {
                text: "介绍",
                link: "/guide/intro.md",
            },
            { text: "常见问题", link: "/guide/problem.md" }
        ],
    },
    {
        text: "Msy3D",
        icon: "fa-brands fa-js",
        link: "/msy3d/index.md",
    },
    {
        text: "更新",
        icon: "fa fa-clipboard-list",
        prefix: "/update/",
        children: [
            {
                text: "计划",
                link: "/update/plan.md",
            },
            {
                text: "日志",
                link: "/update/logs/_2023_2.md",
            }
        ],
    },
    {
        text: "演示站点",
        icon: "fa fa-democrat",
        link: "https://editor.astraljs.com",
    },
    {
        text: "逆光",
        icon: "fa fa-paper-plane",
        link: "https://www.mhbdng.cn",
    },
]);

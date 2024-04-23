import { navbar } from "vuepress-theme-hope";

export const Navbar = navbar([
    "/",
    {
        text: "指南",
        icon: "lightbulb",
        prefix: "/guide/",
        children: [
            {
                text: "介绍",
                link: "/guide/intro.md",
            },
            { text: "常见问题", link: "/guide/other/problem.md" }
        ],
    },
    {
        text: "更新",
        icon: "clipboard-list",
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
        icon: "democrat",
        link: "https://editor.mhbdng.cn",
    },
    {
        text: "逆光",
        icon: "paper-plane",
        link: "https://www.mhbdng.cn",
    },
]);

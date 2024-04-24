import { sidebar } from "vuepress-theme-hope";

export const Sidebar = sidebar({
    "/": [
        "",
        {
            text: "指南",
            icon: "lightbulb",
            prefix: "guide/",
            children: "structure",
        },
        {
            text: "核心",
            icon: "bug",
            prefix: "core/",
            children: "structure",
        },
        {
            text: "更新",
            icon: "clipboard-list",
            prefix: "update/",
            children: "structure",
        },
    ],
});

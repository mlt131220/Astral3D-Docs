import { sidebar } from "vuepress-theme-hope";

export const Sidebar = sidebar({
    "/guide/": [
        "/guide/intro.md",
        {
            text: "组件",
            icon: "fa-brands fa-dropbox",
            // collapsible: true,
            // expanded: true,
            prefix: "/guide/components/",
            children: [
                "script.md"
            ],
        },
        "/guide/problem.md"
    ],
    "/msy3d/":[
        "/msy3d/index.md"
    ],
    "/update/": "structure",
});

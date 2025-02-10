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
        {
            text: "插件系统",
            icon: "fa-brands fa-delicious",
            // collapsible: true,
            // expanded: true,
            prefix: "/guide/plugin/",
            children: [
                "intro.md",
                "develop.md",
                {
                    text: "内置插件",
                    prefix: "/guide/plugin/builtin/",
                    children: [
                        "glTFHandler.md",
                    ],
                },
            ],
        },
        "/guide/problem.md"
    ],
    "/msy3d/":[
        "/msy3d/index.md"
    ],
    "/pricing/": [
        "/pricing/index.md"
    ],
    "/update/": "structure",
});

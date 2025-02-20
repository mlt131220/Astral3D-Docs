export const redirects = JSON.parse("{\"/preview/custom-component.example.html\":\"/article/lf8ybxbd/\",\"/preview/markdown.html\":\"/article/bpet3b3d/\",\"/notes/demo/bar.html\":\"/demo/2wq40hnu/\",\"/notes/demo/foo.html\":\"/demo/zyybkwr4/\",\"/notes/demo/\":\"/demo/\"}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/A-Ersan/astraljs/Astral3D-Doc/src/.vuepress/.temp/pages/index.html.js"), meta: {"title":""} }],
  ["/article/lf8ybxbd/", { loader: () => import(/* webpackChunkName: "article_lf8ybxbd_index.html" */"D:/A-Ersan/astraljs/Astral3D-Doc/src/.vuepress/.temp/pages/article/lf8ybxbd/index.html.js"), meta: {"title":"自定义组件"} }],
  ["/article/bpet3b3d/", { loader: () => import(/* webpackChunkName: "article_bpet3b3d_index.html" */"D:/A-Ersan/astraljs/Astral3D-Doc/src/.vuepress/.temp/pages/article/bpet3b3d/index.html.js"), meta: {"title":"Markdown"} }],
  ["/demo/2wq40hnu/", { loader: () => import(/* webpackChunkName: "demo_2wq40hnu_index.html" */"D:/A-Ersan/astraljs/Astral3D-Doc/src/.vuepress/.temp/pages/demo/2wq40hnu/index.html.js"), meta: {"title":"bar"} }],
  ["/demo/zyybkwr4/", { loader: () => import(/* webpackChunkName: "demo_zyybkwr4_index.html" */"D:/A-Ersan/astraljs/Astral3D-Doc/src/.vuepress/.temp/pages/demo/zyybkwr4/index.html.js"), meta: {"title":"foo"} }],
  ["/demo/", { loader: () => import(/* webpackChunkName: "demo_index.html" */"D:/A-Ersan/astraljs/Astral3D-Doc/src/.vuepress/.temp/pages/demo/index.html.js"), meta: {"title":"Demo"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"D:/A-Ersan/astraljs/Astral3D-Doc/src/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
  ["/blog/", { loader: () => import(/* webpackChunkName: "blog_index.html" */"D:/A-Ersan/astraljs/Astral3D-Doc/src/.vuepress/.temp/pages/blog/index.html.js"), meta: {"title":"博客"} }],
  ["/blog/tags/", { loader: () => import(/* webpackChunkName: "blog_tags_index.html" */"D:/A-Ersan/astraljs/Astral3D-Doc/src/.vuepress/.temp/pages/blog/tags/index.html.js"), meta: {"title":"标签"} }],
  ["/blog/archives/", { loader: () => import(/* webpackChunkName: "blog_archives_index.html" */"D:/A-Ersan/astraljs/Astral3D-Doc/src/.vuepress/.temp/pages/blog/archives/index.html.js"), meta: {"title":"归档"} }],
  ["/blog/categories/", { loader: () => import(/* webpackChunkName: "blog_categories_index.html" */"D:/A-Ersan/astraljs/Astral3D-Doc/src/.vuepress/.temp/pages/blog/categories/index.html.js"), meta: {"title":"分类"} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}

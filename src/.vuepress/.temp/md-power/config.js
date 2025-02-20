import { defineClientConfig } from 'vuepress/client'
import Tabs from 'D:/A-Ersan/astraljs/Astral3D-Doc/node_modules/.pnpm/vuepress-plugin-md-power@1.0.0-rc.131_esbuild@0.25.0_less@4.2.2_markdown-it@14.1.0_sass-embed_q74l7i5fgcybkv6ztad46d2e4y/node_modules/vuepress-plugin-md-power/lib/client/components/Tabs.vue'
import CodeTabs from 'D:/A-Ersan/astraljs/Astral3D-Doc/node_modules/.pnpm/vuepress-plugin-md-power@1.0.0-rc.131_esbuild@0.25.0_less@4.2.2_markdown-it@14.1.0_sass-embed_q74l7i5fgcybkv6ztad46d2e4y/node_modules/vuepress-plugin-md-power/lib/client/components/CodeTabs.vue'
import Plot from 'D:/A-Ersan/astraljs/Astral3D-Doc/node_modules/.pnpm/vuepress-plugin-md-power@1.0.0-rc.131_esbuild@0.25.0_less@4.2.2_markdown-it@14.1.0_sass-embed_q74l7i5fgcybkv6ztad46d2e4y/node_modules/vuepress-plugin-md-power/lib/client/components/Plot.vue'
import FileTreeItem from 'D:/A-Ersan/astraljs/Astral3D-Doc/node_modules/.pnpm/vuepress-plugin-md-power@1.0.0-rc.131_esbuild@0.25.0_less@4.2.2_markdown-it@14.1.0_sass-embed_q74l7i5fgcybkv6ztad46d2e4y/node_modules/vuepress-plugin-md-power/lib/client/components/FileTreeItem.vue'

import 'D:/A-Ersan/astraljs/Astral3D-Doc/node_modules/.pnpm/vuepress-plugin-md-power@1.0.0-rc.131_esbuild@0.25.0_less@4.2.2_markdown-it@14.1.0_sass-embed_q74l7i5fgcybkv6ztad46d2e4y/node_modules/vuepress-plugin-md-power/lib/client/styles/index.css'

export default defineClientConfig({
  enhance({ router, app }) {
    app.component('Tabs', Tabs)
    app.component('CodeTabs', CodeTabs)
    app.component('Plot', Plot)
    app.component('FileTreeItem', FileTreeItem)
  }
})

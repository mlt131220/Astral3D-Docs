---
pageLayout: home
externalLinkIcon: false
config:
  -
    type: hero
    full: true
    background: tint-plate
    hero:
      name: Astral 3D Engine
      tagline: Astral 3D Editor
      text: 工业孪生3D引擎
      actions:
        -
          theme: brand
          text: JS SDK
          link: /blog/
        -
          theme: brand
          text: Editor
          link: /blog/
        -
          theme: alt
          text: Demo
          link: https://editor.astraljs.com/#/
        -
          theme: alt
          text: Github
          link: https://github.com/mlt131220/Astral3DEditor
  -
    type: features
    features:
      -
        title: 最新技术栈
        icon: 🍡
        details: 基于Vue3、Vite、TypeScript、Naive UI等最新技术栈开发
      -
        title: 基于ThreeJS
        icon: 🌷
        details: Three.js 是基于webGL的封装的一个易于使用且轻量级的3D库，是前端开发者研发3D绘图的主要工具
      -
        title: 简洁易用
        icon: 🔅
        details: 高效进行场景处理，并且提供网络压缩存储功能，在项目中快速读取加载
      -
        title: BIM 轻量化引擎
        icon: 🚀
        details: 支持上传BIM模型进行轻量化查看，并转化为GLB格式
      -
        title: CAD 在线解析
        icon: 🌈
        details: 支持CAD图纸在线解析预览
      -
        title: 插件系统
        icon: 🏝️
        details: 编辑器提供了开放的插件系统，内置丰富的插件库，如：glTF处理器、地形生成器、模型转换器等等。
      -
        title: 粒子系统
        icon: 💊
        details: 内置多种粒子效果，如：烟花、火焰、烟雾、萤火虫等，丰富的配置项可以满足用户各种需求。
      -
        title: 天气系统
        icon: 🌤️
        details: 支持多种天气效果，如：晴天、雾天、雨天、雪天等。
      -
        title: WebGPU (开发阶段)
        icon: 🚩
        details: 更快的计算...
  -
    type: image-text
    title: 工业范
    description: CAD? BIM? 亦或更多？。
    image: /images/home/industryDark.png
    list:
      -
        title: CAD
        description: 支持 <code>.dwg,.dxf</code> 图纸解析预览,<code>.stp,.step,.dgn</code> 模型解析
      -
        title: BIM
        description: 支持 <code>.rvt,.ifc,.rva</code> 模型轻量化解析
      -
        title: Future
        description: PDMS、VTU
  -
    type: custom
---

::: center
![GitHub Repo stars](https://img.shields.io/github/stars/mlt131220/Astral3DEditor)
![GitHub Repo stars](https://img.shields.io/github/forks/mlt131220/Astral3DEditor)
![github license](https://img.shields.io/github/license/mlt131220/Astral3DEditor?color=32A9C3&labelColor=1B3C4A)
:::


### :zap: 快速开始

:::code-tabs
@tab bash

```bash
    git clone https://github.com/mlt131220/Astral3DEditor.git

    cd Astral3DEditor
    yarn install
    yarn run dev
```

:::

##### Tips:

-   `Node > 18.0.0`;

### 更新记录

[Changelog](/notes/update/logs/)
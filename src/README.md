---
home: true
icon: fa fa-home
title: 主页

bgImage: https://theme-hope-assets.vuejs.press/bg/6-light.svg
bgImageDark: https://theme-hope-assets.vuejs.press/bg/6-dark.svg
bgImageStyle:
  background-attachment: fixed
heroImage: /images/home/thumbnail.png
heroImageDark: /images/home/thumbnailDark.png
heroText: ES 3D Editor
tagline: 基于 ThreeJS + Vue 3 + Naive UI 的三维编辑器
actions:
  - text: 使用指南
    icon: fa fa-lightbulb
    link: ./guide/
    type: primary

  - text: 更新记录
    link: ./update/plan
    type: primary
    
  - text: 演示站点
    link: https://editor.mhbdng.cn
    type: secondary

highlights:
#  介绍最突出特点
  - header: 工业范
    image: /images/home/industry.png
    imageDark: /images/home/industryDark.png
    bgImage: https://theme-hope-assets.vuejs.press/bg/3-light.svg
    bgImageDark: https://theme-hope-assets.vuejs.press/bg/3-dark.svg
    highlights:
      - title: 支持 <code>BIM(.rvt,.ifc,.rva)</code> <code>CAD(.stp,.step,.dgn)</code> 等格式工业模型。
      - title: 支持 <code>CAD(.dwg,.dxf)</code> 图纸解析预览等功能。

  - header: 这里或许有你想要的内容
    description: 正在扩展并将持续扩展编辑器功能，懒懒散散，马不停歇。
    bgImage: https://theme-hope-assets.vuejs.press/bg/2-light.svg
    bgImageDark: https://theme-hope-assets.vuejs.press/bg/2-dark.svg
    bgImageStyle:
      background-repeat: repeat
      background-size: initial
      
    features:
      - title: 🍡 最新技术栈
        details: 基于Vue3、Vite、TypeScript、Naive UI等最新技术栈开发
#        link: https://theme-hope.vuejs.press/zh/guide/markdown/others.html#link-check
        
      - title: 🌷 基于ThreeJS
        details: Three.js 是基于webGL的封装的一个易于使用且轻量级的3D库，是前端开发者研发3D绘图的主要工具
        
      - title: 🔅 简洁易用
        details: 高效进行场景处理，并且提供网络压缩存储功能，在项目中快速读取加载
        
      - title: 🚀 BIM 轻量化引擎
        details: 支持上传BIM模型进行轻量化查看，并转化为GLB格式
        
      - title: 🌈 CAD 在线解析
        details: 支持CAD图纸在线解析预览

      - title: 🏝️ 多元插件库(开发阶段)
        details: 编辑器提供了丰富的插件库，可以满足用户各种需求，如：glTF处理器、地形生成器、模型转换器、粒子编辑器等等。
        
      - title: 💊 Cesium (开发阶段)
        details: Cesium 提供全球级别的高精度的地形和影像服务支持，方便用户快速搭建一款零插件的虚拟地球 Web 应用
        
      - title: 🚩 WebGPU (开发阶段)
        details: 更快的计算...
---

<br />

## :zap: 快速开始

::: code-tabs#shell
@tab bash

```bash
    git clone https://github.com/mlt131220/ES-3DEditor.git

    cd ES-3DEditor
    yarn install
    yarn run dev
```

:::

#### Tips:

-   `Node > 18.0.0`;

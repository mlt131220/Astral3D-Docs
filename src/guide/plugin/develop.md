
---
lang: zh-CN
---

# 插件开发指南
开发插件时，插件入口类需要实现以下接口，并以esm方式导出，编辑器会加载默认导出模块。

## 插件入口类接口
```typescript
export interface Plugin {
    // 插件名称，插件的唯一标识
    name: string; 
    // 插件版本号
    version:number; 
    // 插件图标
    icon:string;
    // 插件安装函数，在插件安装时调用
    install(config?: any): void; 
    // 插件卸载函数，在插件卸载时调用
    uninstall(): void;
    // 从插件盒子面板点击插件时的运行方法
    run(): void; 
}
```

## 示例插件
```typescript
// 暂未发布到npm，请自行将代码拷贝到项目中
// import { Plugin } from 'msy3d';

class ExamplePlugin implements Plugin {
    name = 'example-plugin';
    version = 1.0;
    icon = 'https://example.com/icon.png';

    install(config?: any): void {
        console.log('ExamplePlugin installed');
    }

    uninstall(): void {
        console.log('ExamplePlugin uninstalled');
    }

    run(): void {
        console.log('ExamplePlugin run');
    }
}

export default ExamplePlugin;
```
 
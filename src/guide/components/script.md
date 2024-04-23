---
lang: zh-CN
---

# :zap:脚本组件 Script Component

> 主要面相于开发人员，主要功能有：
>
>1. 编写脚本逻辑，并将其挂载于实体模型上；
>2. 脚本组件使用`JavaScript`编程语言；
>3. 脚本组件由事件驱动，在对应生命周期内执行；
>4. 脚本组件可以访问实体模型的属性和方法；
>5. 运行时执行脚本逻辑，并获取脚本执行结果；

### 内置变量
在脚本中已经内置了以下变量：

| 变量       | 描述                                     |
|----------|----------------------------------------|
| this     | 当前实体模型的引用                              |
| renderer | 当前渲染器的引用，通常是`THREE.WebGLRenderer`      |
| scene    | 当前场景的引用，通常是`THREE.Scene`               |
| camera   | 当前场景相机的引用，通常是`THREE.PerspectiveCamera` |
| controls | 当前场景控制器的引用，是`OrbitControls`            |

### 脚本的生命周期
支持以下几个基本生命周期：

| 生命周期          | 描述                                          |
|---------------|---------------------------------------------|
| init          | 场景启动后（加载完成时）执行，仅执行一次                        |
| start         | 开始运行，在第一次`update`之前调用，仅执行一次                 |
| stop          | 停止运行时（场景销毁前）调用，仅执行一次                        |
| beforeUpdate  | 场景每帧更新前运行                                   |
| update        | 场景每帧更新时运行,参数:`{time:number, delta: number}` |
| afterUpdate   | 场景每帧更新后运行                                   |
| beforeDestroy | 场景销毁前调用，仅执行一次                               |
| destroy       | 场景销毁时调用，仅执行一次                               |

### 脚本的事件
    支持以下几个基本事件：

| 事件            | 描述                           |
|---------------|------------------------------|
| onKeydown     | 键盘按下事件，参数:`event:Event`      |
| onKeyup       | 键盘抬起事件，参数:`event:Event`      |
| onPointerdown | 指针按下事件，参数:`event:MouseEvent` |
| onPointerup   | 指针抬起事件，参数:`event:MouseEvent` |
| onPointermove | 指针移动事件，参数:`event:MouseEvent` |

### 基础用法
完整结构：

```javascript
function init() {
    // 脚本初始化逻辑
    console.group('init');
    console.log(this);
    console.log(renderer);
    console.log(scene);
    console.log(camera);
    console.log(controls);
    console.groupEnd()
}

function start() {
    // 脚本开始运行逻辑
}

function stop() {
    // 脚本停止运行逻辑
}

function beforeUpdate() {
    // 每帧更新前运行逻辑
}

function update({time, delta}) {
    // 每帧更新时运行逻辑
    // 例如，每一帧更新物体旋转角度
    this.rotationZ += 0.1;
}

function afterUpdate() {
    // 每帧更新后运行逻辑
}

function beforeDestroy() {
    // 销毁前运行逻辑
}

function destroy() {
    // 销毁时运行逻辑
}

/* 事件直接触发对应函数即可 */
function onKeydown(event) {
    console.log('keydown', event);
}

function onKeyup(event) {
    console.log('keyup', event);
}

function onPointerdown(event) {
    console.log('pointerdown', event);
}

function onPointerup(event) {
    console.log('pointerup', event);
}

function onPointermove(event) {
    console.log('pointermove', event);
}
```

*** 

### 示例代码
#### 1. 模型路径
```javascript
function update({time, delta}) {
    this.position.x = Math.sin(time * 0.001) * 2;
    this.position.y = Math.cos(time * 0.001) * 2;
}
```
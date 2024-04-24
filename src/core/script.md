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

| 变量       | 描述         | 类型                        |
|----------|------------|---------------------------|
| this     | 当前实体模型的引用  | `THREE.Object3D`          |
| helper   | 辅助类函数集合    | [Helper](#helper)         |
| renderer | 当前渲染器的引用   | `THREE.WebGLRenderer`     |
| scene    | 当前场景的引用    | `THREE.Scene`             |
| camera   | 当前场景相机的引用  | `THREE.PerspectiveCamera` |
| controls | 当前场景控制器的引用 | `THREE.OrbitControls`     |
| clock    | 场景运行时间跟踪   | `THREE.Clock`             |

### 内置生命周期
支持以下几个基本生命周期：

| 生命周期          | 描述                          | 参数                                 |
|---------------|-----------------------------|------------------------------------|
| init          | 场景启动后（加载完成时）执行，仅执行一次        | -                                  |
| start         | 开始运行，在第一次`update`之前调用，仅执行一次 | -                                  |
| stop          | 停止运行时（场景销毁前）调用，仅执行一次        | -                                  |
| beforeUpdate  | 场景每帧更新前运行                   | -                                  |
| update        | 场景每帧更新时运行                   | `{"time":number, "delta": number}` |
| afterUpdate   | 场景每帧更新后运行                   | -                                  |
| beforeDestroy | 场景销毁前调用，仅执行一次               | -                                  |
| destroy       | 场景销毁时调用，仅执行一次               | -                                  |

### 内置事件
支持以下几个基本事件：

| 事件            | 描述     | 参数                    |
|---------------|--------|-----------------------|
| onKeydown     | 键盘按下事件 | `event:KeyboardEvent` |
| onKeyup       | 键盘抬起事件 | `event:KeyboardEvent` |
| onPointerdown | 指针按下事件 | `event:MouseEvent`    |
| onPointerup   | 指针抬起事件 | `event:MouseEvent`    |
| onPointermove | 指针移动事件 | `event:MouseEvent`    |

<br/>

***

### 辅助类(<a id="helper">Helper</a>)
| 成员        | 描述                   | 类型                             |
|-----------|----------------------|--------------------------------|
| scene     | 当前场景的引用，内置变量scene的引用 | `THREE.Scene`                  |
| Animation | 未实例化的动画类             | [Animation](#helper-animation) |

| 方法           | 描述                     | 参数                                                               | 返回值              |
|--------------|------------------------|------------------------------------------------------------------|------------------|
| objectByUuid | 通过uuid获取场景中的Object3D对象 | `uuid:string`                                                    | `THREE.Object3D` |
| moveObject   | 移动3D对象到指定位置            | `object: Object3D`<br/>`parent: Object3D`<br/>`before: Object3D` | -                |
| removeObject | 从场景中移除3D对象             | `object: THREE.Object3D`                                         | -                |

### 动画类(<a id="helper-animation">Animation</a>)
#### 基础用法
```javascript
    const animation = new helper.Animation(this);
```

#### API
```javascript
    new helper.Animation(object:THREE.Object3D)
```

| 成员                  | 描述                                                                                                                                                              | 类型                                    |
|---------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------|
| object              | 构造函数形参值，动画绑定的对象。<br/> 如果实例化时传入参数this(如上)，则指向内置变量this                                                                                                            | `THREE.Object3D`                      |
| actions             | 动画动作集合                                                                                                                                                          | `THREE.AnimationAction[]`             |
| actionsMap          | 动画动作映射表，key为动作名称，value为THREE.AnimationAction对象                                                                                                                  | `Map<string,  THREE.AnimationAction>` |
| lastPlayedAction    | 正在播放的动作名称                                                                                                                                                       | `THREE.AnimationAction \| undefined`  |
| repetitions         | 动画重复次数                                                                                                                                                          | `number`                              |
| ActionLoop (static) | 动画循环模式枚举：<br/> LoopOnce - 只执行一次 <br/> LoopRepeat - 重复次数为repetitions的值, 且每次循环结束时候将回到起始动作开始下一次循环。 <br/> LoopPingPong - 重复次数为repetitions的值, 且像乒乓球一样在起始点与结束点之间来回循环。 | `Enum`                                |

| 方法        | 描述                                                                                                                   | 参数                                                                                                                         | 返回值                                  |
|-----------|----------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------|--------------------------------------|
| getAction | 获取指定名称的动画动作,用于用户直接调用[THREE.AnimationAction的方法](https://threejs.org/docs/index.html#api/zh/animation/AnimationAction) | `name:string`                                                                                                              | `THREE.AnimationAction \| undefined` |
| play      | 播放指定名称的动画动作,支持链式调用                                                                                                   | `name:string` <br/> `loop:AnimationActionLoopStyles = helper.Animation.ActionLoop.LoopRepeat` <br/> `timeScale:number = 1` | `this(helper.Animation)`             |
| pause     | 暂停动画,支持链式调用                                                                                                          | `name:string \| undefined`                                                                                                 | `this(helper.Animation)`             |
| stop      | 停止动画,支持链式调用                                                                                                          | `name:string \| undefined`                                                                                                 | `this(helper.Animation)`             |

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
#### 1. 动态天空盒/模型动画/键盘事件
::: tabs#animate

@tab Scene#scene

```javascript
const DEG2RAD = Math.PI / 180;
function update({ time }) {
    const t = time * DEG2RAD;
    scene.backgroundRotation.y = t;
}
```

@tab:active Wolf#wolf

```javascript
const anime = new helper.Animation(this);

function init() {
    anime.play("01_Run_Armature_0");
}

function onKeydown(event) {
    // 按下1则执行 "01_Run_Armature_0" 动画,按下2则执行 "02_walk_Armature_0" 动画，按下3则执行 ""05_site_Armature_0"" 动画,
    switch (event.key) {
        case "1":
            anime.stop();
            anime.play("02_walk_Armature_0");
            break;

        case "2":
            anime.stop();
            anime.play("05_site_Armature_0");
            break;

        case "3":
            anime.stop();
            anime.play("01_Run_Armature_0");
            break;
    }
}

function beforeDestroy() {
    anime.stop();
}
```

:::

<iframe height=500 width=100% src="https://editor.mhbdng.cn/#/preview/41" frameborder=0 allowfullscreen></iframe>
---
name: vue3-timeline-bar
description: >
  Vue3 时间轴组件库 @cdyw/vue3-timeline-bar 的开发助手。
  提供组件 API 查询、状态机说明、构建流程指导、TypeScript 类型使用示例。
  适用于在项目中开发、调试或扩展时间轴相关功能时调用。
when_to_use: >
  触发时机：用户询问时间轴组件用法、TimeLineMain / TimeLineSimpleMain / TimeBarCanvasSimple 相关 API、
  状态机模式、构建产物、TypeScript 类型导入、v2 与 simple 版本区别、Canvas 时间条渲染等问题。
---

# @cdyw/vue3-timeline-bar Skill

## 调用示例

```
/timeline-bar 怎么使用 TimeLineMain 组件？
/timeline-bar 状态机有哪些模式？
/timeline-bar 构建后 dist 里有什么？
/timeline-bar v2 和 simple 版本有什么区别？
/timeline-bar 如何 import 类型？
```

## 项目信息

- **名称**: @cdyw/vue3-timeline-bar
- **版本**: 1.1.11
- **技术栈**: Vue 3 + TypeScript（严格模式）+ Element Plus + Vite 6
- **构建输出**: UMD + ES + dist/index.d.ts + dist/style.css + dist/package.json（含 exports）

## 快速使用

### 安装
```bash
npm install @cdyw/vue3-timeline-bar
```

### 全局注册
```typescript
import { createApp } from 'vue';
import Vue3TimelineBar from '@cdyw/vue3-timeline-bar';
import '@cdyw/vue3-timeline-bar/style.css';

const app = createApp(App);
app.use(Vue3TimelineBar);
```

### 按需引入
```typescript
import { TimeLineMain, TimeLineSimpleMain, TimeBarCanvasSimple } from '@cdyw/vue3-timeline-bar';
import '@cdyw/vue3-timeline-bar/style.css';
```

### TypeScript 示例（含 Props 与 Emit 类型）
```vue
<script setup lang="ts">
import {
  TimeLineMain,
  type TimeLineMainProps,
  type ManualController,
  type PlayMode,
} from '@cdyw/vue3-timeline-bar';
import { ref } from 'vue';

const currentTime = ref<Date | number>(new Date());
const playMode = ref<PlayMode>('manual');

const handleManual = (ctrl: ManualController): void => {
  let ts = ctrl.currentTimestamp ?? Date.now();
  const timer = setInterval(() => {
    ts += 60 * 1000;
    ctrl.nextTick?.(ts);
  }, 1000);
  ctrl.stop = () => clearInterval(timer);
};

const handleCurrentTimeChange = (time: Date | number): void => {
  console.log('currentTimeChange', time);
};
</script>

<template>
  <TimeLineMain
    v-model="currentTime"
    theme="blue"
    onePixelTimeUnit="1m"
    :stepSecond="3 * 60 * 1000"
    :playMode="playMode"
    @manualAnimationTimeStampChange="handleManual"
    @currentTimeChange="handleCurrentTimeChange"
  />
</template>
```

### v2 版使用示例（含 forecast 预报模式）
```vue
<script setup lang="ts">
import {
  TimeLineSimpleMain,
  type TimeLineSimpleMainProps,
  type NowPointerChangePayload,
} from '@cdyw/vue3-timeline-bar';
import { ref } from 'vue';

const currentTime = ref<Date>(new Date());

const handleCurrentTimeChange = (time: Date | number): void => {
  console.log('currentTimeChange', time);
};
</script>

<template>
  <TimeLineSimpleMain
    v-model="currentTime"
    onePixelTimeUnit="30s"
    :forecast="true"
    playMode="manual"
    @currentTimeChange="handleCurrentTimeChange"
  />
</template>
```

## 组件一览

### 公开导出组件

| 组件 | 路径 | 说明 |
|------|------|------|
| `TimeLineMain` | `packages/src/TimeLine/simple/TimeLineMain.vue` | 简化版主组件，含状态机 |
| `TimeLineSimpleMain` | `packages/src/TimeLine/v2/TimeLineSimpleMain.vue` | v2 版，增加 `forecast` 预报模式 |
| `TimeBarCanvasSimple` | `packages/src/TimeLine/simple/TimeBarCanvasSimple.vue` | Canvas 时间条（simple） |

### 内部子组件（simple / v2 均有同名实现）

| 组件 | 说明 |
|------|------|
| `TimeNotController` | 播放 / 上一刻 / 下一刻控制器 |
| `FreePointer` | 可拖拽的自由时间指针 |
| `NowPointer` | 实况当前时间指针，v2 额外触发 `triggleNow` |
| `TimeTickLabel` | 时间刻度标签 |

## 状态机

4 种模式通过 4x4 矩阵管理转换：

```typescript
enum Mode {
  Default,   // 默认，自由操作
  Live,      // 实况，跟随当前时间
  Manual,    // 手动播放
  Auto,      // 自动播放
}
```

触发事件：`prevTime`、`nextTime`、`play`、`changeTime`、`liveMode`、`clickTimeBar`

## 构建产物

执行 `npm run build` 后：

```
dist/
├── index.d.ts                         # 类型声明入口
├── src/                               # 各模块声明文件
│   ├── types.d.ts
│   └── TimeLine/...
├── vue3-timeline-bar.es.js            # ES Module
├── vue3-timeline-bar.umd.js           # UMD
├── style.css                          # 样式
└── package.json                       # 带 exports 的发布配置
```

`dist/package.json` 自动生成，包含：
```json
{
  "main": "./vue3-timeline-bar.umd.js",
  "module": "./vue3-timeline-bar.es.js",
  "types": "./index.d.ts",
  "exports": {
    ".": {
      "types": "./index.d.ts",
      "import": "./vue3-timeline-bar.es.js",
      "require": "./vue3-timeline-bar.umd.js"
    },
    "./style.css": "./style.css"
  }
}
```

## 组件 Props 类型

所有组件均导出对应的 Props 接口，可直接导入使用：

```typescript
import {
  type TimeLineMainProps,
  type TimeLineSimpleMainProps,
  type TimeBarCanvasProps,
  type FreePointerProps,
  type NowPointerProps,
  type TimeTickLabelProps,
} from '@cdyw/vue3-timeline-bar';
```

| 接口 | 所属组件 | 字段 |
|------|---------|------|
| `TimeLineMainProps` | `TimeLineMain` | `theme`, `modelValue`, `onePixelTimeUnit`, `stepSecond`, `playMode`, `live?` |
| `TimeLineSimpleMainProps` | `TimeLineSimpleMain` | `TimeLineMainProps` + `forecast?` |
| `TimeBarCanvasProps` | `TimeBarCanvasSimple` | `currentTimeStamp`, `onePixelTimeUnit`, `forecast?` (v2) |
| `FreePointerProps` | `FreePointer` | `timeBarWidth`, `startTimeStamp`, `freeTimeStamp`, `unitTime`, `onePixelTimeUnit` |
| `NowPointerProps` | `NowPointer` | `unitTime`, `value`, `timeBarWidth` |
| `TimeTickLabelProps` | `TimeTickLabel` | `list: TimeTickItem[]` |

## Emits 载荷类型

主组件及控制器的事件载荷均已类型化：

```typescript
import {
  type NowPointerChangePayload,
  type TickRate,
  type TimeNotControllerEmits,
  type TransformEventType,
} from '@cdyw/vue3-timeline-bar';

// NowPointer 的 change 事件载荷
interface NowPointerChangePayload {
  offset: number;
  needNextPage: boolean;
  nowTimeStamp: number;
}

// 控制器步进倍率
interface TickRate {
  value: number;
}

// TimeLineMain / TimeLineSimpleMain 状态机事件
 type TransformEventType = 'prevTime' | 'nextTime' | 'play' | 'changeTime' | 'liveMode' | 'clickTimeBar';
```

| 组件 | 事件 | 载荷类型 |
|------|------|---------|
| `TimeLineMain` | `autoAnimationTimeStampChange` | `number` |
| `TimeLineMain` | `manualAnimationTimeStampChange` | `ManualController` |
| `TimeLineMain` | `currentTimeChange` | `Date \| number` |
| `TimeBarCanvasSimple` | `change` | `number` (时间戳) |
| `NowPointer` | `change` | `NowPointerChangePayload` |
| `TimeNotController` | `preTimeTickClick` / `nextTimeTickClick` | `TickRate` |
| `TimeNotController` | `playAnimationClick` | `boolean` |

## 类型关系

```
TimeLineMainProps ──► TimeLineSimpleMainProps (extends + forecast)
       │
       ├── modelValue: Date | number
       ├── onePixelTimeUnit: number | string  ──► parseTimeStringToObject ──► TimeUnitObject
       ├── stepSecond: number | string
       ├── playMode: PlayMode ('auto' | 'manual')
       └── live?: boolean

TimeBarState (canvasTimeBar.ts / canvasTimeBarV2.ts)
       ├── startTimeStamp: number
       ├── timeTickList: TimeTickItem[]
       ├── unitOfMs: number
       ├── unitOfObject: TimeUnitObject | null
       ├── timeBarWidth: number
       ├── pointerDisabled: boolean
       └── futureMode?: boolean  (v2 专用)

CanvasTimeBar / CanvasTimeBarV2 ──► EventEmitter
       ├── 内部维护 TimeBarState
       └── 对外触发: time-bar-click, time-bar-resize, time-bar-mousemove
```

## 可导入的类型

```typescript
import {
  // 组件
  TimeLineMain,
  TimeLineSimpleMain,
  TimeBarCanvasSimple,

  // 工具类
  CanvasTimeBar,
  CanvasTimeBarV2,

  // Props 类型
  type TimeLineMainProps,
  type TimeLineSimpleMainProps,
  type TimeBarCanvasProps,
  type FreePointerProps,
  type NowPointerProps,
  type TimeTickLabelProps,

  // 事件载荷类型
  type NowPointerChangePayload,
  type TickRate,
  type TimeNotControllerEmits,
  type TransformEventType,

  // 核心类型
  type ManualController,
  type PlayMode,
  type TimeBarState,
  type TimeTickItem,
  type ListenerHandle,
  type CarryBitInfo,
  type TimeUnitObject,

  // 工具函数
  carryBitTable,
  UnitOfTimeTable,
  regex,
  parseTimeStringToObject,
  parseTimeStringToMillisecond,
  getValueByUnit,
  getWholeTimeByUnit,
  _setInterval,
  _clearInterval,
} from '@cdyw/vue3-timeline-bar';
```

## 开发注意事项

1. **严格 TypeScript**: `tsconfig.json` 已启用 `strict: true`，所有组件使用 `defineComponent` + `PropType`
2. **Emits 类型化**: 所有 `.vue` 组件已采用对象形式 `emits` 声明，payload 具备完整类型推导
3. **Canvas 性能**: `canvasTimeBar.ts` / `canvasTimeBarV2.ts` 是核心渲染路径，修改需谨慎
4. **events 依赖**: `CanvasTimeBar` 继承自 Node.js `EventEmitter`，浏览器 bundler 需处理 polyfill
5. **样式变量**: 组件使用 CSS 变量（`--theme-bg`、`--text-color` 等），确保父容器已定义
6. **v2 forecast 模式**: 限制自由指针不可拖动到未来时间，NowPointer 显示"实况/预报"分割线
7. **类型统一**: 所有类型接口集中定义于 `packages/src/types.ts`，包括 Props、事件载荷、Canvas 状态、时间解析类型。组件和 utils 均从此处导入，避免重复定义。

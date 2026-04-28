---
name: vue3-timeline-bar
description: >
  Vue3 时间轴组件库 @cdyw/vue3-timeline-bar 的开发助手。
  提供组件 API 查询、状态机说明、构建流程指导、TypeScript 类型使用示例。
  适用于在项目中开发、调试或扩展时间轴相关功能时调用。
triggers:
  - timeline-bar
  - vue3-timeline-bar
  - 时间轴组件
---

# @cdyw/vue3-timeline-bar Skill

## 调用示例

```
/timeline-bar 怎么使用 TimeLineMain 组件？
/timeline-bar 状态机有哪些模式？
/timeline-bar 构建后 dist 里有什么？
/timeline-bar v2 和 simple 版本有什么区别？
```

## 项目信息

- **名称**: @cdyw/vue3-timeline-bar
- **版本**: 1.1.8
- **技术栈**: Vue 3 + TypeScript（严格模式）+ Element Plus + Vite 6
- **构建输出**: UMD + ES + 合并 d.ts + dist/package.json（含 exports）

## 快速使用

### 安装
```bash
npm install @cdyw/vue3-timeline-bar
```

### 全局注册
```typescript
import { createApp } from 'vue';
import Vue3TimelineBar from '@cdyw/vue3-timeline-bar';
import '@cdyw/vue3-timeline-bar/dist/style.css';

const app = createApp(App);
app.use(Vue3TimelineBar);
```

### 按需引入
```typescript
import { TimeLineMain, TimeLineSimpleMain, TimeBarCanvasSimple } from '@cdyw/vue3-timeline-bar';
import '@cdyw/vue3-timeline-bar/dist/style.css';
```

### TypeScript 示例
```vue
<script setup lang="ts">
import { TimeLineMain } from '@cdyw/vue3-timeline-bar';
import type { ManualController } from '@cdyw/vue3-timeline-bar';
import { ref } from 'vue';

const currentTime = ref<Date | number>(new Date());

const handleManual = (ctrl: ManualController) => {
  let ts = ctrl.currentTimestamp ?? Date.now();
  const timer = setInterval(() => {
    ts += 60 * 1000;
    ctrl.nextTick?.(ts);
  }, 1000);
  ctrl.stop = () => clearInterval(timer);
};
</script>

<template>
  <TimeLineMain
    v-model="currentTime"
    theme="blue"
    onePixelTimeUnit="1m"
    :stepSecond="3 * 60 * 1000"
    playMode="auto"
    @manualAnimationTimeStampChange="handleManual"
  />
</template>
```

## 组件一览

| 组件 | 路径 | 说明 |
|------|------|------|
| `TimeLineMain` | `packages/src/TimeLine/simple/TimeLineMain.vue` | 简化版主组件，含状态机 |
| `TimeLineSimpleMain` | `packages/src/TimeLine/v2/TimeLineSimpleMain.vue` | v2 版，增加 `forecast` 预报模式 |
| `TimeBarCanvasSimple` | `packages/src/TimeLine/simple/TimeBarCanvasSimple.vue` | Canvas 时间条（simple） |
| `TimeNotController` | `packages/src/TimeLine/simple/TimeNotController.vue` | 播放/上一刻/下一刻控制器 |
| `FreePointer` | `packages/src/TimeLine/simple/FreePointer.vue` | 可拖拽的自由时间指针 |
| `NowPointer` | `packages/src/TimeLine/simple/NowPointer.vue` | 实况当前时间指针 |
| `TimeTickLabel` | `packages/src/TimeLine/simple/TimeTickLable.vue` | 时间刻度标签 |

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
├── @cdyw/
│   ├── vue3-timeline-bar.es.js      # ES Module
│   └── vue3-timeline-bar.umd.js     # UMD
├── vue3-timeline-bar.d.ts           # 合并类型声明
├── vue3-timeline-bar.css            # 样式
└── package.json                     # 带 exports 的发布配置
```

`dist/package.json` 自动生成，包含：
```json
{
  "main": "./@cdyw/vue3-timeline-bar.umd.js",
  "module": "./@cdyw/vue3-timeline-bar.es.js",
  "types": "./vue3-timeline-bar.d.ts",
  "exports": {
    ".": {
      "types": "./vue3-timeline-bar.d.ts",
      "import": "./@cdyw/vue3-timeline-bar.es.js",
      "require": "./@cdyw/vue3-timeline-bar.umd.js"
    }
  }
}
```

## 关键类型

```typescript
// 时间条状态
interface TimeBarState {
  startTimeStamp: number;
  timeTickList: TimeTickItem[];
  unitOfMs: number;
  unitOfObject: { value: number; unit: string } | null;
  timeBarWidth: number;
  pointerDisabled: boolean;
  futureMode?: boolean;
}

// 时间刻度项
interface TimeTickItem {
  value: string;
  left: number;
  scale: number;
}

// 手动播放控制器
interface ManualController {
  currentTimestamp?: number;
  nextTick?: (time: Date | number) => void;
  stop?: () => void;
}

// 时间解析
function parseTimeStringToMillisecond(str: string | number): number;
function parseTimeStringToObject(str: string | number): { value: number; unit: string } | null;
```

## 开发注意事项

1. **严格 TypeScript**: `tsconfig.json` 已启用 `strict: true`，所有组件使用 `defineComponent` + `PropType`
2. **Canvas 性能**: `canvasTimeBar.ts` / `canvasTimeBarV2.ts` 是核心渲染路径，修改需谨慎
3. **events 依赖**: `CanvasTimeBar` 继承自 Node.js `EventEmitter`，浏览器 bundler 需处理 polyfill
4. **样式变量**: 组件使用 CSS 变量（`--theme-bg`、`--text-color` 等），确保父容器已定义
5. **v2 forecast 模式**: 限制自由指针不可拖动到未来时间，NowPointer 显示"实况/预报"分割线

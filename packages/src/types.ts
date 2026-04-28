// ========== 手动/自动播放控制器 ==========

export interface ManualController {
  currentTimestamp?: number;
  nextTick?: (time: Date | number) => void;
  stop?: () => void;
}

export type PlayMode = 'auto' | 'manual';

// ========== Canvas 渲染状态 ==========

export interface TimeTickItem {
  value: string;
  left: number;
  scale: number;
}

export interface TimeBarState {
  startTimeStamp: number;
  timeTickList: TimeTickItem[];
  unitOfMs: number;
  unitOfObject: TimeUnitObject | null;
  timeBarWidth: number;
  pointerDisabled: boolean;
  futureMode?: boolean;
}

export interface ListenerHandle {
  dispose: () => void;
}

// ========== 时间解析工具类型 ==========

export interface CarryBitInfo {
  unit: string;
  carryUnitTime: number;
  tickLevel: number[];
  colors: string[];
  formatTime: string;
  scale: number;
}

export interface TimeUnitObject {
  value: number;
  unit: string;
}

// ========== 核心组件 Props ==========

export interface TimeLineMainProps {
  theme: string;
  modelValue: Date | number;
  onePixelTimeUnit: number | string;
  stepSecond: number | string;
  playMode: PlayMode;
  live?: boolean;
}

export interface TimeLineSimpleMainProps extends TimeLineMainProps {
  forecast?: boolean;
}

export interface TimeBarCanvasProps {
  currentTimeStamp: Date | number;
  onePixelTimeUnit: number | string;
  forecast?: boolean;
}

export interface FreePointerProps {
  timeBarWidth: number | string;
  startTimeStamp: number | Date;
  freeTimeStamp: number | Date;
  unitTime: number | string;
  onePixelTimeUnit: number | string;
}

export interface NowPointerProps {
  unitTime: number | string;
  value: number;
  timeBarWidth: number;
}

export interface TimeTickLabelProps {
  list: TimeTickItem[];
}

// ========== 事件载荷类型 ==========

export interface NowPointerChangePayload {
  offset: number;
  needNextPage: boolean;
  nowTimeStamp: number;
}

export interface TickRate {
  value: number;
}

export interface TimeNotControllerEmits {
  (e: 'preTimeTickClick', rate: TickRate): void;
  (e: 'nextTimeTickClick', rate: TickRate): void;
  (e: 'playAnimationClick', isPlay: boolean): void;
}

export type TransformEventType =
  | 'prevTime'
  | 'nextTime'
  | 'play'
  | 'changeTime'
  | 'liveMode'
  | 'clickTimeBar';

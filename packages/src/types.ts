export interface ManualController {
  currentTimestamp?: number;
  nextTick?: (time: Date | number) => void;
  stop?: () => void;
}

export type PlayMode = 'auto' | 'manual';

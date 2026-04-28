import dayjs from 'dayjs';
import { carryBitTable, type CarryBitInfo } from './parseTime';
import { EventEmitter } from 'events';

const CLICK_LEFT = 1;

export interface TimeBarState {
  startTimeStamp: number;
  timeTickList: TimeTickItem[];
  unitOfMs: number;
  unitOfObject: { value: number; unit: string } | null;
  timeBarWidth: number;
  pointerDisabled: boolean;
  futureMode?: boolean;
}

export interface TimeTickItem {
  value: string;
  left: number;
  scale: number;
}

export interface ListenerHandle {
  dispose: () => void;
}

export class CanvasTimeBar extends EventEmitter {
  container: HTMLElement | null;
  canvas: HTMLCanvasElement | null;
  state: TimeBarState;
  events: Record<string, unknown> | undefined;

  canvasWidth = 0;
  canvasHeight = 0;
  listener: ListenerHandle | null = null;

  constructor(
    container: HTMLElement | null,
    canvas: HTMLCanvasElement | null,
    state: TimeBarState,
    events?: Record<string, unknown>
  ) {
    super();
    this.container = container;
    this.canvas = canvas;
    this.state = state;
    this.events = events;

    this.resize();
    this.listener = this.addEventListener();
  }

  setCanvasProperties(): Error | void {
    const { container, canvas } = this;

    if (!container) {
      return new Error('父容器不存在！');
    }

    this.canvasWidth = container.offsetWidth;
    this.canvasHeight = container.offsetHeight;

    if (canvas) {
      canvas.width = this.canvasWidth;
      canvas.height = this.canvasHeight;
      canvas.style.width = canvas.width + 'px';
      canvas.style.height = canvas.height + 'px';
    }
  }

  renderer(): void {
    const { canvas, canvasWidth, canvasHeight } = this;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      ctx.clearRect(0, 0, canvasWidth, canvasHeight);

      // this.drawBackground(ctx)
      this.drawTimeAxis(ctx);
    }
  }

  drawBackground(ctx: CanvasRenderingContext2D): void {
    const { canvasWidth, canvasHeight } = this;

    ctx.beginPath();
    ctx.rect(0, 0, canvasWidth, canvasHeight);
    ctx.fillStyle = 'white';
    ctx.fill();
    ctx.closePath();
  }

  drawTimeAxis(ctx: CanvasRenderingContext2D): void {
    const { canvasWidth, canvasHeight, state } = this;
    if (!state.unitOfObject) return;

    const bitInfo: CarryBitInfo | undefined = carryBitTable[state.unitOfObject.unit];
    if (!bitInfo) return;

    const { carryUnitTime, tickLevel, colors, formatTime, scale } = bitInfo;

    const drawTick = (
      ctx: CanvasRenderingContext2D,
      timestamp: number,
      formatTimeStr: string,
      offsetLeft: number,
      scaleVal: number
    ): void => {
      for (let i = tickLevel.length - 1; i >= 0; i--) {
        const mode = state.unitOfObject ? (carryUnitTime / tickLevel[i]) * state.unitOfObject.value : 0;
        if (timestamp % mode === 0) {
          if (i === 0) {
            state.timeTickList.push({
              value: formatTimeStr,
              left: offsetLeft,
              scale: scaleVal,
            });
          }
          ctx.beginPath();
          ctx.moveTo(offsetLeft, canvasHeight / 2 + i * 2);
          ctx.lineTo(offsetLeft, canvasHeight);
          ctx.strokeStyle = colors[i];
          ctx.stroke();
        }
      }
    };

    state.timeTickList = [];

    ctx.resetTransform();
    ctx.translate(0.5, 0.5);

    for (let x = 0; x < canvasWidth; x++) {
      const timestamp = dayjs(state.startTimeStamp + x * state.unitOfMs).valueOf();
      const formatTimeStr = dayjs(state.startTimeStamp + x * state.unitOfMs).format(formatTime);
      drawTick(ctx, timestamp, formatTimeStr, x, scale);
    }
  }

  addEventListener(): ListenerHandle {
    const { canvas, state } = this;
    if (!canvas) {
      return { dispose: () => {} };
    }

    let startPos = 0;
    let endPos = 0;
    let diffPos = 0;

    let mouseDowned = false;
    let isMouseEvent = false;
    const diffTime = 200;
    let mouseDownTime = 0;
    let mouseUpTime = 0;

    let clickWhich = 0;

    const mousedown = (e: MouseEvent): void => {
      e.preventDefault();
      if (canvas === e.target) {
        clickWhich = e.which;
        mouseDowned = true;
        isMouseEvent = false;
        mouseDownTime = Date.now();
        startPos = e.clientX;
        (e.target as HTMLElement).style.cursor = 'pointer';
        this.emit('time-bar-mousedown', { offset: startPos });
        window.addEventListener('mousemove', mousemove);
      }
    };

    const mousemove = (e: MouseEvent): void => {
      if (mouseDowned) {
        endPos = e.clientX;
        diffPos = endPos - startPos;
        startPos = endPos;
        state.startTimeStamp = state.startTimeStamp - diffPos * state.unitOfMs;
        this.emit('time-bar-mousemove', { movePixel: diffPos });
        this.renderer();
      }
    };

    const mouseup = (e: MouseEvent): void => {
      e.preventDefault();
      mouseDowned = false;
      mouseUpTime = Date.now();
      isMouseEvent = mouseUpTime - mouseDownTime > diffTime;
      if (!isMouseEvent) {
        if (clickWhich === CLICK_LEFT) {
          this.emit('time-bar-click', {
            offset: startPos - canvas.getBoundingClientRect().left,
          });
        }
      } else {
        this.emit('time-bar-mouseup', {
          offset: endPos - canvas.getBoundingClientRect().left,
        });
        window.removeEventListener('mousemove', mousemove);
      }
    };

    const wheelHandle = (e: WheelEvent): void => {
      e.preventDefault();
      const diff = ((e.deltaY * 0.1) * window.devicePixelRatio) | 0;
      state.startTimeStamp = state.startTimeStamp - diff * state.unitOfMs;
      this.emit('time-bar-mousemove', { movePixel: diff });
      this.renderer();
    };

    canvas.addEventListener('mousedown', mousedown);
    window.addEventListener('mouseup', mouseup);
    canvas.addEventListener('wheel', wheelHandle);

    return {
      dispose: (): void => {
        window.removeEventListener('mousedown', mousedown as EventListener);
        window.removeEventListener('mouseup', mouseup as EventListener);
        canvas.removeEventListener('wheel', wheelHandle as EventListener);
      },
    };
  }

  resize(): void {
    if (this.container) {
      const resizeObserver = new ResizeObserver(() => {
        setTimeout(() => {
          this.setCanvasProperties();
          this.renderer();
          this.emit('time-bar-resize');
        });
      });
      resizeObserver.observe(this.container);
    }
  }

  dispose(): void {
    this.container = null;
    this.canvas = null;
    // @ts-expect-error intentional cleanup
    this.state = null;
    // @ts-expect-error intentional cleanup
    this.events = null;

    this.removeAllListeners('time-bar-resize');
    this.removeAllListeners('time-bar-mousedown');
    this.removeAllListeners('time-bar-mousemove');
    this.removeAllListeners('time-bar-mouseleave');
    this.removeAllListeners('time-bar-click');

    if (this.listener) {
      this.listener.dispose();
    }
  }
}

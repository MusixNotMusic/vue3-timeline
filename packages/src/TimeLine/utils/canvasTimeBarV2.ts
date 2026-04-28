import dayjs from 'dayjs';
import { carryBitTable } from './parseTime';
import type { CarryBitInfo, TimeBarState, ListenerHandle } from '../../types';
import { EventEmitter } from 'events';

const CLICK_LEFT = 1;

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
      const scale = window.devicePixelRatio;
      canvas.width = this.canvasWidth * scale;
      canvas.height = this.canvasHeight * scale;
      canvas.style.width = this.canvasWidth + 'px';
      canvas.style.height = this.canvasHeight + 'px';
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.scale(scale, scale);
      }
    }
  }

  renderer(): void {
    const { canvas, canvasWidth, canvasHeight } = this;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      ctx.clearRect(0, 0, canvasWidth, canvasHeight);

      if (this.state.futureMode) {
        this.drawBackground(ctx);
      }
      this.drawTimeAxis(ctx);
    }
  }

  isHistoryTime(x: number): boolean {
    const { state } = this;
    const timestamp = state.startTimeStamp + x * state.unitOfMs;

    const now = dayjs();
    const minutes = now.minute();
    const halfTimestamp = now
      .set('minute', 30 * Math.ceil(minutes / 30))
      .valueOf();
    return timestamp < halfTimestamp;
  }

  drawBackground(ctx: CanvasRenderingContext2D): void {
    const { canvasWidth, canvasHeight, state } = this;
    const now = dayjs();
    const minutes = now.minute();
    const halfTimestamp = now
      .set('minute', 30 * Math.ceil(minutes / 30))
      .valueOf();
    const x = Math.max((halfTimestamp - state.startTimeStamp) / state.unitOfMs, 0);
    ctx.beginPath();
    ctx.rect(0, 0, x, canvasHeight);
    ctx.fillStyle = '#9c9c9c';
    ctx.fill();
    ctx.beginPath();
    ctx.rect(x, 0, canvasWidth, canvasHeight);
    ctx.fillStyle = 'rgba(0, 99, 157, 0.6)';
    ctx.fill();
    ctx.closePath();
  }

  drawTimeAxis(ctx: CanvasRenderingContext2D): void {
    const { canvasWidth, canvasHeight, state } = this;
    if (!state.unitOfObject) return;

    const bitInfo: CarryBitInfo | undefined = carryBitTable[state.unitOfObject.unit];
    if (!bitInfo) return;

    const { carryUnitTime, tickLevel, colors, formatTime, scale } = bitInfo;

    const now = dayjs();
    const minutes = now.minute();
    const halfTimestamp = now
      .set('minute', 30 * Math.ceil(minutes / 30))
      .valueOf();

    const drawTick = (
      ctx: CanvasRenderingContext2D,
      timestamp: number,
      formatTimeStr: string,
      offsetLeft: number,
      scaleVal: number
    ): void => {
      for (let i = tickLevel.length - 1; i >= 0; i--) {
        const mode = state.unitOfObject ? (carryUnitTime / tickLevel[i]) * state.unitOfObject.value : 0;
        if (timestamp > halfTimestamp && tickLevel[i] === 6) {
          continue;
        }
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

    const mouseenter = (e: MouseEvent): void => {
      if (this.state.futureMode) {
        (e.target as HTMLElement).style.cursor = this.isHistoryTime(e.offsetX)
          ? 'not-allowed'
          : 'pointer';
      }
    };

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

    const pointermove = (e: MouseEvent): void => {
      if (this.state.futureMode) {
        (e.target as HTMLElement).style.cursor = this.isHistoryTime(e.offsetX)
          ? 'not-allowed'
          : 'pointer';
      }
    };

    const mouseup = (e: MouseEvent): void => {
      e.preventDefault();
      mouseDowned = false;
      mouseUpTime = Date.now();
      isMouseEvent = mouseUpTime - mouseDownTime > diffTime;
      if (!isMouseEvent) {
        if (clickWhich === CLICK_LEFT) {
          if (this.state.futureMode) {
            if (!this.isHistoryTime(e.offsetX)) {
              this.emit('time-bar-click', {
                offset: startPos - canvas.getBoundingClientRect().left,
              });
            }
          } else {
            this.emit('time-bar-click', {
              offset: startPos - canvas.getBoundingClientRect().left,
            });
          }
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
    canvas.addEventListener('mousemove', pointermove);
    canvas.addEventListener('mouseenter', mouseenter);
    window.addEventListener('mouseup', mouseup);
    canvas.addEventListener('wheel', wheelHandle);

    return {
      dispose: (): void => {
        canvas.removeEventListener('mouseenter', mouseenter);
        canvas.removeEventListener('mousemove', pointermove);
        canvas.removeEventListener('mousedown', mousedown);
        window.removeEventListener('mouseup', mouseup);
        canvas.removeEventListener('wheel', wheelHandle);
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

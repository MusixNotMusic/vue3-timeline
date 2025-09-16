import dayjs from "dayjs";
import { carryBitTable } from './parseTime'
import { EventEmitter } from "events";

const CLICK_Left = 1
const CLICK_MIDDLE = 2
const CLICK_RIGHT = 3

export class CanvasTimeBar extends EventEmitter {
    constructor(container, canvas, state, events) {
        super()
        this.container = container;
        this.canvas = canvas;
        this.state = state;
        this.events = events;

        this.canvasWidth = 0;
        this.canvasHeight = 0;

        this.resize()

        this.listener = this.addEventListener()
    }

    setCanvasProperties() {
        const { container, canvas } = this;

        if (!container) {
          return new Error('父容器不存在！')
        }

        this.canvasWidth = container.offsetWidth;
        this.canvasHeight = container.offsetHeight;

        if (canvas) {
            const scale = window.devicePixelRatio;
            canvas.width = this.canvasWidth;
            canvas.height = this.canvasHeight;
            canvas.style.width = this.canvasWidth + 'px';
            canvas.style.height = this.canvasHeight + 'px';
        }
    }

    renderer() {
        const { canvas, canvasWidth, canvasHeight } = this;
        if (canvas) {
            const ctx = canvas.getContext('2d')
            ctx.clearRect(0, 0, canvasWidth, canvasHeight)

            if (this.state.futureMode) {
                this.drawBackground(ctx)
            }
            this.drawTimeAxis(ctx)
        }
    }

    isHistoryTime(x) {
        const { state } = this;
        const timestamp = state.startTimeStamp + x * state.unitOfMs

        const now = dayjs();
        const mintuns = now.minute();
        const halfTimestamp = now.set('minute', 30 * Math.ceil(mintuns / 30)).valueOf()
        return timestamp < halfTimestamp;
    }

    drawBackground (ctx) {
        const { canvasWidth, canvasHeight, state } = this;
        const now = dayjs();
        const mintuns = now.minute();
        const halfTimestamp = now.set('minute', 30 * Math.ceil(mintuns / 30)).valueOf()
        const x = Math.max((halfTimestamp - state.startTimeStamp) / state.unitOfMs, 0);
        ctx.beginPath()
        ctx.rect(0, 0, x, canvasHeight)
        ctx.fillStyle = '#9c9c9c'
        ctx.fill()
        ctx.beginPath()
        ctx.rect(x, 0, canvasWidth, canvasHeight)
        ctx.fillStyle = 'rgba(0, 99, 157, 0.6)'
        ctx.fill()
        ctx.closePath()
    }


    drawTimeAxis (ctx) {
        const { canvasWidth, canvasHeight, state } = this
        const { carryUnitTime, tickLevel, colors, formatTime, scale } = carryBitTable[state.unitOfObject.unit]

        const now = dayjs();
        const mintuns = now.minute();
        const halfTimestamp = now.set('minute', 30 * Math.ceil(mintuns / 30)).valueOf()
        //根据等级 画出坐标轴刻度
        const drawTick = (ctx, timestamp, formatTimeStr, offsetLeft, scale) => {
            for (let i = tickLevel.length - 1; i >= 0; i--) {
                const mode = carryUnitTime / tickLevel[i] * state.unitOfObject.value
                if (timestamp > halfTimestamp && (tickLevel[i] === 6)) {
                    continue
                }
                if (timestamp % mode === 0) {
                    if (i === 0) {
                        state.timeTickList.push({
                            value: formatTimeStr,
                            left: offsetLeft,
                            scale: scale
                        })
                    }
                    ctx.beginPath();
                    ctx.moveTo(offsetLeft, canvasHeight / 2  + i * 2);
                    ctx.lineTo(offsetLeft, canvasHeight);
                    ctx.strokeStyle = colors[i]
                    ctx.stroke();
                }
            }
        }

        state.timeTickList = []

        ctx.resetTransform()
        ctx.translate(0.5, 0.5)

        for (let x = 0; x < canvasWidth; x++) {
            const timestamp = dayjs(state.startTimeStamp + x * state.unitOfMs).valueOf()
            const formatTimeStr = dayjs(state.startTimeStamp + x * state.unitOfMs).format(formatTime)
            drawTick(ctx, timestamp, formatTimeStr, x, scale)
        }
    }

    addEventListener () {
        const { canvas, state } = this

        let startPos = 0;
        let endPos = 0;
        let diffPos = 0;

        let mouseDowned = false
        // 是`鼠标按下`操作
        let isMouseEvent = false
        // 鼠标按下时长
        let diffTime = 200;
        let mouseDownTime = 0;
        let mouseUpTime = 0;

        let clickWhich;

        const mouseenter = (e) => {
            if (this.state.futureMode) {
                e.target.style.cursor =  this.isHistoryTime(e.offsetX) ? 'not-allowed' : 'pointer';
            }
        }

        const mousedown = (e) => {
            e.preventDefault();
            if (canvas === e.target) {
                clickWhich = e.which
                mouseDowned = true;
                isMouseEvent = false;
                mouseDownTime = Date.now();
                startPos = e.clientX;
                e.target.style.cursor = 'pointer';
                this.emit('time-bar-mousedown', {offset: startPos})
                window.addEventListener('mousemove', mousemove)
            }
        }


        const mousemove = (e) => {
            // e.preventDefault();
            if (mouseDowned) {
                endPos = e.clientX;
                diffPos = endPos - startPos;
                startPos = endPos;
                state.startTimeStamp = state.startTimeStamp - diffPos * state.unitOfMs;
                this.emit('time-bar-mousemove', { movePixel: diffPos})
                this.renderer()
            }
        }

        const pointermove = (e) => {
            if (this.state.futureMode) {
                e.target.style.cursor = this.isHistoryTime(e.offsetX) ? 'not-allowed' : 'pointer';
            }
        }

        const mouseup = (e) => {
            e.preventDefault();
            mouseDowned = false;
            mouseUpTime = Date.now();
            isMouseEvent = mouseUpTime - mouseDownTime > diffTime
            if (!isMouseEvent) {
                if (clickWhich === CLICK_Left) {
                    if (this.state.futureMode) {
                        if (!this.isHistoryTime(e.offsetX)) {
                            this.emit('time-bar-click', {offset: startPos - canvas.getBoundingClientRect().left})
                        }
                    } else {
                        this.emit('time-bar-click', {offset: startPos - canvas.getBoundingClientRect().left})
                    }
                }
            } else {
                this.emit('time-bar-mouseup', { offset: endPos - canvas.getBoundingClientRect().left })
                window.removeEventListener('mousemove', mousemove)
            }
            // e.target.style.cursor = 'default';
        }

        const mouseleave = (e) => {
            e.preventDefault();
            if (mouseDowned) {
                mouseDowned = false;
                mouseUpTime = Date.now();
                isMouseEvent = mouseUpTime - mouseDownTime > diffTime
                if (!isMouseEvent) {
                    if (clickWhich === CLICK_Left) {
                        this.emit('time-bar-click', {offset: startPos})
                    }
                } else {
                    this.emit('time-bar-mouseleave', { offset: endPos })
                }
                e.target.style.cursor = 'default';
            }
        }

        const wheelHandle = (e) => {
            e.preventDefault();
            const diffPos = ( e.deltaY * 0.1 ) * window.devicePixelRatio | 0;
            state.startTimeStamp = state.startTimeStamp - diffPos * state.unitOfMs;
            this.emit('time-bar-mousemove', { movePixel: diffPos })
            this.renderer()
        }

        canvas.addEventListener('mousedown', mousedown)
        canvas.addEventListener('mousemove', pointermove)
        canvas.addEventListener('mouseenter', mouseenter)
        // canvas.addEventListener('mousemove', mousemove)
        window.addEventListener('mouseup', mouseup)
        // window.addEventListener('mouseleave', mouseleave)
        canvas.addEventListener('wheel', wheelHandle)

        return {
            dispose: () => {
                canvas.removeEventListener('mouseenter', mouseenter)
                canvas.removeEventListener('mousemove', pointermove)
                window.removeEventListener('mousedown', mousedown)
                // canvas.removeEventListener('mousemove', mousemove)
                window.removeEventListener('mouseup', mouseup)
                // window.removeEventListener('mouseleave', mouseleave)
                canvas.removeEventListener('wheel', wheelHandle)
            }
        }
    }


    resize () {
        if (this.container) {
            const resizeObserver = new ResizeObserver((entries) => {
                setTimeout(() => {
                    this.setCanvasProperties()
                    this.renderer()
                    this.emit('time-bar-resize')
                })
            })
            resizeObserver.observe(this.container);
        }
    }

    dispose () {
        this.container = null;
        this.canvas = null;
        this.state = null;
        this.events = null;

        this.removeAllListeners('time-bar-resize')
        this.removeAllListeners('time-bar-mousedown')
        this.removeAllListeners('time-bar-mousemove')
        this.removeAllListeners('time-bar-mouseleave')
        this.removeAllListeners('time-bar-click')

        if (this.listener) {
            this.listener.dispose()
        }
    }
}

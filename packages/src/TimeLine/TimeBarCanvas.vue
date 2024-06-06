<template>
    <div class="time-bar-wrap" ref="timeBarWrapRef">
        <div class="time-bar-box">
          <!-- canvas  -->
          <div class="time-bar-canvas-wrap" ref="timeBarCanvasWrapRef">
            <canvas ref="timeBarCanvasRef"></canvas>
          </div>
          <!-- time label list  -->
          <TimeTickLabel :list="timeTickList"></TimeTickLabel>
          <!-- time cursor pointer -->
          <TimePointer  v-if="props.mode !== MODE.Animation"  :offset="pointerLeftOffset" :timeFormatText="pointerFormatTimeText" :timeBarWidth="timeBarWidth" @mousemove="timePointerChange"></TimePointer>

          <NowPointer :unitTime="unitOfMs" :startTimeStamp="startTimeStamp" :timeBarWidth="timeBarWidth" @change="nowPointerChange"></NowPointer>

          <slot name="animation" :animationProps="state"></slot>
        </div>
    </div>
</template>
<script lang="ts">
import { onBeforeMount, onMounted, onUnmounted, reactive, ref, toRefs, watch } from "vue";
import moment from "moment";

import { parseTimeStringToMillisecond, parseTimeStringToObject, carryBitTable, getWholeTimeByUnit } from './utils/parseTime'
import { CanvasTimeBar } from "./utils/canvasTimeBar";
import TimeTickLabel from './TimeTickLable.vue'
import TimePointer from './FreePointer.vue'
import NowPointer from './NowPointer.vue'

enum MODE {
  Default = 'default',
  Live = 'live',
  Animation = 'animation'
}

export default {
    name: "TimeBarCanvas",
    emits:['modeChange', 'currentTimeChange'],
    components: { TimeTickLabel, TimePointer, NowPointer },
    props: {
        currentTimeStamp: {
            type: [Date, Number],
            default: Date.now()
        },
        // 一像素 时间单位 最小单位 ms
        onePixelTimeUnit: {
            type: [Number, String],
            default: '30s'
        },
        mode: {
          type: String,
          default: 'default',  // 'live' | 'animation' | 'default'
        }
    },
    setup(props, { emit }) {

      const timeBarWrapRef = ref(null);
      const timeBarCanvasWrapRef = ref(null);
      const timeBarCanvasRef = ref(null);

      const state = reactive({
        currentTimeStamp: props.currentTimeStamp,
        startTimeStamp: 0,
        timeTickList: [],
        unitOfMs: parseTimeStringToMillisecond(props.onePixelTimeUnit),
        unitOfObject: parseTimeStringToObject(props.onePixelTimeUnit),
        timeBarWidth: 0,
        pointerFormatTimeText: '',
        pointerLeftOffset: 0,
        pointerDisabled: false,
        MODE: MODE
      });

      watch(() => props.currentTimeStamp, (val, old) => {
        if (val !== old) {
          updateCurrentTimeByTime(props.currentTimeStamp)
        }
      })

      watch(() => props.mode, (val, old) => {
        if (val && val !== old) {
          if (val === MODE.Live) {
            updateCurrentTimeByTime(Date.now())
          }
        }
      })

      const init = () => {
        if (timeBarCanvasWrapRef.value) {
          state.timeBarWidth = timeBarCanvasWrapRef.value.offsetWidth
          state.startTimeStamp = moment(getWholeTimeByUnit(state.currentTimeStamp - state.timeBarWidth / 2 * state.unitOfMs, state.unitOfObject.unit)).valueOf()
          state.pointerLeftOffset = (state.currentTimeStamp - state.startTimeStamp) / state.unitOfMs
        }
        state.pointerFormatTimeText = moment(state.currentTimeStamp).format(carryBitTable[state.unitOfObject.unit].formatTime)
      }

      const setStartTime = (time) => {
        state.startTimeStamp = moment(getWholeTimeByUnit(time, state.unitOfObject.unit)).valueOf()
        if (timeBarCanvasWrapRef.value) {
          state.timeBarWidth = timeBarCanvasWrapRef.value.offsetWidth
        }
        if (canvasTimeBar) canvasTimeBar.renderer()
      }

      let canvasTimeBar = null;

      const addCanvasEventListener = () => {
        canvasTimeBar.on('time-bar-click', ({offset}) => {
          updateCurrentTimeByOffset(offset)

          if (props.mode === MODE.Live) {
            emit('modeChange', { mode: MODE.Default })
          }
        })

        canvasTimeBar.on('time-bar-mousemove', ({movePixel}) => {
          state.pointerLeftOffset = state.pointerLeftOffset + movePixel
        })

        canvasTimeBar.on('time-bar-resize', () => {
          if (timeBarCanvasWrapRef.value) {
            state.timeBarWidth = timeBarCanvasWrapRef.value.offsetWidth
          }
        })
      }

      const timePointerChange = (offset) => {
        emit('modeChange', { mode: MODE.Default })
        updateCurrentTimeByOffset(offset)
      }

      const nowPointerChange = ({ offset, needNextPage }) => {
        if (props.mode === MODE.Live) {
          updateCurrentTimeByOffset(offset)
          if (needNextPage) {
            setStartTime(state.currentTimeStamp)
          }
        }
      }

      const updateCurrentTimeByOffset = (offset) => {
        if (offset > state.timeBarWidth) {
          setStartTime(state.startTimeStamp + state.unitOfMs * state.timeBarWidth)
          state.pointerLeftOffset = offset - state.timeBarWidth
        } else if (offset < 0) {
          setStartTime(state.startTimeStamp - state.unitOfMs * state.timeBarWidth)
          state.pointerLeftOffset = state.timeBarWidth + offset
        } else {
          state.pointerLeftOffset = offset
        }
        state.currentTimeStamp = state.startTimeStamp + state.pointerLeftOffset * state.unitOfMs
        state.pointerFormatTimeText = moment(state.currentTimeStamp).format(carryBitTable[state.unitOfObject.unit].formatTime)
        emit('currentTimeChange', { time: state.currentTimeStamp })
      }

      const updateCurrentTimeByTime = (time) => {
        const timeValue = time.valueOf();
        if (state.currentTimeStamp !== timeValue) {
          const offset = (timeValue - state.startTimeStamp) / state.unitOfMs;
          updateCurrentTimeByOffset(offset)
        }
      }

      const prevTimeTick = () => {
        console.log('prevTimeTick')
        updateCurrentTimeByOffset(state.pointerLeftOffset - 1)
      }

      const nextTimeTick = () => {
        console.log('nextTimeTick')
        updateCurrentTimeByOffset(state.pointerLeftOffset + 1)
      }

      onBeforeMount(() => { });

      onMounted(() => {
        setTimeout(() => {
          init()
          canvasTimeBar = new CanvasTimeBar(timeBarCanvasWrapRef.value, timeBarCanvasRef.value, state)
          addCanvasEventListener()
        })
      });

      onUnmounted(() => {
        canvasTimeBar.dispose()
      })

      const refData = toRefs(state);

      return {
        state,
        props,
        ...refData,
        timeBarWrapRef,
        timeBarCanvasWrapRef,
        timeBarCanvasRef,
        timePointerChange,
        nowPointerChange,
        prevTimeTick,
        nextTimeTick
      };
    }
}
</script>
<style lang="scss" scoped>
.time-bar-wrap {
  width: 100%;
  height: 62px;
  position: relative;
  min-width: 600px;
  display: flex;
  align-items: center;
  padding: 0px 20px;

  .time-bar-box {
    width: 100%;
    position: relative;

    .time-bar-canvas-wrap {
      width: 100%;
      height: 18px;
    }
  }

}
</style>

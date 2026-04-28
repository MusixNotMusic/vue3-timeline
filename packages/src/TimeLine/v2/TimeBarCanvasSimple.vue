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
          <FreePointer
            :startTimeStamp="startTimeStamp"
            :freeTimeStamp="currentTimeStamp"
            :timeBarWidth="timeBarWidth"
            :unitTime="unitOfMs"
            :onePixelTimeUnit="onePixelTimeUnit"
            @change="freeTimeStampChange">
          </FreePointer>

          <NowPointer
            v-model:value="startTimeStamp"
            :timeBarWidth="timeBarWidth"
            :unitTime="unitOfMs"
            @change="nowTimeStampChange"
            @triggleNow="triggleNow"
          >
          </NowPointer>

          <slot name="animation" :animationProps="state"></slot>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted, reactive, ref, toRefs, watch, type PropType } from "vue";
import dayjs from "dayjs";

import { parseTimeStringToMillisecond, parseTimeStringToObject, getWholeTimeByUnit } from '../utils/parseTime'
import { CanvasTimeBar } from "../utils/canvasTimeBarV2";
import TimeTickLabel from './TimeTickLable.vue'
import FreePointer from './FreePointer.vue'
import NowPointer from './NowPointer.vue'
import type { TimeBarState, NowPointerChangePayload } from '../../types';

export default defineComponent({
    name: "TimeBarCanvasSimple",
    emits: {
      clickTimeBar: () => true,
      nowTimeStampChange: (_timestamp: number) => true,
      change: (_timestamp: number) => true,
    },
    components: { TimeTickLabel, FreePointer, NowPointer },
    props: {
        currentTimeStamp: {
            type: [Date, Number] as PropType<Date | number>,
            default: () => Date.now()
        },
        onePixelTimeUnit: {
            type: [Number, String] as PropType<number | string>,
            default: '30s'
        },
        forecast: Boolean
    },
    setup(props, { emit }) {

      const timeBarWrapRef = ref<HTMLDivElement | null>(null);
      const timeBarCanvasWrapRef = ref<HTMLDivElement | null>(null);
      const timeBarCanvasRef = ref<HTMLCanvasElement | null>(null);

      const state = reactive<TimeBarState>({
        startTimeStamp: 0,
        timeTickList: [],
        unitOfMs: parseTimeStringToMillisecond(props.onePixelTimeUnit),
        unitOfObject: parseTimeStringToObject(props.onePixelTimeUnit),
        timeBarWidth: 0,
        pointerDisabled: false,
        futureMode: props.forecast
      });

      let canvasTimeBar: CanvasTimeBar | null = null;

      watch(() => props.currentTimeStamp, (val, old) => {
        if(val !== old) {
          setStartTimeStamp(Number(props.currentTimeStamp));
        }
      })

      watch(() => props.forecast, (val, old) => {
        if (val !== old) {
          state.futureMode = val;
          if (canvasTimeBar) {
            canvasTimeBar.renderer();
          }
        }
      })

      /**
       * 初始化时间轴
       */
      const initTimeBar = () => {
        if (timeBarCanvasWrapRef.value) {
          state.timeBarWidth = timeBarCanvasWrapRef.value.offsetWidth
          state.startTimeStamp = dayjs(getWholeTimeByUnit(dayjs(props.currentTimeStamp).valueOf() - state.timeBarWidth / 2 * state.unitOfMs, state.unitOfObject?.unit || 'm')).valueOf()
        }
      }

      /**
       * 设置时间条起始时间
       */
      const setStartTimeStamp = (time: number) => {
        const endTimeStamp = state.startTimeStamp + state.timeBarWidth * state.unitOfMs;
        if (time < state.startTimeStamp || time > endTimeStamp) {
          initTimeBar();

          if (canvasTimeBar) {
            canvasTimeBar.renderer();
          }
        }
      }

      const addCanvasEventListener = () => {
        if (!canvasTimeBar) return;
        canvasTimeBar.on('time-bar-click', ({offset}: { offset: number }) => {
          const currentTimeStamp = Math.ceil(state.startTimeStamp + offset * state.unitOfMs);
          const now = dayjs();
          const minutes = now.minute();
          const halfTimestamp = now.set('minute', 30 * Math.ceil(minutes / 30)).set('second', 0).set('millisecond', 0).valueOf()
          if (currentTimeStamp <= halfTimestamp) {
            emit('change', currentTimeStamp);
          } else {
            const minute = dayjs(currentTimeStamp).minute();
            const err = minute % 30 / 30;
            if (err > 0.8 || err < 0.2) {
              emit('change', dayjs(currentTimeStamp).set('minute', Math.round(minute / 30) * 30).valueOf());
            } else {
              console.log('canvasTimeBar ==>', canvasTimeBar);
              setTimeout(() => {
                if (canvasTimeBar?.canvas) {
                  canvasTimeBar.canvas.style.cursor = 'no-allowed'
                }
              })
            }
          }
          emit('clickTimeBar')
        })

        canvasTimeBar.on('time-bar-resize', () => {
          if (timeBarCanvasWrapRef.value) {
            state.timeBarWidth = timeBarCanvasWrapRef.value.offsetWidth;
          }
        })
      }

      const freeTimeStampChange = (time: number) => {
        emit('change', time);
      }

      const nowTimeStampChange = (payload: NowPointerChangePayload) => {
        emit('nowTimeStampChange', payload.nowTimeStamp);
      }

      const prevTimeTick = (rate: { value: number }) => {
        console.log('prevTimeTick', rate)
        emit('change', Number(props.currentTimeStamp) + state.unitOfMs * rate.value );
      }

      const nextTimeTick = (rate: { value: number }) => {
        console.log('nextTimeTick', rate)
        emit('change', Number(props.currentTimeStamp) + state.unitOfMs * rate.value);
      }

      const triggleNow = () => {
        console.log('triggleNow')
        if(canvasTimeBar) {
          canvasTimeBar.renderer()
        }
      }

      onMounted(() => {
        setTimeout(() => {
          initTimeBar()
          if (timeBarCanvasWrapRef.value && timeBarCanvasRef.value) {
            canvasTimeBar = new CanvasTimeBar(timeBarCanvasWrapRef.value, timeBarCanvasRef.value, state)
            addCanvasEventListener()
          }
        })
      });

      onUnmounted(() => {
        if (canvasTimeBar) {
          canvasTimeBar.dispose()
        }
      })

      const refData = toRefs(state);

      return {
        state,
        ...refData,
        timeBarWrapRef,
        timeBarCanvasWrapRef,
        timeBarCanvasRef,
        freeTimeStampChange,
        nowTimeStampChange,
        prevTimeTick,
        nextTimeTick,
        triggleNow
      };
    }
})
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
  user-select: none;

  .time-bar-box {
    width: 100%;
    position: relative;

    .time-bar-canvas-wrap {
      width: 100%;
      height: 18px;
      canvas {
        background: white;
      }
    }
  }

}
</style>

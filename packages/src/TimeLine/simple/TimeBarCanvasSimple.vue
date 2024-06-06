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
            @change="nowTimeStampChange">
          </NowPointer>

          <slot name="animation" :animationProps="state"></slot>
        </div>
    </div>
</template>
<script>
import { onBeforeMount, onMounted, onUnmounted, reactive, ref, toRefs, watch } from "vue";
import moment from "moment";

import { parseTimeStringToMillisecond, parseTimeStringToObject, getWholeTimeByUnit } from '../utils/parseTime'
import { CanvasTimeBar } from "../utils/canvasTimeBar";
import TimeTickLabel from '../TimeTickLable.vue'
import FreePointer from '../FreePointer.vue'
import NowPointer from '../NowPointer.vue'


export default {
    name: "TimeBarCanvasSimple",
    emits:['clickTimeBar', 'nowTimeStampChange', 'change'],
    components: { TimeTickLabel, FreePointer, NowPointer },
    props: {
        currentTimeStamp: {
            type: [Date, Number],
            default: Date.now()
        },
        // 一像素 时间单位 最小单位 ms
        onePixelTimeUnit: {
            type: [Number, String],
            default: '30s'
        }
    },
    setup(props, { emit }) {

      const timeBarWrapRef = ref(null);
      const timeBarCanvasWrapRef = ref(null);
      const timeBarCanvasRef = ref(null);

      const state = reactive({
        startTimeStamp: 0,
        timeTickList: [],
        unitOfMs: parseTimeStringToMillisecond(props.onePixelTimeUnit),
        unitOfObject: parseTimeStringToObject(props.onePixelTimeUnit),
        timeBarWidth: 0,
        pointerDisabled: false,
      });

      let canvasTimeBar = null;

      watch(() => props.currentTimeStamp, (val, old) => {
        if(val !== old) {
          setStartTimeStamp(props.currentTimeStamp);
        }
      })

      /**
       * 初始化时间轴
       */
      const initTimeBar = () => {
        if (timeBarCanvasWrapRef.value) {
          state.timeBarWidth = timeBarCanvasWrapRef.value.offsetWidth
          state.startTimeStamp = moment(getWholeTimeByUnit(props.currentTimeStamp.valueOf() - state.timeBarWidth / 2 * state.unitOfMs, state.unitOfObject.unit)).valueOf()
        }
      }

      /**
       * 设置时间条起始时间
       */
      const setStartTimeStamp = (time) => {
        const endTimeStamp = state.startTimeStamp + state.timeBarWidth * state.unitOfMs;
        if (time < state.startTimeStamp || time > endTimeStamp) {
          initTimeBar();
        }
      }

      const addCanvasEventListener = () => {
        canvasTimeBar.on('time-bar-click', ({offset}) => {
          const currentTimeStamp = state.startTimeStamp + offset * state.unitOfMs;
          emit('change', currentTimeStamp);
          emit('clickTimeBar')
        })

        canvasTimeBar.on('time-bar-mousemove', ({movePixel}) => {
        })

        canvasTimeBar.on('time-bar-resize', () => {
          if (timeBarCanvasWrapRef.value) {
            state.timeBarWidth = timeBarCanvasWrapRef.value.offsetWidth;
          }
        })
      }

      const freeTimeStampChange = (time) => {
        emit('change', time);
      }

      const nowTimeStampChange = ({ offset, needNextPage, nowTimeStamp }) => {
        emit('nowTimeStampChange', nowTimeStamp);
      }

      const setRealTime = (time) => {
      }

      const prevTimeTick = () => {
        console.log('prevTimeTick')
        emit('change', props.currentTimeStamp - state.unitOfMs);
      }

      const nextTimeTick = () => {
        console.log('nextTimeTick')
        emit('change', props.currentTimeStamp + state.unitOfMs);
      }

      onMounted(() => {
        setTimeout(() => {
          initTimeBar()
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
        ...refData,
        timeBarWrapRef,
        timeBarCanvasWrapRef,
        timeBarCanvasRef,
        freeTimeStampChange,
        nowTimeStampChange,
        prevTimeTick,
        nextTimeTick,
        setRealTime,
        // setLiveMode,
        // updateCurrentTime
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

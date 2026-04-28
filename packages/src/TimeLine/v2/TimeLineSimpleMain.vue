<template>
    <div class="time-line" :theme="props.theme">
        <TimeNotController
                ref="TimeNotControllerRef"
                :isPlay="isPlay"
                @preTimeTickClick="prevTick"
                @nextTimeTickClick="nextTick"
                @playAnimationClick="playAnimationClick"
        ></TimeNotController>

        <slot name="TimeBarControlDashboard"></slot>

        <div class="live-btn"
            :class="{ 'btn-down': isLive, 'btn-up': !isLive }"
            @click="liveModeClick"> 实况 </div>

        <TimeBarCanvasSimple
            ref="TimeBarCanvasRef"
            :onePixelTimeUnit="props.onePixelTimeUnit"
            :currentTimeStamp="currentTimestamp"
            :forecast="forecast"
            @clickTimeBar="clickTimeBar"
            @nowTimeStampChange="nowTimeStampChange"
            @change="currentTimeChange">
        </TimeBarCanvasSimple>
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs, ref, watch, onUnmounted, type PropType } from 'vue'
import dayjs from 'dayjs'

import TimeNotController from './TimeNotController.vue'
import TimeBarCanvasSimple from './TimeBarCanvasSimple.vue'
import TimeTickLabel from './TimeTickLable.vue'
import TimePointer from './FreePointer.vue'
import { _setInterval, _clearInterval } from '../utils/interval'
import { parseTimeStringToMillisecond } from '../utils/parseTime'
import { ManualController } from '../../types'
import '../iconfont/iconfont.css'

enum Mode {
  Default,
  Live,
  Manual,
  Auto
};

export default defineComponent({
    name: 'TimeLineSimpleMain',
    emit: [
      'autoAnimationTimeStampChange',
      'manualAnimationTimeStampChange',
      'currentTimeChange',
      'update:modelValue'
    ],
    components: {
      TimeNotController,
      TimeBarCanvasSimple,
      TimeTickLabel,
      TimePointer,
    },
    props: {
        theme: {
          type: String,
          default: 'default'
        },
        modelValue: {
          type: [Date, Number] as PropType<Date | number>,
          required: true
        },
        onePixelTimeUnit: {
          type: [Number, String] as PropType<number | string>,
          default: '1m'
        },
        stepSecond: {
          type: [Number, String] as PropType<number | string>,
          default: 3 * 60 * 1000
        },
        playMode: {
          type: String,
          default: 'auto'
        },
        live: Boolean,
        forecast: Boolean,
    },
    setup (props, { emit }) {
        const TimeBarCanvasRef = ref<InstanceType<typeof TimeBarCanvasSimple> | null>(null)
        const TimeAnimationBarRef = ref(null)
        const TimeNotControllerRef = ref<InstanceType<typeof TimeNotController> | null>(null)

        watch(() => props.forecast, (val, old) => {
          if(val !== old) {
            state.forecast = val;
          }
        })

        const state = reactive({
          isLive: false,
          isPlay: false,
          isAutoPlay: false,
          currentTimestamp: dayjs(props.modelValue).valueOf(),
          nowTimeStamp: 0,
          currentMode: Mode.Default,
          transformMode: Mode.Default,
          forecast: !!props.forecast
        })

        watch(() => props.playMode, (val, old) => {
          if (val !== old) {
            toDefault();
            toAutoStop();
            toManualStop();
            setStopStatus();
          }
        })

        watch(() => props.modelValue, (val, old) => {
          if (val && old && dayjs(val).valueOf() !== dayjs(old).valueOf()) {
            currentTimeChange(val);
          }
        })

        // =======================
        const noop = (): void => {};

        const toDefault = (): void => {
          state.isLive = false;
        }

        const toLive = (): void => {
          currentTimeChange(state.nowTimeStamp);
          state.isLive = true;
        }

        // ===========Auto Play==================

        let timer: ReturnType<typeof _setInterval> | number = -1;
        const delayTime = 1000;

        const toAutoPlay = (): void => {
          toAutoStop();
          timer = _setInterval(() => {
            state.currentTimestamp = dayjs(state.currentTimestamp).valueOf() + Number(props.stepSecond);
            emit('autoAnimationTimeStampChange', state.currentTimestamp);
            emit('update:modelValue', state.currentTimestamp);
          }, delayTime)
        }

        const toAutoStop = (): void => {
          _clearInterval(timer);
        }

        const setStopStatus = (): void => {
          if(TimeNotControllerRef.value) {
            TimeNotControllerRef.value.setStopStatus()
          }
        }

        //===========手动播放===============
        let manualController: ManualController = {};
        const toManualPlay = (): void => {
          manualController.currentTimestamp = state.currentTimestamp;
          manualController.nextTick = (time) => {
            state.currentTimestamp = dayjs(time).valueOf();
            manualController.currentTimestamp = dayjs(time).valueOf();
          };

          emit('manualAnimationTimeStampChange', manualController);
          emit('update:modelValue', state.currentTimestamp);
        }

        const toManualStop = (): void => {
          if (manualController.stop) {
            manualController.stop();
          }
        }

        const default2live = (): void => {
          toLive();
        }

        const default2manual = (): void => {
          toManualPlay();
        }

        const default2auto = (): void => {
          toAutoPlay();
        }

        const live2default = (): void => {
          toDefault();
        }
        const live2live = noop;
        const live2manual = (): void => {
          toDefault();
          toManualPlay();
        }
        const live2auto = (): void => {
          toDefault();
          toAutoPlay();
        }

        const manual2default = (): void => {
          toDefault();
          toManualStop();
          setStopStatus();
        }
        const manual2live = (): void => {
          toManualStop();
          toLive();
          setStopStatus();
        }

        const manual2manual = noop;
        const manual2auto = noop;

        const auto2default = (): void => {
          toDefault();
          toAutoStop();
          setStopStatus();
        }
        const auto2live = (): void => {
          toAutoStop();
          toLive();
          setStopStatus();
        }
        const auto2manual = noop;
        const auto2auto = noop;

        /**
         * 状态机列表
         */
        const stateMechine: Array<Array<() => void>> = [
          [noop,           default2live, default2manual, default2auto],
          [live2default,   live2live,    live2manual,    live2auto],
          [manual2default, manual2live,  manual2manual,  manual2auto],
          [auto2default,   auto2live,    auto2manual,    auto2auto],
        ];

        /**
         * action 触发时间
         * 1、prevTimeClick
         * 2、nextTimeClick
         * 3、playClick
         * 4、changeTimeClick
         * 5、liveMode
         */


        const transformEvent = (eventType: string, mode: Mode): void => {
          let transformFunc = noop;
          switch(eventType) {
            case 'prevTime':   transformFunc = stateMechine[state.currentMode][mode]; break;
            case 'nextTime':   transformFunc = stateMechine[state.currentMode][mode]; break;
            case 'play':       transformFunc = stateMechine[state.currentMode][mode]; break;
            case 'changeTime': transformFunc = stateMechine[state.currentMode][mode]; break;
            case 'liveMode':   transformFunc = stateMechine[state.currentMode][mode]; break;
            case 'clickTimeBar':   transformFunc = stateMechine[state.currentMode][mode]; break;
          }

          transformFunc();
          state.currentMode = mode;
        }

        const liveModeClick = (): void => {
            if(state.currentMode === Mode.Live) {
              transformEvent('liveMode', Mode.Default);
            } else if(state.currentMode === Mode.Default){
              transformEvent('liveMode', Mode.Live);
            } else if(state.currentMode === Mode.Auto){
              transformEvent('liveMode', Mode.Live);
            } else if(state.currentMode === Mode.Manual){
              transformEvent('liveMode', Mode.Live);
            }
        }

        /**
         * 1、主动触发
         * 2、被动触发
         */
        const playAnimationClick = (isPlay: boolean): void => {
          if (props.playMode === 'auto') {
            autoPlayClick(isPlay);
          } else if (props.playMode === 'manual'){
            manualPlayClick(isPlay);
          }
        }

        const autoPlayClick = (isPlay: boolean): void => {
          if (isPlay) {
            transformEvent('play', Mode.Auto);
          } else {
            transformEvent('play', Mode.Default);
          }
        }

        const manualPlayClick = (isPlay: boolean): void => {
          if (isPlay) {
            transformEvent('play', Mode.Manual);
          } else {
            transformEvent('play', Mode.Default);
          }
        }

        const clickTimeBar = (): void => {
          transformEvent('clickTimeBar', Mode.Default);
        }


        const preTimeTickClick = (rate: { value: number }): void => {
          if (TimeBarCanvasRef.value) {
            const k = Number(props.stepSecond) / parseTimeStringToMillisecond(props.onePixelTimeUnit);
            rate.value = rate.value * k;
            TimeBarCanvasRef.value.prevTimeTick(rate);
          }
        }

        const nextTimeTickClick = (rate: { value: number }): void => {
          if (TimeBarCanvasRef.value) {
            const k = Number(props.stepSecond) / parseTimeStringToMillisecond(props.onePixelTimeUnit);
            rate.value = rate.value * k;
            TimeBarCanvasRef.value.nextTimeTick(rate)
          }
        }


      const currentTimeChange = (time: Date | number): void => {
        if (dayjs(state.currentTimestamp).valueOf() !== dayjs(time).valueOf()) {
          state.currentTimestamp = dayjs(time).valueOf();
          emit('currentTimeChange', time);
          emit('update:modelValue', time);
        }
      }

      /**
       * 当前时间修改
       * @param time
       */
      const nowTimeStampChange = (time: number): void => {
          state.nowTimeStamp = time;
          if (state.currentMode === Mode.Live) {
            state.currentTimestamp = state.nowTimeStamp;
            emit('currentTimeChange', time);
            emit('update:modelValue', time);
          }
      }

      const toDefaultStatus = (): void => {
        clickTimeBar();
      }

      const prevTick = (): void => {
        const now = dayjs();
        const minutes = now.minute();
        const halfTimestamp = now.set('minute', 30 * Math.ceil(minutes / 30)).set('second', 0).set('millisecond', 0).valueOf()
        const currentTimestamp = dayjs(state.currentTimestamp).set('second', 0).set('millisecond', 0).valueOf();
        if (currentTimestamp <= halfTimestamp) {
          if(state.forecast) return;
          preTimeTickClick({ value: -1 })
        } else {
          preTimeTickClick({ value: -(30 / (Number(props.stepSecond) / 60000)) })
        }
      }

      const nextTick = (): void => {
        const now = dayjs();
            const minutes = now.minute();
            const halfTimestamp = now.set('minute', 30 * Math.ceil(minutes / 30)).set('second', 0).set('millisecond', 0).valueOf()
            if (state.currentTimestamp < halfTimestamp) {
              if(state.forecast) return;
              const diff = halfTimestamp - dayjs(state.currentTimestamp).set('second', 0).set('millisecond', 0).valueOf();
              if (diff < Number(props.stepSecond)) {
                setTimeout(() => {
                  currentTimeChange(halfTimestamp);
                })
              } else {
                preTimeTickClick({ value: 1 })
              }
            } else {
              preTimeTickClick({ value: 30 / (Number(props.stepSecond) / 60000) })
            }
      }

      const keyDownHandler = (event: KeyboardEvent): void => {
        const key = event.key || event.keyCode;
        if (key === 'ArrowLeft' || key === 37) {
          prevTick();
        } else if (key === 'ArrowRight' || key === 39) {
          nextTick();
        } else if (key === 'ArrowUp' || key === 38) {
          if(state.forecast) return;
          liveModeClick();
        }
      }

      const addEventListener = (): void => {
        document.addEventListener('keydown', keyDownHandler);
      }

      const removeEventListener = (): void => {
        document.removeEventListener('keydown', keyDownHandler);
      }


      onMounted(() => {
        console.log('TimeLineNot state', state, props.live)
        if (props.live) {
          liveModeClick();
        }

        addEventListener();
      });

      onUnmounted(() => {
        removeEventListener();
      });

      const refData = toRefs(state);

      return {
        ...refData,
        props,
        TimeBarCanvasRef,
        TimeAnimationBarRef,
        TimeNotControllerRef,
        liveModeClick,
        preTimeTickClick,
        nextTimeTickClick,
        playAnimationClick,
        currentTimeChange,
        clickTimeBar,
        nowTimeStampChange,
        toDefaultStatus,
        nextTick,
        prevTick

      }
    }
})
</script>

<style lang="scss" scoped>
@import '../theme/default';
@import '../theme/blue';

.time-line {
      display: flex;
      align-items: center;
      background: var(--theme-bg);

      position: absolute;
      left: 0;
      bottom: 0px;
      width: 100%;
      z-index: 100;

      .t-data-search {
        width: 170px;
        height: 30px;

        border-radius: 4px;
        font-size: 12px;
        line-height: 30px;
        text-align: center;
        margin-left: 10px;
        position: relative;

        :deep(.el-date-editor.el-input) {
          width: 100%;
          line-height: 30px;
        }

        :deep(.el-input__inner) {
          height: 30px;
          line-height: 24px;
          border-radius: 4px;
          text-align: center;
          border: none;
          font-size: 14px;
          cursor: pointer;
          background-color: var(--theme-bg-deep);
          color: var(--text-color);
          padding: 0 0 0 25px;
        }
        :deep(.el-input__prefix) {
          i.el-input__icon {
            line-height: 30px;
            color: var(--text-color);
            font-size: 18px;
          }
        }
        // :deep(.el-input__prefix),
        :deep(.el-input__suffix) {
          display: none;
        }

        :deep(.is-disabled) {
          background: #ccc;
          border-radius: 4px;
          cursor: not-allowed;
        }
      }

  .live-btn {
    width: 48px;
    height: 30px;

    border-radius: 4px;
    text-align: center;
    line-height: 30px;
    color: var(--text-color);
    font-size: 12px;
    margin-left: 10px;
    cursor: pointer;
  }

  .btn-up {
    background: var(--theme-bg-deep);
  }

  .btn-down {
    background-color: var(--buttn-live-active);
  }
}
</style>

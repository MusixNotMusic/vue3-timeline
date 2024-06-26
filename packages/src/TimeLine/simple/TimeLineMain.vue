<template>
    <div class="time-line" :theme="props.theme">
        <TimeNotController
                ref="TimeNotControllerRef"
                :isPlay="isPlay"
                @preTimeTickClick="preTimeTickClick"
                @nextTimeTickClick="nextTimeTickClick"
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
            @clickTimeBar="clickTimeBar"
            @nowTimeStampChange="nowTimeStampChange"
            @change="currentTimeChange">
        </TimeBarCanvasSimple>
    </div>
</template>
<script lang="ts">
import { onMounted, reactive, toRefs, ref, watch } from 'vue'

import TimeNotController from './TimeNotController.vue'
import TimeBarCanvasSimple from './TimeBarCanvasSimple.vue'
import TimeTickLabel from '../TimeTickLable.vue'
import TimePointer from '../FreePointer.vue'
import { _setInterval, _clearInterval } from '../utils/interval'
import '../iconfont/iconfont.css'

enum Mode {
  Default,
  Live,
  Manual,
  Auto
};

export default {
    name: 'TimeLineMain',
    emit: [
      'autoAnimationTimeStampChange',
      'manualAnimationTimeStampChange',
      'currentTimeChange',
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
        value: {
          type: [Date, Number],
          default: Date.now()
        },
        onePixelTimeUnit: {
          type: [Number, String],
          default: '1m'
        },
        stepSecond: {
          type: [Number, String],
          default: 3 * 60 * 1000
        },
        playMode: {
          type: String,
          defalt: 'auto'
        }
    },
    setup (props: any, { emit }) {
        const TimeBarCanvasRef = ref(null)
        const TimeAnimationBarRef = ref(null)
        const TimeNotControllerRef = ref(null)


        const state: any = reactive({
          isLive: false,
          isPlay: false,
          isAutoPlay: false,
          currentTimestamp: props.value.valueOf(),
          nowTimeStamp: 0,
          currentMode: Mode.Default,
          transformMode: Mode.Default
        })

        watch(() =>props.playMode, (val, old) => {
          if (val !== old) {
            toDefault();
            toAutoStop();
            toManualStop();
            setStopStatus();
          }
        })


        watch(() =>props.value, (val, old) => {
          if (val.valueOf() !== old.valueOf()) {
            currentTimeChange(val);
          }
        })

        // =======================
        const noop = () => {};

        const toDefault = () => {
          state.isLive = false;
        }

        const toLive = () => {
          currentTimeChange(state.nowTimeStamp);
          state.isLive = true;
        }

        // ===========Auto Play==================

        let timer = -1;
        const delayTime = 1000;

        const toAutoPlay = () => {
          toAutoStop();
          timer = _setInterval(() => { 
            state.currentTimestamp = state.currentTimestamp.valueOf() + props.stepSecond;
            emit('autoAnimationTimeStampChange', state.currentTimestamp);
          }, delayTime)
        }

        const toAutoStop = () => { 
          _clearInterval(timer);
        }

        const setStopStatus = () => {
          if(TimeNotControllerRef.value) {
            TimeNotControllerRef.value.setStopStatus()
          }
        }

        //===========手动播放===============
        let manualController: any = {};
        const toManualPlay = () => {
          manualController.currentTimestamp = state.currentTimestamp;
          manualController.nextTick = (time) => {
            state.currentTimestamp = time.valueOf();
            manualController.currentTimestamp = time.valueOf();
          };

          emit('manualAnimationTimeStampChange', manualController);
        }

        const toManualStop = () => {
          manualController.stop();
        }

        const default2live = () => { 
          toLive();
        }
        
        const default2manual = () => {
          toManualPlay();
        }

        const default2auto = () => {
          toAutoPlay();
        }

        const live2default = () => {
          toDefault();
        }
        const live2live = noop;
        const live2manual = () => {
          toDefault();
          toManualPlay();
        }
        const live2auto = () => {
          toDefault();
          toAutoPlay();
        }

        const manual2default = () => {
          toDefault();
          toManualStop();
          setStopStatus();
        }
        const manual2live = () => {
          toManualStop();
          toLive();
          setStopStatus();
        }

        const manual2manual = noop;
        const manual2auto = noop;

        const auto2default = () => {
          toDefault();
          toAutoStop();
          setStopStatus();
        }
        const auto2live = () => {
          toAutoStop();
          toLive();
          setStopStatus();
        }
        const auto2manual = noop;
        const auto2auto = noop;

        /**
         * 状态机列表
         */
        const stateMechine = [
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


        const transformEvent = (eventType, mode) => {
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

        const liveModeClick = () => {
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
        const playAnimationClick = (isPlay) => {
          if (props.playMode === 'auto') {
            autoPlayClick(isPlay);
          } else if (props.playMode === 'manual'){
            manualPlayClick(isPlay);
          }
        }

        const autoPlayClick = (isPlay) => {
          if (isPlay) {
            transformEvent('play', Mode.Auto);
          } else {
            transformEvent('play', Mode.Default);
          }
        }

        const manualPlayClick = (isPlay) => {
          if (isPlay) {
            transformEvent('play', Mode.Manual);
          } else {
            transformEvent('play', Mode.Default);
          }
        }

        const clickTimeBar = () => {
          transformEvent('clickTimeBar', Mode.Default);
        }


        const preTimeTickClick = (rate) => {
          if (TimeBarCanvasRef.value) {
            TimeBarCanvasRef.value.prevTimeTick(rate)
          }
        }

        const nextTimeTickClick = (rate) => {
          if (TimeBarCanvasRef.value) {
            TimeBarCanvasRef.value.nextTimeTick(rate)
          }
        }


      const currentTimeChange = (time) => {
        if (state.currentTimestamp.valueOf() !== time.valueOf()) {
          state.currentTimestamp = time
          emit('currentTimeChange', time)
        }
      }

      /**
       * 当前时间修改
       * @param time 
       */
      const nowTimeStampChange = (time) => {
          state.nowTimeStamp = time;
          if (state.currentMode === Mode.Live) {
            state.currentTimestamp = state.nowTimeStamp;
          }
      }

      onMounted(() => {
        console.log('TimeLineNot state', state)
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
        nowTimeStampChange
      }
    }
}
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

  function transformEvent(arg0: string, Manual: Mode) {
    throw new Error('Function not implemented.')
  }

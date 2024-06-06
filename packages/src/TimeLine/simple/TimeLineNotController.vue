<template>
    <div class="time-line" :theme="props.theme">
        <TimeNotController
                ref="TimeNotControllerRef"
                :isPlay="isPlay"
                @preTimeTickClick="preTimeTickClick"
                @nextTimeTickClick="nextTimeTickClick"
                @playAnimationClick="playAnimationClick"
        ></TimeNotController>

        <slot name="tail"></slot>

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
    name: 'TimeLineNotController',
    emit: [
      'autoAnimationTimeStampChange',
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
          default: new Date()
        },
        onePixelTimeUnit: {
          type: [Number, String],
          default: '1m'
        },
        playIntervalSecond: {
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


        const state = reactive({
          isLive: false,
          isPlay: false,
          isAutoPlay: false,
          currentTimestamp: props.value.valueOf(),
          nowTimeStamp: 0
        })

        // =======================

        const state2 = reactive({
          currentMode: Mode.Default,
          transformMode: Mode.Default
        });

        const noop = () => {};

        const toDefault = () => {
          state.isLive = false;
        }

        const toLive = () => {
          state.currentTimestamp = state.nowTimeStamp;
          state.isLive = true;
        }

        let timer = -1;
        const delayTime = 1000;

        const toAutoPlay = () => {
          toAutoStop();
          timer = _setInterval(() => { 
            state.currentTimestamp = state.currentTimestamp.valueOf() + props.playIntervalSecond;
            emit('autoAnimationTimeStampChange', state.currentTimestamp);
          }, delayTime)
        }

        const toAutoStop = () => { 
          _clearInterval(timer);
          // if(TimeNotControllerRef.value) {
          //   TimeNotControllerRef.value.setStopStatus()
          // }
        }

        const setStopStatus = () => {
          if(TimeNotControllerRef.value) {
            TimeNotControllerRef.value.setStopStatus()
          }
        }

        const defulat2live = () => { 
          toLive();
        }
        const default2manual = () => { 
        }
        const default2auto = () => {
          toAutoPlay();
        }

        const live2defulat = () => {
          toDefault();
        }
        const live2live = noop;
        const live2manual = () => {}
        const live2auto = () => {
          toDefault();
          toAutoPlay();
        }

        const manual2defulat = () => {
          toDefault();
        }
        const manual2live = () => {}
        const manual2manual = () => {}
        const manual2auto = () => {}

        const auto2defulat = () => {
          toDefault();
          toAutoStop();
          setStopStatus();
        }
        const auto2live = () => {
          toAutoStop();
          toLive();
          setStopStatus();
        }
        const auto2manual = () => {}
        const auto2auto = noop;

        /**
         * 状态机列表
         */
        const stateMechine = [
          [noop,           defulat2live, default2manual, default2auto],
          [live2defulat,   live2live,    live2manual,    live2auto],
          [manual2defulat, manual2live,  manual2manual,  manual2auto],
          [auto2defulat,   auto2live,    auto2manual,    auto2auto],
        ];

        /**
         * 设置当前模式
         */
        const setCurrentMode = (mode) => {
          state2.currentMode = mode;
        }

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
            case 'prevTime':   transformFunc = stateMechine[state2.currentMode][mode]; break;
            case 'nextTime':   transformFunc = stateMechine[state2.currentMode][mode]; break;
            case 'play':       transformFunc = stateMechine[state2.currentMode][mode]; break;
            case 'changeTime': transformFunc = stateMechine[state2.currentMode][mode]; break;
            case 'liveMode':   transformFunc = stateMechine[state2.currentMode][mode]; break;
            case 'clickTimeBar':   transformFunc = stateMechine[state2.currentMode][mode]; break;
          }

          transformFunc();
          state2.currentMode = mode;
        }



        const setCurrentTimestamp = (timestamp) => {
          state.currentTimestamp = timestamp
        }


        const liveModeClick = () => {
            if(state2.currentMode === Mode.Live) {
              transformEvent('liveMode', Mode.Default);
            } else if(state2.currentMode === Mode.Default){
              transformEvent('liveMode', Mode.Live);
            } else if(state2.currentMode === Mode.Auto){
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


        const preTimeTickClick = () => {
          if (TimeBarCanvasRef.value) {
            TimeBarCanvasRef.value.prevTimeTick()
          }
        }

        const nextTimeTickClick = () => {
          if (TimeBarCanvasRef.value) {
            TimeBarCanvasRef.value.nextTimeTick()
          }
        }




      const currentTimeChange = (time) => {
          state.currentTimestamp = time
          emit('currentTimeChange', time)
      }

      /**
       * 当前时间修改
       * @param time 
       */
      const nowTimeStampChange = (time) => {
          state.nowTimeStamp = time;
          if (state2.currentMode === Mode.Live) {
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
        toAutoPlay,
        setCurrentTimestamp,
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

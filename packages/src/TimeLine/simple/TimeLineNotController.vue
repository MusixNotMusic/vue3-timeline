<template>
    <div class="time-line" :theme="props.theme">
        <!-- <div class="t-data-search" @click="datePickerRef.focus()">
            <el-date-picker
                    v-model="datePickerTime"
                    prefix-icon="cdywIF icon-timeline-rili2"
                    ref="datePickerRef"
                    type="datetime"
                    :editable="true"
                    :disabled="isLive"
                    format="YYYY-MM-DD HH:mm"
                    placeholder="选择日期"
                    :disabledDate="disabledDate"
                    @change="datePickerChange"/>
        </div> -->

        <TimeNotController
                :animationTime="startAnimationTimeStamp"
                :offsetTime="offsetTime"
                :multipleValue="multipleValue"
                ref="TimeNotControllerRef"
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
            :mode="mode"
            :currentTimeStamp="currentTimestamp"
            @modeChange="modeChange"
            @clickTimeBar="clickTimeBar"
            @currentTimeChange="currentTimeChange">
        </TimeBarCanvasSimple>
    </div>
</template>
<script lang="ts">
import { onMounted, reactive, toRefs, ref} from 'vue'
import moment from 'moment'

import TimeNotController from './TimeNotController.vue'
import TimeBarCanvasSimple from './TimeBarCanvasSimple.vue'
import TimeTickLabel from '../TimeTickLable.vue'
import TimePointer from '../TimePointer.vue'
import { _setInterval, _clearInterval } from '../utils/interval'
import '../iconfont/iconfont.css'

enum MODE {
  Default = 'default',
  Live = 'live',
  Animation = 'animation'
}

export default {
    name: 'TimeLineNotController',
    emit: [
      'animationTimeChange',
      'currentPointerTimeChange',
      'playAnimationClick',
      'stopManualPlay',
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
        animationLoadingPercent: {
          type: Number,
          default: 0
        },
        onePixelTimeUnit: {
          type: [Number, String],
          default: '1m'
        },
        playIntervalSecond: {
          type: [Number, String],
          default: 3 * 60 * 1000
        },
    },
    setup (props: any, { emit }) {
        const TimeBarCanvasRef = ref(null)
        const TimeAnimationBarRef = ref(null)
        const TimeNotControllerRef = ref(null)

        const datePickerRef = ref(null);

        const state = reactive({
          startAnimationTimeStamp: Date.now() - 60 * 60 * 1000,
          offsetTime: 1,
          multipleValue: 3,

          isLive: false,
          datePickerTime: new Date(props.value.valueOf()),
          mode: MODE.Default,
          MODE: MODE,
          isAutoPlay: false,
          currentTimestamp: new Date(props.value.valueOf())
        })

        const datePickerChange = () => {
        
          const timeValue1 = state.datePickerTime.valueOf();
          const timeValue2 = state.currentTimestamp.valueOf();
          if (timeValue1 !== timeValue2) {
            state.currentTimestamp = state.datePickerTime;
            TimeBarCanvasRef.value.setCurrentTime(state.currentTimestamp.valueOf());
          }
        };

        const setCurrentTimestamp = (timestamp) => {
          state.datePickerTime = timestamp;
          state.currentTimestamp = timestamp
        }

        const disabledDate = (time) => {
            return time.getTime() > moment().valueOf();
        };

        const liveModeClick = () => {
            state.isLive = !state.isLive

            /**
             * 如果正在播放 停止播放
             */
            if(TimeNotControllerRef.value) {
              if (TimeNotControllerRef.value.isPlay) {
                TimeNotControllerRef.value.clickPlayHandle()
              }
            }

            state.mode = state.isLive ? 'live' : ''
            state.isAutoPlay = false
        }

        const cancelLiveMode = () => {
          state.isLive = false;
        }

        const clickTimeBar = () => {
          toFinishPlay()
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

        let timer = -1;
        const delayTime = 1000;
        const unitTime = props.playIntervalSecond;

        const updateAnimationTime = () => {
          state.datePickerTime = new Date(state.datePickerTime.valueOf() + unitTime);
          state.currentTimestamp = state.datePickerTime;
          TimeBarCanvasRef.value.updateCurrentTimeByTime(state.currentTimestamp.valueOf());
          emit('animationTimeChange', { time: state.datePickerTime })
        }

        const playAnimationTick = (multi) => {
          timer = _setInterval(() => { updateAnimationTime(); }, delayTime / multi)
        }

        const stopAnimationTick = () => { _clearInterval(timer) }

        const playAnimationClick = ({ isPlay }) => {
          console.log('playAnimationClick')
          if (isPlay) {
            state.mode = MODE.Animation
          } else {
            state.mode = MODE.Default
          }
          emit('playAnimationClick', { isPlay, timestamp: state.datePickerTime.valueOf() })
        }

      /**
       * 自动播放
       */
      const toAutoPlay = (isPlay) => {
         state.isAutoPlay = true;
         cancelLiveMode();
         if (isPlay) {
           playAnimationTick(1)
         } else {
           stopAnimationTick()
         }
       }

      /**
       * 手动播放
       */
      const toManualPlay = () => {
        state.isAutoPlay = false;
        cancelLiveMode();
        stopAnimationTick()
      }

      /**
       * 结束播放
       */
      const toFinishPlay = () => {
        if(TimeNotControllerRef.value) {
          if (TimeNotControllerRef.value.isPlay) {
            TimeNotControllerRef.value.clickPlayHandle()
          }
        }

        if(state.isAutoPlay) {
          toAutoPlay(false)
        } else {
          toManualPlay()
          emit('stopManualPlay', { isPlay: false, timestamp: state.datePickerTime.valueOf() })
        }
      }

      /**
       * 自动播放时候 修改时间
       * @param time
       */
      const setManualPlayTime = (time) => {
        state.datePickerTime = new Date(time);
        state.currentTimestamp = state.datePickerTime;
        TimeBarCanvasRef.value.updateCurrentTimeByTime(state.currentTimestamp.valueOf());
        emit('animationTimeChange', { time: state.datePickerTime })
      }


        const modeChange = ({ mode }) => {
          state.mode = mode
          if (state.isLive) {
            if (state.mode === 'default') {
              state.isLive = false
            }
          }
        }

        const currentTimeChange = ({ time }) => {
          state.datePickerTime = new Date(time)
          if (state.mode !== MODE.Animation) {
            emit('currentPointerTimeChange', {time})
          }
        }

        onMounted(() => {
            console.log('datePickerRef ==>', datePickerRef)
        });

        const refData = toRefs(state);

        return {
          ...refData,
          props,
          TimeBarCanvasRef,
          TimeAnimationBarRef,
          TimeNotControllerRef,
          datePickerRef,
          datePickerChange,
          disabledDate,
          liveModeClick,
          preTimeTickClick,
          nextTimeTickClick,
          playAnimationClick,
          modeChange,
          currentTimeChange,
          clickTimeBar,
          toAutoPlay,
          toManualPlay,
          toFinishPlay,
          setManualPlayTime,
          setCurrentTimestamp
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

<template>
    <div class="time-line" :theme="props.theme">
        <div v-if="mode !== MODE.Animation" class="t-data-search">
            <el-date-picker
                    v-model="datePickerTime"
                    prefix-icon="cdywIF icon-timeline-rili2"
                    type="datetime"
                    :editable="false"
                    :disabled="isLive"
                    format="YYYY-MM-DD HH:mm"
                    placeholder="选择日期"
                    :disabledDate="disabledDate"
                    @change="datePickerChange"/>
        </div>

        <TimeController
                :animationTime="startAnimationTimeStamp"
                :offsetTime="offsetTime"
                :multipleValue="multipleValue"
                @preTimeTickClick="preTimeTickClick"
                @nextTimeTickClick="nextTimeTickClick"
                @controllerModeChange="controllerModeChange"
                @animationRangeTimeChange="animationRangeTimeChange"
                @multipleValueChange="multipleValueChange"
                @playAnimationClick="playAnimationClick"
        ></TimeController>

        <div v-if="mode !== MODE.Animation"
            class="live-btn"
            :class="{ 'btn-down': isLive, 'btn-up': !isLive }"
            @click="liveModeClick"> 实况 </div>

        <TimeBarCanvas ref="TimeBarCanvasRef" :onePixelTimeUnit="props.onePixelTimeUnit" :mode="mode" :currentTimeStamp="datePickerTime" @modeChange="modeChange" @currentTimeChange="currentTimeChange">
          <template v-if="mode === MODE.Animation" #animation="{animationProps}">
            <TimeAnimationBar
                ref="TimeAnimationBarRef"
                :startTimeStamp="animationProps.startTimeStamp"
                :startAnimationTimeStamp="startAnimationTimeStamp"
                :timeBarWidth="animationProps.timeBarWidth"
                :offsetTime="offsetTime"
                :unitOfMs="animationProps.unitOfMs"
                :loading-percent="props.animationLoadingPercent"
                @change="animationTimeChange"
            >
            </TimeAnimationBar>
          </template>
        </TimeBarCanvas>
    </div>
</template>
<script lang="ts">
import {onBeforeMount, reactive, toRefs, ref} from 'vue'
import moment from 'moment'

import TimeController from './TimeController.vue'
import TimeBarCanvas from './TimeBarCanvas.vue'
import TimeTickLabel from './TimeTickLable.vue'
import TimePointer from './TimePointer.vue'
import TimeAnimationBar from './TimeAnimationBar.vue'
import './iconfont/iconfont.css'

enum MODE {
  Default = 'default',
  Live = 'live',
  Animation = 'animation'
}

export default {
    name: 'TimeLine',
    emit: [
      'animationTimeChange',
      'currentPointerTimeChange',
      'animationRangeTimeChange',
      'playAnimationClick'
    ],
    components: {
      TimeController,
      TimeBarCanvas,
      TimeTickLabel,
      TimePointer,
      TimeAnimationBar
    },
    props: {
        theme: {
          type: String,
          default: 'default'
        },
        currentTime: {
          type: [Date, Number],
          default: new Date()
        },
        animationLoadingPercent: {
          type: Number,
          default: 0
        },
        onePixelTimeUnit: {
          type: [Number, String],
          default: '30s'
      },
    },
    setup (props: any, { emit }) {
        const TimeBarCanvasRef = ref(null)
        const TimeAnimationBarRef = ref(null)

        const state = reactive({
          startAnimationTimeStamp: Date.now() - 60 * 60 * 1000,
          offsetTime: 1,
          multipleValue: 3,

          isLive: false,
          datePickerTime: props.currentTime.valueOf(),
          mode: MODE.Default,
          MODE: MODE
        })

        const datePickerChange = () => {
          state.currentTimestamp = state.datePickerTime.valueOf()
        };

        const disabledDate = (time) => {
            return time.getTime() > moment().valueOf();
        };

        const liveModeClick = () => {
            state.isLive = !state.isLive
            state.mode = state.isLive ? 'live' : ''
        }

        const controllerModeChange = ({ isPlayMode }) => {
          state.mode = isPlayMode ? MODE.Animation : MODE.Default
          if (isPlayMode) {
            emit('animationRangeTimeChange', { startTime: state.startAnimationTimeStamp, offsetTime: state.offsetTime * 60 * 60 * 1000 })
          }
        }

        const preTimeTickClick = () => {
          if (state.mode === MODE.Animation) {
            if (TimeAnimationBarRef.value) {
              TimeAnimationBarRef.value.prevTimeTick()
            }
          } else {
            if (TimeBarCanvasRef.value) {
              TimeBarCanvasRef.value.prevTimeTick()
            }
          }
        }

        const nextTimeTickClick = () => {
          if (state.mode === MODE.Animation) {
            if (TimeAnimationBarRef.value) {
              TimeAnimationBarRef.value.nextTimeTick()
            }
          } else {
            if (TimeBarCanvasRef.value) {
              TimeBarCanvasRef.value.nextTimeTick()
            }
          }
        }

        const animationRangeTimeChange = ({ startTime, offsetTime }) => {
          state.startAnimationTimeStamp = startTime.valueOf()
          state.offsetTime = offsetTime
          emit('animationRangeTimeChange', { startTime, offsetTime: offsetTime* 60 * 60 * 1000 })
        }

        const playAnimationClick = (isPlay) => {
          console.log('playAnimationClick')
          if (typeof Number(state.multipleValue) === 'number') {
            if (isPlay) {
              TimeAnimationBarRef.value.playAnimationTick(state.multipleValue)
            } else {
              TimeAnimationBarRef.value.stopAnimationTick()
            }
          }

          emit('playAnimationClick', { isPlay, multiple: state.multipleValue })
        }

        const multipleValueChange = ({ isPlay, value}) => {
          state.multipleValue = value
          if (isPlay) {
            TimeAnimationBarRef.value.stopAnimationTick()
            if (typeof Number(state.multipleValue) === 'number') {
              TimeAnimationBarRef.value.playAnimationTick(state.multipleValue)
            }
          }
        }

        const setPointerByTimeStamp = (time) => {
          if (TimeAnimationBarRef.value) {
            TimeAnimationBarRef.value.setPointerByTimeStamp(time)
          }
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
          emit('currentPointerTimeChange', { time })
        }

        const animationTimeChange = ({animationTimeStamp}) => {
          emit('animationTimeChange', { time: animationTimeStamp })
        }

        onBeforeMount(() => {
        });

        const refData = toRefs(state);

        return {
          ...refData,
          props,
          TimeBarCanvasRef,
          TimeAnimationBarRef,
          datePickerChange,
          disabledDate,
          liveModeClick,
          controllerModeChange,
          preTimeTickClick,
          nextTimeTickClick,
          animationRangeTimeChange,
          multipleValueChange,
          playAnimationClick,
          modeChange,
          currentTimeChange,
          animationTimeChange,
          setPointerByTimeStamp
        }
    }
}
</script>
<style lang="scss" scoped>
@import 'theme/default';
@import 'theme/blue';

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

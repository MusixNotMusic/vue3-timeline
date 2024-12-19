<template>
  <div class="time-pointer-box" :style="timePointerBoxStyle" ref="timePointerBoxRef">
    <div class="time-pointer-wrap" :class="{transitionLeft: state.isTransition}" :style="{left: state.offset + 'px'}" ref="timePointerWrapRef">
      <div class="current-time" ref="currentTimeRef">{{state.timeFormatText}}</div>
      <div class="time-pointer" ref="timePointerRef"></div>
    </div>
  </div>
</template>
<script>
import { ref, onMounted, reactive, watch, computed } from 'vue';
import moment from 'moment';
import { carryBitTable, parseTimeStringToObject } from './utils/parseTime';

export default {
  name: 'TimeTickLabel',
  emits: ['mousemove', 'mouseup', 'change'],
  props: {
    timeBarWidth: {
      type: [Number, String],
      default: 0
    },
    startTimeStamp: {
      type: [Number, Date],
      default: 0
    },
    freeTimeStamp: {
      type: [Number, Date],
      default: 0
    },
    unitTime: {
      type: [Number, String],
      default: 0
    },
    onePixelTimeUnit: {
        type: [Number, String],
        default: '30s'
    }
  },
  setup (props, { emit }) {
    const timePointerBoxRef = ref(null)
    const timePointerWrapRef = ref(null)
    const currentTimeRef = ref(null)
    const timePointerRef = ref(null)

    const unitOfObject = parseTimeStringToObject(props.onePixelTimeUnit);

    const state = reactive({
      timeFormatText: '',
      offset: 0,
      isTransition: false
    })

    const updateOffset = (startTimeStamp, freeTimeStamp) => {
      state.offset = (freeTimeStamp.valueOf() - startTimeStamp.valueOf()) / props.unitTime;
      state.timeFormatText = moment(freeTimeStamp).format(carryBitTable[unitOfObject.unit].formatTime)
    }

    const updateFreeTimeStamp = (offset, done) => {
      const freeTimeStamp = Math.ceil(props.startTimeStamp + offset * props.unitTime);
      state.timeFormatText = moment(freeTimeStamp).format(carryBitTable[unitOfObject.unit].formatTime)
      done && emit('change', freeTimeStamp)
    }

    watch(() => props.startTimeStamp, (val, old) => {
      if (val !== old) {
        updateOffset(props.startTimeStamp, props.freeTimeStamp);
      }
    })

    watch(() => props.freeTimeStamp, (val, old) => {
      if (val !== old) {
        updateOffset(props.startTimeStamp, props.freeTimeStamp);
      }
    })

    const timePointerBoxStyle = computed(() => {
      return {
        visibility: (state.offset >= 0 && state.offset <= props.timeBarWidth) ? 'visible' : 'hidden',
        overflow: (state.offset >= 0 && state.offset <= props.timeBarWidth) ? 'unset' : 'hidden',
        // display: (state.offset >= 0 && state.offset <= props.timeBarWidth) ? 'flex' : 'none',
      }
    })

    const addEventListener = () => {
      let x;
      let isClick = false;

      let rect = timePointerBoxRef.value.getBoundingClientRect()

      const onMouseMove = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (isClick) {
          let offset = e.clientX - x - rect.left
          if (offset >= 0 && offset < props.timeBarWidth) {
            state.offset = offset
            updateFreeTimeStamp(offset)
          }
        }
      }

      if (timePointerRef.value) {
        timePointerRef.value.addEventListener('mousedown', function (e) {
          x = e.offsetX
          isClick = true
          document.addEventListener('mousemove', onMouseMove)
          // state.isTransition = false;
        })

        document.addEventListener('mouseup', function () {
          document.removeEventListener('mousemove', onMouseMove)
          if (isClick) {
            updateFreeTimeStamp(state.offset, true)
          }
          isClick = false
          // state.isTransition = true;
        })
      }
    }

    onMounted(() => {
      addEventListener()
    })

    return {
      ...props,
      state,
      timePointerBoxRef,
      timePointerWrapRef,
      currentTimeRef,
      timePointerRef,
      timePointerBoxStyle
    }
  }
}
</script>
<style scoped lang="scss">
.time-pointer-box {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0px;
  pointer-events: none;
  .time-pointer-wrap {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transform: translate(-50%);
    .time-pointer {
      width: 12px;
      height: 12px;
      top: 6px;
      left: 0px;
      background-color: var(--theme-bg-active);
      cursor: pointer;
      z-index: 30;
      position: relative;
      pointer-events: all;

      &::before {
        content: "";
        position: absolute;
        display: inline-block;
        border: 6px solid var(--theme-bg-active);
        top: -12px;
        width: 0px;
        height: 0px;
        border-top-color: transparent;
        border-left-color: transparent;
        border-right-color: transparent;
      }

    }

    .current-time {
      height: 18px;
      text-align: center;
      top: 0px;
      left: 0px;
      background-color: var(--theme-bg-active);
      font-size: 12px;
      color: var(--text-color);
      z-index: 300;
      overflow: hidden;
      white-space: nowrap;
      padding: 0px 3px;
      user-select: none;
    }

    .current-time:hover {
      opacity: 0.4;
    }

    .time-pointer-wrap:hover .current-time {
      opacity: 0.4;
    }
  }
}

.transitionLeft {
  transition: left 0.1s 0.01s;
  transition-timing-function: ease, step-start, cubic-bezier(0.1, 0.7, 1, 0.1);
}
</style>

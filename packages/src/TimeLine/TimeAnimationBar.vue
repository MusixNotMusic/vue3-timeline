<template>
  <div class="time-animation-box">
    <div class="animation-highlight-bar" :style="timeAnimationStyle">
      <div class="bg"></div>
      <div class="left"></div>
      <div class="right"></div>
      <div class="pointer" :style="pointerStyle"></div>
    </div>
    <div class="loading-highlight-bar" :style="timeAnimationStyle">
      <div class="loading" :style="loadingAnimationStyle"></div>
    </div>
  </div>
</template>
<script lang="ts">
import { ref, onMounted, onUnmounted, reactive, computed } from 'vue'
import { _setInterval, _clearInterval } from './utils/interval'

export default {
  name: 'TimeAnimationBar',
  emits: ['change'],
  props: {
    startTimeStamp: {
      type: [Number, String],
      default: 0
    },
    startAnimationTimeStamp: {
      type: [Number, String],
      default: ''
    },
    timeBarWidth: {
      type: [Number, String],
      default: 0
    },
    offsetTime: {
      type: [Number, String],
      default: 0
    },
    unitOfMs: {
      type: Number,
      default: ''
    },
    loadingPercent: {
      type: Number,
      default: 10
    }
  },
  setup (props, { emit }) {
    const timePointerBoxRef = ref(null)
    const timePointerWrapRef = ref(null)
    const currentTimeRef = ref(null)
    const timePointerRef = ref(null)

    const state = reactive({
      pointerOffset: 0
    })

    const timeAnimationStyle = computed(() => {
      const left = (props.startAnimationTimeStamp - props.startTimeStamp) / props.unitOfMs
      const width = props.offsetTime * 3600 * 1000 / props.unitOfMs
      return {
        width: width + 'px',
        left: left + 'px',
      }
    })

    const loadingAnimationStyle = computed(() => {
      return {
        width: props.loadingPercent + '%'
      }
    })

    const pointerStyle = computed(() => {
      return {
        left: state.pointerOffset + 'px'
      }
    })

    const updateAnimationTime = () => {
      const width = props.offsetTime * 3600 * 1000 / props.unitOfMs
      state.pointerOffset = ++state.pointerOffset % width;
      emit('change', { animationTimeStamp: state.pointerOffset *  props.unitOfMs + props.startAnimationTimeStamp } )
    }

    const prevTimeTick = () => {
      const width = props.offsetTime * 3600 * 1000 / props.unitOfMs
      state.pointerOffset = state.pointerOffset - 1
      if (state.pointerOffset < 0) { state.pointerOffset = state.pointerOffset + width }
      emit('change', { animationTimeStamp: state.pointerOffset *  props.unitOfMs + props.startAnimationTimeStamp } )
    }

    /**
     * 主动触发动画指针
     */
    const setPointerByTimeStamp = (time) => {
      const pointerLeft = (time - props.startAnimationTimeStamp) / props.unitOfMs
      const maxLeft = props.offsetTime * 3600 * 1000 / props.unitOfMs
      state.pointerOffset = Math.min(Math.max(pointerLeft, 0), maxLeft)
    }

    const nextTimeTick = () => {
      updateAnimationTime()
    }

    let timer = -1;
    let delayTime = 1000;
    const playAnimationTick = (multi) => {
      timer = _setInterval(() => {
        updateAnimationTime();
      }, delayTime / multi)
    }

    const stopAnimationTick = () => {
      _clearInterval(timer)
    }

    onMounted(() => {
    })

    onUnmounted(() => {
      stopAnimationTick()
    })

    return {
      ...props,
      state,
      timePointerBoxRef,
      timePointerWrapRef,
      currentTimeRef,
      timePointerRef,
      timeAnimationStyle,
      loadingAnimationStyle,
      pointerStyle,
      playAnimationTick,
      stopAnimationTick,
      prevTimeTick,
      nextTimeTick,
      setPointerByTimeStamp
    }
  }
}
</script>
<style scoped lang="less">
.time-animation-box {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0px;
  pointer-events: none;
  overflow-x: hidden;

  .animation-highlight-bar{
    height: calc(100% - 2px);
    display: flex;
    position: absolute;
    top: 0px;
    left: 0px;
    .bg {
      position: absolute;
      top: 0px;
      left: 0px;
      width: 100%;
      height: 100%;
      background-color: var(--animation-bar-color);
    }
    .left{
      position: absolute;
      top: 0px;
      left: -2px;
      height: 100%;
      width: 5px;
      border: 2px solid var(--animation-boundary-color);
      border-right: none;
      box-sizing: border-box;
      z-index: 1;
    }

    .right{
      position: absolute;
      top: 0px;
      right: -2px;
      height: 100%;
      width: 5px;
      border: 2px solid var(--animation-boundary-color);
      border-left: none;
      box-sizing: border-box;
      z-index: 1;
    }

    .pointer {
      width: 1px;
      height: 100%;
      background: var(--pointer-color);
      position: absolute;
      z-index: 3;
      left: 10px;
    }
  }

  .loading-highlight-bar {
    height: calc(100% - 2px);
    display: flex;
    position: absolute;
    top: 0px;
    left: 0px;
    transform-origin: left;

    .loading {
      height: 100%;
      background: var(--animation-loading-color);
    }
  }
}
</style>

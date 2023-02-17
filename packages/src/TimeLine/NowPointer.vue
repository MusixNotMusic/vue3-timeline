<template>
  <div class="now-pointer-box" :style="nowPointerBoxStyle">
    <div class="now-pointer-wrap" :style="{left: state.offset + 'px'}">
      <span>实况</span>
      <div class="tick-pointer"></div>
      <span>预报</span>
    </div>
  </div>
</template>
<script lang="ts">
import { onMounted, onUnmounted, reactive, watch, computed, nextTick } from 'vue'
import { _setInterval, _clearInterval } from './utils/interval'

export default {
  name: 'TimeTickLabel',
  emits: ['change'],
  props: {
    unitTime: {
      type: [Number, String],
      default: 0
    },
    startTimeStamp: {
      type: Number,
      default: ''
    },
    timeBarWidth: {
      type: Number,
      default: 0
    }
  },
  setup (props, { emit }) {
    const state = reactive({
      offset: 0,
      timer: -1,
      startTimeStamp: props.startTimeStamp,
      timeBarWidth: props.timeBarWidth,
      currentTimeStamp: Date.now()
    })

    watch(() => props.startTimeStamp, (val, old) => {
      if (val !== old) {
        state.startTimeStamp = val
        getPointerPosition()
      }
    })

    watch(() => props.timeBarWidth, (val, old) => {
      if (val !== old) {
        state.timeBarWidth = val
        getPointerPosition()
      }
    })

    const getPointerPosition = () => {
      state.currentTimeStamp = Date.now()
      state.offset = (state.currentTimeStamp - state.startTimeStamp) / props.unitTime
      emit('change', { offset: state.offset, needNextPage: state.offset >= props.timeBarWidth - 40 })
    }

    const nowPointerBoxStyle = computed(() => {
      return {
        visibility: (state.offset >= 0 && state.offset <= props.timeBarWidth) ? 'visible' : 'hidden'
      }
    })

    const Ticktock = () => {
      nextTick(() => {
        const delayTime = props.unitTime
        // 设置 实况
        setTimeout(() => {
          state.timer = _setInterval(() => {
            getPointerPosition();
          }, delayTime)
        }, delayTime)
      });
    }

    onMounted(() => {
      getPointerPosition()
      Ticktock()
    })

    onUnmounted(() => {
      _clearInterval(state.timer)
    })

    return {
      ...props,
      state,
      nowPointerBoxStyle
    }
  }
}
</script>
<style scoped lang="less">
.now-pointer-box {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0px;
  pointer-events: none;
  .now-pointer-wrap {
    position: absolute;
    display: flex;
    justify-content: center;
    transform: translate(-50%);
    column-gap: 5px;
    span {
      color: var(--text-color);
      font-size: 12px;
      display: inline-block;
      margin-top: -17px;
      word-break: keep-all;
    }
    .tick-pointer {
      width: 1px;
      transform: translateX(50%);
      height: 8px;
      background: var(--pointer-color);
      position: absolute;
      z-index: 2;
    }
  }
}
</style>

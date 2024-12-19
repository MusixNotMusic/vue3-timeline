<template>
  <div class="now-pointer-box" :style="pointerStyle">
    <div class="now-pointer-wrap" :style="{left: state.offset + 'px'}">
      <span>实况</span>
      <div class="tick-pointer"></div>
      <span>预报</span>
    </div>
  </div>
</template>
<script>
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
    value: {
      type: Number,
      default: 0
    },
    timeBarWidth: {
      type: Number,
      default: 0
    }
  },
  setup (props, { emit }) {
    let timer = -1;
    const state = reactive({
      offset: 0,
      currentTimeStamp: -1
    })

    watch(() => props.value, (val, old) => {
      if (val !== old) {
        setPointer()
      }
    })

    watch(() => props.timeBarWidth, (val, old) => {
      if (val !== old) {
        setPointer()
      }
    })

    /**
     * 设置指针
     */
    const setPointer = () => {
      state.currentTimeStamp = Date.now()
      state.offset = (state.currentTimeStamp - props.value) / props.unitTime
      emit('change', { offset: state.offset, needNextPage: state.offset >= props.timeBarWidth - 40, nowTimeStamp: state.currentTimeStamp })
    }

    const pointerStyle = computed(() => {
      return {
        visibility: (state.offset >= 0 && state.offset <= props.timeBarWidth) ? 'visible' : 'hidden',
        overflow: (state.offset >= 0 && state.offset <= props.timeBarWidth) ? 'unset' : 'hidden',
      }
    })

    const runClock = () => {
      nextTick(() => {
        const delayTime = 10 * 1000 || props.unitTime
        // 设置 实况
        setTimeout(() => {
          timer = _setInterval(() => {
              setPointer();
          }, delayTime)
        }, delayTime)
      });
    }

    onMounted(() => {
      setPointer()
      runClock()
    })

    onUnmounted(() => {
      _clearInterval(timer)
    })

    return {
      ...props,
      state,
      pointerStyle
    }
  }
}
</script>
<style scoped lang="scss">
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

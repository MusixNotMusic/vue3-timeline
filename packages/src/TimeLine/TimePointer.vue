<template>
  <div class="time-pointer-box" :style="timePointerBoxStyle" ref="timePointerBoxRef">
    <div class="time-pointer-wrap" :style="{left: state.offset + 'px'}" ref="timePointerWrapRef">
      <div class="current-time" ref="currentTimeRef">{{timeFormatText}}</div>
      <div class="time-pointer" ref="timePointerRef"></div>
    </div>
  </div>
</template>
<script lang="ts">
import { ref, onMounted, reactive, watch, computed } from 'vue'

export default {
  name: 'TimeTickLabel',
  emits: ['mousemove', 'mouseup'],
  props: {
    offset: {
      type: [Number, String],
      default: 0
    },
    timeFormatText: {
      type: String,
      default: ''
    },
    timeBarWidth: {
      type: [Number, String],
      default: 0
    }
  },
  setup (props: any, { emit }) {
    const timePointerBoxRef = ref(null)
    const timePointerWrapRef = ref(null)
    const currentTimeRef = ref(null)
    const timePointerRef = ref(null)

    const state = reactive({
      offset: props.offset,
      isClick: false
    })

    watch(() => props.offset, (val, old) => {
      if (val !== old) {
        state.offset = val
      }
    })

    const timePointerBoxStyle = computed(() => {
      return {
        visibility: (state.offset >= 0 && state.offset <= props.timeBarWidth) ? 'visible' : 'hidden'
      }
    })

    const addEventListener = () => {
      let x;
      let isClick = false;

      let rect = timePointerBoxRef.value.getBoundingClientRect()
      let rect2 = timePointerWrapRef.value.getBoundingClientRect()

      const onMouseMove = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (isClick) {
          state.offset = e.clientX - x - rect.left + rect2.width / 2;
          emit('mousemove', state.offset)
        }
      }
      const onMouseMove2 = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (isClick) {
          let offset = e.clientX - x - rect.left
          if (offset >= 0 && offset < props.timeBarWidth) {
            state.offset = offset
            emit('mousemove', state.offset)
          }
        }
      }

      // if (currentTimeRef.value) {
      //   currentTimeRef.value.addEventListener('mousedown', function (e) {
      //     x = e.offsetX
      //     isClick = true
      //     document.addEventListener('mousemove', onMouseMove)
      //   })
      //
      //   document.addEventListener('mouseup', function () {
      //     document.removeEventListener('mousemove', onMouseMove)
      //     emit('mouseup')
      //     isClick = false
      //   })
      // }

      if (timePointerRef.value) {
        timePointerRef.value.addEventListener('mousedown', function (e) {
          x = e.offsetX
          isClick = true
          document.addEventListener('mousemove', onMouseMove2)
        })

        document.addEventListener('mouseup', function () {
          document.removeEventListener('mousemove', onMouseMove2)
          emit('mouseup')
          isClick = false
        })
      }
    }

    onMounted(() => {
      addEventListener()
    })

    return {
      ...props,
      timePointerBoxRef,
      timePointerWrapRef,
      currentTimeRef,
      timePointerRef,
      state,
      timePointerBoxStyle
    }
  }
}
</script>
<style scoped lang="less">
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
</style>

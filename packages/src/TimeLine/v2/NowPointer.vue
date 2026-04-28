<template>
  <div class="now-pointer-box" :style="pointerStyle">
    <div class="now-pointer-wrap" :style="{ left: state.offset + 'px' }">
      <span>实况</span>
      <div class="tick-pointer"></div>
      <span>预报</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted, reactive, watch, computed, nextTick, type PropType, type CSSProperties } from 'vue';
import { _setInterval, _clearInterval } from '../utils/interval';
import type { NowPointerChangePayload } from '../../types';

export default defineComponent({
  name: 'NowPointer',
  emits: {
    change: (_payload: NowPointerChangePayload) => true,
    triggleNow: () => true,
  },
  props: {
    unitTime: {
      type: [Number, String] as PropType<number | string>,
      default: 0,
    },
    value: {
      type: Number as PropType<number>,
      default: 0,
    },
    timeBarWidth: {
      type: Number as PropType<number>,
      default: 0,
    },
  },
  setup(props, { emit }) {
    let timer: ReturnType<typeof _setInterval> | number = -1;
    const state = reactive({
      offset: 0,
      currentTimeStamp: -1,
    });

    watch(
      () => props.value,
      (val, old) => {
        if (val !== old) {
          setPointer();
        }
      }
    );

    watch(
      () => props.timeBarWidth,
      (val, old) => {
        if (val !== old) {
          setPointer();
        }
      }
    );

    const setPointer = (): void => {
      state.currentTimeStamp = Date.now();
      state.offset = (state.currentTimeStamp - props.value) / Number(props.unitTime);
      emit('change', {
        offset: state.offset,
        needNextPage: state.offset >= props.timeBarWidth - 40,
        nowTimeStamp: state.currentTimeStamp,
      });
    };

    const pointerStyle = computed<CSSProperties>(() => {
      return {
        visibility: state.offset >= 0 && state.offset <= props.timeBarWidth ? 'visible' : 'hidden',
        overflow: state.offset >= 0 && state.offset <= props.timeBarWidth ? 'unset' : 'hidden',
      };
    });

    const runClock = (): void => {
      nextTick(() => {
        const delayTime = 10 * 1000;
        setTimeout(() => {
          timer = _setInterval(() => {
            setPointer();
            emit('triggleNow');
          }, delayTime);
        }, delayTime);
      });
    };

    onMounted(() => {
      setPointer();
      runClock();
    });

    onUnmounted(() => {
      _clearInterval(timer);
    });

    return {
      ...props,
      state,
      pointerStyle,
    };
  },
});
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

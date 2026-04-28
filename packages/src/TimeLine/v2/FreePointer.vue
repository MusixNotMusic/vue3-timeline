<template>
  <div class="time-pointer-box" :style="timePointerBoxStyle" ref="timePointerBoxRef">
    <div
      class="time-pointer-wrap"
      :class="{ transitionLeft: state.isTransition }"
      :style="{ left: state.offset + 'px' }"
      ref="timePointerWrapRef"
    >
      <div class="current-time" ref="currentTimeRef">{{ state.timeFormatText }}</div>
      <div class="time-pointer" ref="timePointerRef"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, reactive, watch, computed, type PropType, type CSSProperties } from 'vue';
import dayjs from 'dayjs';
import { carryBitTable, parseTimeStringToObject, type TimeUnitObject } from '../utils/parseTime';

export default defineComponent({
  name: 'FreePointer',
  emits: ['mousemove', 'mouseup', 'change'],
  props: {
    timeBarWidth: {
      type: [Number, String] as PropType<number | string>,
      default: 0,
    },
    startTimeStamp: {
      type: [Number, Date] as PropType<number | Date>,
      default: 0,
    },
    freeTimeStamp: {
      type: [Number, Date] as PropType<number | Date>,
      default: 0,
    },
    unitTime: {
      type: [Number, String] as PropType<number | string>,
      default: 0,
    },
    onePixelTimeUnit: {
      type: [Number, String] as PropType<number | string>,
      default: '30s',
    },
  },
  setup(props, { emit }) {
    const timePointerBoxRef = ref<HTMLDivElement | null>(null);
    const timePointerWrapRef = ref<HTMLDivElement | null>(null);
    const currentTimeRef = ref<HTMLDivElement | null>(null);
    const timePointerRef = ref<HTMLDivElement | null>(null);

    const unitOfObject: TimeUnitObject | null = parseTimeStringToObject(props.onePixelTimeUnit);

    const state = reactive({
      timeFormatText: '',
      offset: 0,
      isTransition: false,
    });

    const updateOffset = (startTimeStamp: number | Date, freeTimeStamp: number | Date): void => {
      state.offset = (dayjs(freeTimeStamp).valueOf() - dayjs(startTimeStamp).valueOf()) / Number(props.unitTime);
      if (unitOfObject) {
        state.timeFormatText = dayjs(freeTimeStamp).format(carryBitTable[unitOfObject.unit].formatTime);
      }
    };

    const updateFreeTimeStamp = (offset: number, done?: boolean): void => {
      const freeTimeStamp = Math.ceil(Number(props.startTimeStamp) + offset * Number(props.unitTime));
      if (unitOfObject) {
        state.timeFormatText = dayjs(freeTimeStamp).format(carryBitTable[unitOfObject.unit].formatTime);
      }
      if (done) {
        emit('change', freeTimeStamp);
      }
    };

    watch(
      () => props.startTimeStamp,
      (val, old) => {
        if (val !== old) {
          updateOffset(props.startTimeStamp, props.freeTimeStamp);
        }
      }
    );

    watch(
      () => props.freeTimeStamp,
      (val, old) => {
        if (val !== old) {
          updateOffset(props.startTimeStamp, props.freeTimeStamp);
        }
      }
    );

    const timePointerBoxStyle = computed<CSSProperties>(() => {
      const offset = state.offset;
      const width = Number(props.timeBarWidth);
      return {
        visibility: offset >= 0 && offset <= width ? 'visible' : 'hidden',
        overflow: offset >= 0 && offset <= width ? 'unset' : 'hidden',
      };
    });

    const enableMove = (offset: number): boolean => {
      const freeTimeStamp = Math.ceil(Number(props.startTimeStamp) + offset * Number(props.unitTime));
      const now = dayjs();
      const minute = now.minute();
      const halfMinuteTimestamp = now.set('minute', Math.ceil(minute / 30) * 30).valueOf();
      return freeTimeStamp <= halfMinuteTimestamp;
    };

    const addEventListener = (): void => {
      let x = 0;
      let isClick = false;

      const rect = timePointerBoxRef.value?.getBoundingClientRect();
      if (!rect) return;

      const onMouseMove = (e: MouseEvent): void => {
        e.preventDefault();
        e.stopPropagation();
        if (isClick) {
          const offset = e.clientX - x - rect.left;
          if (offset >= 0 && offset < Number(props.timeBarWidth) && enableMove(offset)) {
            state.offset = offset;
            updateFreeTimeStamp(offset);
          }
        }
      };

      if (timePointerRef.value) {
        timePointerRef.value.addEventListener('mousedown', function (e: MouseEvent) {
          x = e.offsetX;
          isClick = true;
          document.addEventListener('mousemove', onMouseMove);
        });

        document.addEventListener('mouseup', function () {
          document.removeEventListener('mousemove', onMouseMove);
          if (isClick) {
            updateFreeTimeStamp(state.offset, true);
          }
          isClick = false;
        });
      }
    };

    onMounted(() => {
      addEventListener();
    });

    return {
      ...props,
      state,
      timePointerBoxRef,
      timePointerWrapRef,
      currentTimeRef,
      timePointerRef,
      timePointerBoxStyle,
    };
  },
});
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
      top: 5px;
      left: 1px;
      background-color: var(--theme-bg-active);
      cursor: pointer;
      z-index: 30;
      position: relative;
      pointer-events: all;

      &::before {
        content: '';
        position: absolute;
        display: inline-block;
        border: 6px solid var(--theme-bg-active);
        top: -11px;
        width: 0px;
        height: 0px;
        border-top-color: transparent;
        border-left-color: transparent;
        border-right-color: transparent;
      }
    }

    .current-time {
      height: 18px;
      line-height: 18px;
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

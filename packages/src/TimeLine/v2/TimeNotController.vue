<template>
  <div class="time-control">
    <span
      class="cdywIFTimeLine icon-timeline-zuobian icon-color"
      @mousedown="preTimeTick"
      @mouseup="mouseUpClear"
    ></span>

    <span
      class="cdywIFTimeLine icon-timeline-bofang1 icon-color"
      :class="{ 'icon-timeline-bofang1': !isPlay, 'icon-timeline-zanting1': isPlay }"
      @click="clickPlayHandle"
    ></span>

    <span
      class="cdywIFTimeLine icon-timeline-youbian icon-color"
      @mousedown="nextTimeTick"
      @mouseup="mouseUpClear"
    ></span>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';
import type { TickRate } from '../../types';

export default defineComponent({
  name: 'TimeController',
  emits: {
    preTimeTickClick: (_rate: TickRate) => true,
    nextTimeTickClick: (_rate: TickRate) => true,
    playAnimationClick: (_isPlay: boolean) => true,
  },
  setup(_props, { emit }) {
    const state = reactive({
      isPlay: false,
    });

    let timer: ReturnType<typeof setInterval> | null = null;

    const clickPlayHandle = (): void => {
      state.isPlay = !state.isPlay;
      emit('playAnimationClick', state.isPlay);
    };

    const preTimeTick = (): void => {
      emit('preTimeTickClick', { value: -1 });
      timer = setInterval(() => {
        emit('preTimeTickClick', { value: -1 });
      }, 200);
    };

    const nextTimeTick = (): void => {
      emit('nextTimeTickClick', { value: 1 });
      timer = setInterval(() => {
        emit('nextTimeTickClick', { value: 1 });
      }, 200);
    };

    const mouseUpClear = (): void => {
      if (timer) {
        clearInterval(timer);
        timer = null;
      }
    };

    const setPlayStatus = (): void => {
      state.isPlay = true;
    };

    const setStopStatus = (): void => {
      state.isPlay = false;
    };

    const refData = toRefs(state);

    return {
      ...refData,
      clickPlayHandle,
      preTimeTick,
      nextTimeTick,
      mouseUpClear,
      setPlayStatus,
      setStopStatus,
    };
  },
});
</script>

<style lang="scss" scoped>
.time-control {
  height: 30px;
  display: flex;
  align-items: center;
  background-color: var(--theme-bg-deep);
  margin-left: 10px;
  border-radius: 4px;
  padding: 0 5px;
  span {
    font-size: 22px;
    margin: 0 5px;
    cursor: pointer;
  }

  .option-time {
    width: 266px;
    height: 30px;
    color: var(--text-color);
    display: flex;
    align-items: center;
    .rotation-multiple {
      width: 36px;
      cursor: pointer;
      line-height: 30px;
      height: 100%;
      font-size: 12px;
      position: relative;
    }
    .rotation-multiple-timeHour {
      width: 54px;
    }
    .rotation-text {
      width: 100%;
      height: 100%;
      font-size: 12px;
      display: flex;
      align-items: center;
      span {
        height: 28px;
        font-size: 12px;
        margin: 0 0 0 5px;
      }
    }
    .icon-stop {
      color: var(--text-color-alter);
      margin-top: 1px;
    }
    .rotation-option {
      position: absolute;
      bottom: 27px;
      left: -5px;
      color: var(--text-color);
      background: var(--dropdown-bg-color);
      padding: 5px;
      border-radius: 4px;
      width: 100%;
      text-align: center;
      li:hover {
        color: var(--text-color-active);
      }
      li {
        list-style: none;
      }
    }
    .date-time-choose {
      display: flex;
      :deep(.el-date-editor--datetime) {
        width: 80px;
        height: 30px;
        padding: 0;
        line-height: 30px;
      }
      :deep(.el-input__prefix) {
        display: none;
      }
      :deep(.el-input__inner) {
        border: none;
        background-color: transparent;
      }

      :deep(.el-input__inner) {
        line-height: 30px;
        //   border: 1px solid red;
        height: 30px;
        line-height: 24px;
        color: var(--text-color);
        padding: 0;
        font-size: 12px;
      }
    }
  }
}

.icon-color {
  color: var(--icon-color-fff);
}
</style>

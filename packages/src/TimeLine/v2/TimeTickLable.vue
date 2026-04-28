<template>
  <div class="time-tick-list">
    <span
      v-for="(time, index) in list"
      :key="index"
      class="time-tick-item"
      :style="{ left: time.left + 'px', transform: `translate(-50%) scale(${time.scale})` }"
    >{{ time.value }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue';

export interface TimeTickItem {
  value: string;
  left: number;
  scale: number;
}

export default defineComponent({
  name: 'TimeTickLabel',
  props: {
    list: {
      type: Array as PropType<TimeTickItem[]>,
      default: (): TimeTickItem[] => [],
    },
  },
  setup(props) {
    return {
      ...props,
    };
  },
});
</script>

<style scoped lang="scss">
.time-tick-list {
  width: 100%;
  position: relative;
  margin-top: 2px;
  .time-tick-item {
    position: absolute;
    font-size: 12px;
    text-align: center;
    color: var(--text-tick-color);
    overflow: hidden;
    white-space: nowrap;
  }
}
</style>

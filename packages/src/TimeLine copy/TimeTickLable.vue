<template>
  <div class="time-tick-list">
        <span v-for="(time, index) in list"
              class="time-tick-item"
              :key="index"
              :style="{left: time.left + 'px', transform: `translate(-50%) scale(${time.scale})`}">{{time.value}}</span>
  </div>
</template>
<script lang="ts">
export default {
  name: 'TimeTickLabel',
  props: {
    list: {
      type: Array,
      default: () => []
    },
  },
  setup (props: any) {
    return {
      ...props
    }
  }
}
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
    color: white;
    overflow: hidden;
    white-space: nowrap;
  }
}
</style>

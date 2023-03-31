<script setup lang="ts">
import {ref} from 'vue'
import TimeLine from '../packages/src/TimeLine/TimeLine.vue'
// import { Timeline } from 'vue3-timeline-bar'
import 'vue3-timeline-bar/dist/style.css'

const timeLineRef = ref(null)

const animationTimeChange = (data) => {
  console.log('animationTimeChange ==>', data);
}
const animationRangeTimeChange = ({ startTime, offsetTime }) => {
  console.log('animationRangeTimeChange', startTime, offsetTime)
}

const playAnimationClick = ({ isPlay }) => {
  console.log('playAnimationClick =>', isPlay)
}
window.timeLineRef = timeLineRef
</script>

<template>
  <div>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <!-- <TimeLine theme="blue"></TimeLine> -->
  <TimeLine ref="timeLineRef" theme="blue" @animationTimeChange="animationTimeChange" @animationRangeTimeChange="animationRangeTimeChange" @playAnimationClick="playAnimationClick"></TimeLine>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>

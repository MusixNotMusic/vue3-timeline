<script setup lang="ts">
import {ref} from 'vue'
import TimeLine from '../packages/src/TimeLine/TimeLine.vue'
import TimeLineNotController from '../packages/src/TimeLine/simple/TimeLineNotController.vue'
// import { Timeline } from 'vue3-timeline-bar'
import 'vue3-timeline-bar/dist/style.css'

const timeLineRef = ref(null)

const datePickerTime = ref(Date.now);

const animationTimeChange = (data) => {
  console.log('animationTimeChange ==>', data);
}
const animationRangeTimeChange = ({ startTime, offsetTime }) => {
  console.log('animationRangeTimeChange', startTime, offsetTime)
}

const playAnimationClick = ({ isPlay }) => {
  console.log('playAnimationClick =>', isPlay)
}

const currentPointerTimeChange = (time) => {
  console.log('currentPointerTimeChange ==>', time)
}

const datePickerChange = (time) => {
  console.log('datePickerChange ==>', time)
};
const stopManualPlay = () => {}

window.timeLineRef = timeLineRef
</script>

<template>
  <div>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <!-- <TimeLine theme="blue"></TimeLine> -->
  <!-- <TimeLine ref="timeLineRef" theme="blue" @animationTimeChange="animationTimeChange" @animationRangeTimeChange="animationRangeTimeChange" @playAnimationClick="playAnimationClick"></TimeLine> -->
  <div class="time-line-bar">
    <el-date-picker
          v-model="datePickerTime"
          prefix-icon="cdywIF icon-timeline-rili2"
          ref="datePickerRef"
          type="datetime"
          :editable="true"
          format="YYYY-MM-DD HH:mm"
          placeholder="选择日期"
          @change="datePickerChange"/>
 
    <div class="time-line-wrap">
      <TimeLineNotController theme="blue"
                ref="timeLineRef"
                :playIntervalSecond="6 * 60 * 1000"
                v-model="datePickerTime"
                @currentPointerTimeChange="currentPointerTimeChange"
                @animationTimeChange="animationTimeChange"
                @animationRangeTimeChange="animationRangeTimeChange"
                @playAnimationClick="playAnimationClick"
                @stopManualPlay="stopManualPlay">
      </TimeLineNotController>
    </div>
  </div>
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

.time-line-bar {
  display: flex;
  position: relative;
}

.time-line-wrap {
  position: relative;
  width: 100%;
}
</style>

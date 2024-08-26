<script setup>
import {ref} from 'vue'
// import TimeLineMain from '../packages/src/TimeLine/simple/TimeLineMain.vue'
import { TimeLineMain } from '@cdyw/vue3-timeline-bar'

// console.log(Vue3TimelineBar)

import '@cdyw/vue3-timeline-bar/dist/style.css'

const timeLineRef = ref(null)

const datePickerTime = ref(new Date());

const autoAnimationTimeStampChange = (data) => {
  console.log('autoAnimationTimeStampChange ==>', data);
}

let timer = -1;
const manualAnimationTimeStampChange = (controller) => {
  console.log('manualAnimationTimeStampChange ==>', controller);
  let timestamp = controller.currentTimestamp.valueOf();
  timer = setInterval(() => {
    timestamp = timestamp + 60 * 1000;
    console.log('timestamp ==>', timestamp);
    controller.nextTick(timestamp);

    datePickerTime.value = new Date(timestamp);
  }, 1000)
  controller.stop = () => {
    clearInterval(timer);
  }
}


const currentTimeChange = (time) => {
  console.log('currentTimeChange ==>', time);
  datePickerTime.value = new Date(time.valueOf());
}

const datePickerChange = (time) => {
  // console.log('datePickerChange ==>', time)
};

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
      <TimeLineMain theme="blue"
                ref="timeLineRef"
                :stepSecond="3 * 60 * 1000"
                :playMode="'auto'"
                v-model:value="datePickerTime"
                @autoAnimationTimeStampChange="autoAnimationTimeStampChange"
                @manualAnimationTimeStampChange="manualAnimationTimeStampChange"
                @currentTimeChange="currentTimeChange">
      </TimeLineMain>
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

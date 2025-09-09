<script setup>
import { ref, onMounted } from 'vue'
import TimeLineMain from '../packages/src/TimeLine/simple/TimeLineMain.vue'
import TimeLineSimpleMain from '../packages/src/TimeLine/v2/TimeLineSimpleMain.vue'

import '@cdyw/vue3-timeline-bar/dist/style.css'


const text = ref('music is my life');

const timeLineRef = ref(null)
const datePickerTime = ref(new Date());

const autoAnimationTimeStampChange = (data) => {
  console.log('autoAnimationTimeStampChange ==>', data);
  console.log('datePickerTime ==>', datePickerTime.value.valueOf());
}

let timer = -1;
const manualAnimationTimeStampChange = (controller) => {
  console.log('manualAnimationTimeStampChange ==>', controller);
  console.log('datePickerTime ==>', datePickerTime.value.valueOf());
  let timestamp = controller.currentTimestamp.valueOf();
  timer = setInterval(() => {
    timestamp = timestamp + 60 * 1000;
    console.log('timestamp ==>', timestamp);
    controller.nextTick(timestamp);
  }, 1000)
  controller.stop = () => {
    clearInterval(timer);
  }
}


const currentTimeChange = (time) => {
  console.log('currentTimeChange ==>', time);
}

const datePickerChange = (time) => {
  // console.log('datePickerChange ==>', time)
  timeLineRef.value.toDefaultStatus()
};

onMounted(() => {
  if(timeLineRef.value) {
    window.timeLineRef = timeLineRef;
  }
})

</script>

<template>
  <!-- <div class="time-line-bar">
    <el-date-picker
          v-model="datePickerTime"
          prefix-icon="cdywIFTimeLine"
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
                live
                v-model="datePickerTime"
                @autoAnimationTimeStampChange="autoAnimationTimeStampChange"
                @manualAnimationTimeStampChange="manualAnimationTimeStampChange"
                @currentTimeChange="currentTimeChange">
      </TimeLineMain>
    </div>
  </div> -->

  <el-input v-model="text" type="textarea" style="width: 400px;"></el-input>


  <div class="time-line-bar">
    <div class="time-line-wrap">
      <TimeLineSimpleMain theme="blue"
                ref="timeLineRef"
                :stepSecond="3 * 60 * 1000"
                :playMode="'auto'"
                v-model="datePickerTime"
                @autoAnimationTimeStampChange="autoAnimationTimeStampChange"
                @manualAnimationTimeStampChange="manualAnimationTimeStampChange"
                @currentTimeChange="currentTimeChange">
      </TimeLineSimpleMain>
    </div>
  </div>
</template>

<style scoped>
.time-line-bar {
  display: flex;
  position: relative;
}

.time-line-wrap {
  position: relative;
  width: 100%;
  height: 60px;
}

.time-line-bar-2 {
  display: flex;
  position: relative;
}
</style>

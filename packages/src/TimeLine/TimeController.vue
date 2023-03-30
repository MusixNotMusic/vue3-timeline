<template>
    <div class="time-control">
        <span class="cdywIF icon-timeline-zuobian icon-color" @click="preTimeTick"></span>

        <span
            class="cdywIF icon-timeline-bofang1 icon-color"
            v-show="!showPlayMode"
            @click="clickPlayModeHandle(true, 470)"
        ></span>

        <div class="option-time" v-show="showPlayMode">
            <span
                class="cdywIF icon-color"
                :class="{ 'icon-timeline-bofang1': !isPlay, 'icon-timeline-zanting1': isPlay }"
                @click="clickPlayHandle"
            ></span>

            <span
                class="cdywIF icon-timeline-24gf-stop icon-stop"
                @click="clickPlayModeHandle(false, 500)"
            ></span>

            <div class="rotation-multiple">
                <div class="rotation-text" @click="showMultipleBox('multipleDom')">
                    {{ curMultipleItem.name }}
                    <span class="cdywIF icon-timeline-shang"></span>
                </div>

                <div class="rotation-option rotation-option-1" ref="RotationOption1Ref">
                    <li v-for="(item, index) in multipleList" :key="index" @click="setMultipleClick(item)">
                        {{ item.name }}
                    </li>
                </div>
            </div>

            <span class="cdywIF icon-timeline-cunchu"></span>

            <div class="date-time-choose">
                <el-date-picker
                    v-model="state.animationTime"
                    type="datetime"
                    :clearable="false"
                    @change="animationStartTimeChange"
                    :disabledDate="disabledDate"
                    format="MM-DD HH:mm"/>
            </div>

            <div class="rotation-multiple rotation-multiple-timeHour">
                <div class="rotation-text" @click="showMultipleBox('multipleDom2')">
                    {{ offsetTimeItem.name }}
                    <span class="cdywIF icon-timeline-shang"></span>
                </div>

                <div class="rotation-option rotation-option-2" ref="RotationOption2Ref">
                    <li v-for="(item, index) in offsetTimeList" :key="index" @click="setTimeRangeClick(item)">
                        {{ item.name }}
                    </li>
                </div>
            </div>
        </div>

        <span class="cdywIF icon-timeline-youbian icon-color" @click="nextTimeTick"></span>
    </div>
</template>

<script>
import { onMounted, reactive, toRefs, ref, watch } from "vue";
import $ from "jquery";

export default {
    name: "TimeController",
    emits: ["controllerModeChange", "preTimeTickClick", "nextTimeTickClick", "animationRangeTimeChange", "playAnimationClick", "multipleValueChange"],
    props: {
      animationTime: {
          type: [Date, Number],
          default: Date.now()
      },
      offsetTime: {
        type: Number,
        default: 2
      },
      multipleValue: {
        type: Number,
        default: 1
      }
    },
    setup(props, { emit }) {
        const state = reactive({
            showPlayMode: false,

            multipleList: [
                { name: "10X", value: 10 },
                { name: "3X", value: 3 },
                { name: "2X", value: 2 },
                { name: "1X", value: 1 },
            ],

            curMultipleItem: { name: "1X", value: 1 },

            offsetTimeList: [
              { name: "6小时", value: 6 },
              { name: "4小时", value: 4 },
              { name: "2小时", value: 2 },
              { name: "1小时", value: 1 },
            ],

            offsetTimeItem: { name: "2小时", value: 2 },

            multipleDom: null,
            multipleDom2:null,
            animationStartTime: null,
            isPlay: false,
            animationTime: props.animationTime
        });

      watch(() => props.animationTime, (val, old) => {
          if (old !== val) state.animation = val
      })  

      const RotationOption1Ref = ref(null)
      const RotationOption2Ref = ref(null)

      const initState = () => {
        const multiple = state.multipleList.find(item => item.value === props.multipleValue)
        const offsetTime = state.offsetTimeList.find(item => item.value === props.offsetTime)
        if (multiple) state.curMultipleItem = multiple
        if (offsetTime) state.offsetTimeItem = offsetTime
      }

      onMounted(() => {
        state.multipleDom = $(".rotation-option-1");
        state.multipleDom2 = $(".rotation-option-2");
        state.multipleDom.hide();
        state.multipleDom2.hide();

        initState()
      });

      /***
       * 展示倍数选择框
       */
      const showMultipleBox = (str) => {
          state[str].slideToggle();
      };
      /**
       * 选择倍数
       */
      const setMultipleClick = (item) => {
          state.curMultipleItem = item;
          state.multipleDom.slideUp();
          emit('multipleValueChange', { isPlay: state.isPlay, value: state.curMultipleItem.value })
      };

      // 点击播放按钮
      const clickPlayModeHandle = (bool, num) => {
          state.showPlayMode = bool;
          emit('controllerModeChange', { isPlayMode: state.showPlayMode })
      };


      // 上一刻度
      const preTimeTick = () => {
         emit('preTimeTickClick', { value: state.curMultipleItem.value })
      };
      // 下一刻度
      const nextTimeTick = () => {
          emit('nextTimeTickClick', { value: state.curMultipleItem.value })
      };

      // 点击播放事件
      const clickPlayHandle = () => {
          state.isPlay = !state.isPlay;
          emit('playAnimationClick', state.isPlay);
      };

      /**
       * 起始时间 修改
       */
      const animationStartTimeChange = () => {
          console.log("animationStartTimeChange");
          console.log(state.animationTime)
          state.isPlay = false;

          emit('playAnimationClick', state.isPlay);

          emit('animationRangeTimeChange', { startTime: state.animationTime, offsetTime: state.offsetTimeItem.value })
      };

      const setTimeRangeClick = (item) => {
          state.offsetTimeItem = item;
          state.multipleDom2.slideUp();

          emit('animationRangeTimeChange', { startTime: state.animationTime, offsetTime: state.offsetTimeItem.value })
      }


      const disabledDate = (time) => {
          return time.getTime() > Date.now();
      };

      const refData = toRefs(state);

      return {
        ...refData,
        state,
        RotationOption1Ref,
        RotationOption2Ref,
        showMultipleBox,
        setMultipleClick,
        clickPlayModeHandle,
        preTimeTick,
        nextTimeTick,
        animationStartTimeChange,
        disabledDate,
        clickPlayHandle,
        setTimeRangeClick
      };
   },
};
</script>

<style lang="less" scoped>
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

import type { App } from 'vue';
import TimeBarCanvasSimple from './src/TimeLine/simple/TimeBarCanvasSimple.vue'
import TimeLineMain from './src/TimeLine/simple/TimeLineMain.vue'
import TimeLineSimpleMain from './src/TimeLine/v2/TimeLineSimpleMain.vue'

const plugin = {
  install(app: App) {
    app.component(TimeLineMain.name as string, TimeLineMain),
    app.component(TimeLineSimpleMain.name as string, TimeLineSimpleMain)
  }
}

// 组件
export {
  TimeBarCanvasSimple,
  TimeLineMain,
  TimeLineSimpleMain
}

// 公共类型
export type { ManualController, PlayMode } from './src/types'

// Utils 类型与工具
export {
  CanvasTimeBar,
  type TimeBarState,
  type TimeTickItem,
  type ListenerHandle,
} from './src/TimeLine/utils/canvasTimeBar'

export {
  CanvasTimeBar as CanvasTimeBarV2,
} from './src/TimeLine/utils/canvasTimeBarV2'

export {
  carryBitTable,
  UnitOfTimeTable,
  regex,
  parseTimeStringToObject,
  parseTimeStringToMillisecond,
  getValueByUnit,
  getWholeTimeByUnit,
  type CarryBitInfo,
  type TimeUnitObject,
} from './src/TimeLine/utils/parseTime'

export {
  _setInterval,
  _clearInterval,
} from './src/TimeLine/utils/interval'

export default plugin;

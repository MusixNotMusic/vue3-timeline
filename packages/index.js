import TimeLine from './src/TimeLine/TimeLine.vue'
import TimeBarCanvas from './src/TimeLine/TimeBarCanvas.vue'
import TimeLineMain from './src/TimeLine/simple/TimeLineMain.vue'

const plugin = {
  install(app) {
    app.component(TimeLine.name, TimeLine)
    app.component(TimeBarCanvas.name, TimeBarCanvas)
    app.component(TimeLineMain.name, TimeLineMain)
  }
}

export { TimeLine, TimeBarCanvas, TimeLineMain, plugin }
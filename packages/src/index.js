import Timeline from './TimeLine/TimeLine.vue'
import TimeBarCanvas from './TimeLine/TimeBarCanvas.vue'

const plugin = {
  install(app) {
    app.component(Timeline.name, Timeline)
    app.component(TimeBarCanvas.name, TimeBarCanvas)
  }
}

export { Timeline, TimeBarCanvas, plugin }
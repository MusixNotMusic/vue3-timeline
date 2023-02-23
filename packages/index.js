import TimeLine from './src/TimeLine/TimeLine.vue'
import TimeBarCanvas from './src/TimeLine/TimeBarCanvas.vue'

const plugin = {
  install(app) {
    app.component(TimeLine.name, TimeLine)
    app.component(TimeBarCanvas.name, TimeBarCanvas)
  }
}

export { TimeLine, TimeBarCanvas, plugin }
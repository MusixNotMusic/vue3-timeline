import TimeBarCanvasSimple from './src/TimeLine/simple/TimeBarCanvasSimple.vue'
import TimeLineMain from './src/TimeLine/simple/TimeLineMain.vue'
import TimeLineSimpleMain from './src/TimeLine/v2/TimeLineSimpleMain.vue'

const plugin = {
  install(app) {
    app.component(TimeLineMain.name, TimeLineMain),
    app.component(TimeLineSimpleMain.name, TimeLineSimpleMain),
  }
}

export { 
  TimeBarCanvasSimple, 
  TimeLineMain, 
  TimeLineSimpleMain }
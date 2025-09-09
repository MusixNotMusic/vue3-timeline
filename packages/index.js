import TimeBarCanvas from './src/TimeLine/TimeBarCanvas.vue'
import TimeBarCanvasSimple from './src/TimeLine/simple/TimeBarCanvasSimple.vue'
import TimeLineMain from './src/TimeLine/simple/TimeLineMain.vue'
import TimeLineSimpleMain from './src/TimeLine/simple/TimeLineSimpleMain.vue'

const plugin = {
  install(app) {
    app.component(TimeBarCanvas.name, TimeBarCanvas)
    app.component(TimeBarCanvasSimple.name, TimeBarCanvasSimple)
    app.component(TimeLineMain.name, TimeLineMain)
  }
}

export { TimeBarCanvas, TimeLineMain, TimeBarCanvasSimple, TimeLineSimpleMain, plugin }
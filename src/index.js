import TimeLine from "./components/TimeLine/TimeLine.vue";

export { TimeLine }; //实现按需引入

const components = [TimeLine];

const install = function (App, options) {
  components.forEach((component) => {
    App.component(component.name, component);
  });
};

export default { install }; // 实现批量引入

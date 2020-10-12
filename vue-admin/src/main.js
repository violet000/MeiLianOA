import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// 导入elementui
import Elementui from "element-ui"
import 'element-ui/lib/theme-chalk/index.css'
// 导入字体图标
import '../font/iconfont.css'
// 导入全局样式表
import './assets/css/global.css';

//全局挂载
Vue.use(Elementui);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

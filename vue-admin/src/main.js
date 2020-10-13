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
//导入axios
import axios from 'axios';
//配置请求的根路径
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/';
Vue.prototype.$http = axios;

//全局挂载
Vue.use(Elementui);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

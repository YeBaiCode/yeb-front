import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import router from './router'
import store from './store'
// 引入封装请求
import {postRequest} from './utils/api'
import {getRequest} from './utils/api'
import {deleteRequest} from './utils/api'
import {putRequest} from './utils/api'


Vue.config.productionTip = false
Vue.use(ElementUI);

// 封装成vue插件 使用请求
Vue.prototype.postRequest = postRequest;
Vue.prototype.putRequest = putRequest;
Vue.prototype.getRequest = getRequest;
Vue.prototype.deleteRequest = deleteRequest;



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

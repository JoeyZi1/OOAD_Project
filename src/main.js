import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios';
import './mock'
import router from './router/index'
import uploader from 'vue-simple-uploader'
import jQuery from 'jquery'


Vue.prototype.$http = axios
Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(uploader);
Vue.use(jQuery)

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')

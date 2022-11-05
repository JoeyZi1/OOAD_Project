import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios';
import './mock'
import router from './router/index'


Vue.config.productionTip = false
Vue.use(ElementUI);

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')

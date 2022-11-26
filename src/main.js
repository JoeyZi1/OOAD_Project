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
import hljs from 'highlight.js'
//css样式可以去官网选择
import 'highlight.js/styles/googlecode.css' //样式文件
import {lineNumbersBlock} from '@/highlight/highlight-line-number'
import Vuetify from 'vuetify'
import vuetify from './plugins/vuetify'
import store  from "./store";

router.beforeEach((to, from, next) => {
    if (to.name!='login') {
      let token = window.sessionStorage.getItem("Token")
      console.log(token)
      if (token) {
        next()
      } else {
        Vue.prototype.$message({
          type: "error",
          message: "请先登录"
       });
        next('/login')
      }
    } else {
      next()
    }
  })
  
  


Vue.directive('highlight', {
  update(el){
      let blocks = el.querySelectorAll('pre code');
      blocks.forEach((block)=>{
          if(block.getAttribute("highlighted")=="true"){
              return
          }
          //防止已经高亮处理过的block再次被处理
          block.setAttribute("highlighted","true")
          //高亮
          hljs.highlightElement(block)
          //添加行号
          lineNumbersBlock(block)
      })
  }
})


Vue.prototype.$http = axios
Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(uploader);
Vue.use(jQuery);
Vue.use(hljs);
Vue.use(Vuetify);
// Vue.use(hljs.vuePlugin);

new Vue({
  vuetify,
  render: h => h(App),
  router: router,
  store
}).$mount('#app')

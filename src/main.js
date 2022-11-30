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

import nprogress from 'nprogress'
import 'nprogress/nprogress.css'
nprogress.configure({ showSpinner: false });

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

// router.beforeEach(async (to, from, next) => {
//     if (to.path ==='/login') next();
//     let token = window.sessionStorage.getItem('TOKEN');
//     console.log("the token is ->");
//     console.log(token);
//     if(token) {
//       // 登录
//       if(to.path === '/login') {
//           // 登陆后访问登录页
//           next({path:from.path});
//       } else {
//           // 登陆后访问非登录页
//           if(store.state.userName === '') {
//               // 当空对象作为判断条件时，相当于true。当空对象与布尔值直接比较时，相当于true，但空数组与布尔值直接比较时是false
//               // 登录后访问非登录页，如果此时用户信息由于页面刷新，store为空需要再次请求后端，拿到用户信息
//               try {
//                   await store.dispatch('getUserInfo');
//                   next();
//               } catch (error) {
//                   // token过期
//                   await store.dispatch('userLogout');
//                   next({path:'/login'});
//               }
//           } else {
//               // 登录后访问非登录页，无刷新操作
//               next();
//           }
//       }
//   } else {
//       // 未登录
//       Vue.prototype.$message({
//           type: "error",
//           message: "请先登录"
//       });
//       next('/login')
//   }
// })


const  WhiteList = ["login","404"]
router.beforeEach((to, from, next) => {
    nprogress.start();
    if (!WhiteList.includes(to.name)) {
      let token = window.sessionStorage.getItem("Token")
      console.log('now token is:')
      console.log(token)
      if (token) {
        // if (!store.state.userName) {
        //   if (store.dispatch('getUserInfo')) {
        //     next()
        //   } else {
        //     Vue.prototype.$message({
        //       type: "error",
        //       message: "请先登录"
        //     });
        //     next('/login')
        //   }
        // }
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

router.afterEach(() => {
	// 关闭进度条
    nprogress.done()
})





Vue.prototype.$http = axios
Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(uploader);
Vue.use(jQuery);
Vue.use(hljs);
Vue.use(Vuetify);

new Vue({
  vuetify,
  render: h => h(App),
  router: router,
  store
}).$mount('#app')

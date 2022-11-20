import Vue from 'vue'
import Vuex from 'vuex'

// 1. 安装插件 vue的底层会执行 Vue.install
Vue.use(Vuex)

// 2. 创建对象
const store = new Vuex.Store({
    state:{
        userName:''
    },
    mutations:{
        edit(state, username){
            state.userName = username
        }
    },
    actions:{

    },
    getters:{

    },
    modules:{

    }

})

// 3. 导出store对象
export  default store

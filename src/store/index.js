import Vue from 'vue'
import Vuex from 'vuex'
import axios from '@/axios'
Vue.use(Vuex)

// 2. 创建对象
const store = new Vuex.Store({
    state:{
        userName:'',
        token: '',
    },
    mutations:{
        edit(state, username){
            state.userName = username
        },
        USERLOGIN(state,token){
            state.token = token;
        },
        USERNAME(state,userName){
            state.userName = userName;
        },
    },
    actions:{
        async userLogin(context,form){
            var judge = false;
            var token;
            // 发送登录请求
            await axios.get('/login/signin/'+ form.account + '/' + form.passWord).then((response)=>{
                judge = response.Login
                token = response.Token
            })
            if(judge) {
                // 存放token
                context.commit('USERLOGIN',token);
                // localStorage.setItem('Token',token)
                window.sessionStorage.removeItem('Token')
                window.sessionStorage.setItem('Token', token)


                //记录用户信息
                context.commit('USERNAME', form.account);
                return judge;
            } else {
                // 登录失败
                return judge;
            }
        },

        userLogout(context) {
            return new Promise(resolve => {
                context.commit('USERLOGIN', '');

                // localStorage.removeItem('Token');
                // console.log("--------after remove storage-------");
                // console.log(localStorage.getItem('Token'));
                // console.log("--------after remove storage-------");

                context.commit('USERNAME', '');
                window.sessionStorage.removeItem('Token');
                resolve()
            })
            
        },

        // getUserInfo() {
        //     let result = axios.get('/CheckToken').then((response)=>{
        //         context.commit('USERNAME',response.name);
        //         if (response.name === null || response.name === "" || response.name === undefined){
        //             return false
        //         } else {
        //             return true
        //         }
        //     }).catch(function (error) {
        //         return false
        //     });
        //     return false;
        // }

    },
    getters:{

    },
    modules:{

    }

})

// 3. 导出store对象
export  default store
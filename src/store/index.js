import Vue from 'vue'
import Vuex from 'vuex'
import axios from '@/axios'
Vue.use(Vuex)

// 2. 创建对象
const store = new Vuex.Store({
    state:{
        userName:'',
        token: localStorage.getItem('TOKEN') || '',
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
                // 存放token，vuex和localStorage各一份
                context.commit('USERLOGIN',token);
                // localStorage.setItem('TOKEN',token);
                window.sessionStorage.setItem('Token', token)
                console.log("store token now->")
                console.log(window.sessionStorage.getItem('Token'))

                //记录用户信息
                context.commit('USERNAME', form.account);
                return 'ok';
            } else {
                // 登录失败
                return Promise.reject(new Error(result.message));
            }
            return judge;
        },

        userLogout(context) {
            return new Promise(resolve => {
                commit('USERLOGIN', '');
                // localStorage.removeItem('TOKEN');
                window.sessionStorage.removeItem('Token');
                resolve()
            })
        },

        getUserInfo() {
            let result = axios.get('/UserPage/'+this.$route.params.userName+'/checkToken').then((response)=>{
                console.log("-------response------");
                console.log(response);
              })

            if(result.code === 200) {
                context.commit('USERNAME',result.name);
                return 'ok';
            } else {
                return Promise.reject(new Error(result.message));
            }

        }

    },
    getters:{

    },
    modules:{

    }

})

// 3. 导出store对象
export  default store
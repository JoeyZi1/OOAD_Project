import axios from 'axios'
// 引入进度条
import nprogress from 'nprogress'
// 引入进度条的样式
import 'nprogress/nprogress.css'
// 引入store
import store from '@/store'
// 创建axios实例

import router from '../router/index'

nprogress.configure({ showSpinner: false });

const requests = axios.create({
    baseURL:"http://10.27.133.155:8080",
    // 请求超时的时间
    timeout:5000,
});
 
// 请求拦截器 -- 在请求发出前做些事情
requests.interceptors.request.use((config) => {
    if(window.sessionStorage.getItem('Token')) {
        console.log('has token')
        console.log(window.sessionStorage.getItem('Token'))
        config.headers.Token = window.sessionStorage.getItem('Token');
    }
    nprogress.start();
    return config;
});
// sdad
 
// 响应拦截器 
requests.interceptors.response.use((res) => {
    console.log('response')
    console.log(res)
    nprogress.done();
    return res.data;
},(err) => {
    console.log('err response')
    console.log(err)
    console.log(err.response.status)
    if (err.response.status === 401) {
        alert('forbidden')
        router.push({
        name: "404",
        })
    }
    if (err.response.status === 500 || err.response.status === 404) {
        nprogress.done();
    }
    nprogress.done();
    return false
    // return Promise.reject(new Error('fail'))
});
 
export default requests;

import axios from 'axios'
// 引入进度条
import nprogress from 'nprogress'
// 引入进度条的样式
import 'nprogress/nprogress.css'
// 引入store
import store from '@/store'
// 创建axios实例

const requests = axios.create({
    baseURL:"http://10.27.133.155:8080",
    // 请求超时的时间
    timeout:5000,
});
 
// 请求拦截器 -- 在请求发出前做些事情
requests.interceptors.request.use((config) => {
    // 需要携带token给服务器
    if(store.state.token) {
        config.headers.Token = store.state.token;
    }
    nprogress.start();
    // config 是配置对象，里面包含请求头headers
    return config;
});
 
// 响应拦截器 
requests.interceptors.response.use((res) => {
    nprogress.done();
    return res.data;
},(err) => {
    return Promise.reject(new Error('fail'))
});
 
export default requests;

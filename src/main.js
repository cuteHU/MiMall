import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import axios from 'axios'
import VueAxios from 'vue-axios'
// import env from './env'
// 根据前端的跨域方式做调整
// axios.defaults.baseURL = '/api';
// 根据环境变量获取不同的请求地址
// axios.defaults.baseURL = env.baseURL;
//mock开关
const mock = true;
if (mock) {
    require('./mock/api')
}

axios.defaults.timeout = 8000;

// 错误拦截
axios.interceptors.response.use(function(response) {
    let res = response.data;
    if (res.status == 0) {
        return res.data;
    } else if (res.status == 10) {
        window.location.href = '/#/login';
    } else {
        alert(res.msg);
    }
});

Vue.use(VueAxios, axios);
Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
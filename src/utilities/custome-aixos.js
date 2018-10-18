import Vue from 'vue'
import VueAxios from 'vue-axios'
import Axios from 'axios'
import { Toast } from 'vant'

const customAxios = Axios.create({
    headers: {
        'content-type': 'application/json'
    },
    timeout: 10000,
    validateStatus: () => true
})

Vue.use(VueAxios, customAxios)

// 接口请求统一参数配置
Vue.axios.interceptors.request.use(
    conf =>
        Object.assign({}, conf, {
            headers: {
                // TODO:统一请求参数配置处
                // token: store.getters.sessionId
            }
        }),
    err => Promise.reject(err)
)

//  接口返回拦截
Vue.axios.interceptors.response.use(
    res => {
        return Promise.resolve(res.data)
    },
    err => {
        if (err && err.code === 'ECONNABORTED') {
            Toast('网络请求超时，请稍后重试！')
        }
        if (err && err.message === 'Network Error') {
            Toast('网络连接异常，请检查你的网络设置')
        }
        return Promise.reject(err)
    }
)

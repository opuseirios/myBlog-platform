import Vue from 'vue'
import axios, {AxiosResponse} from 'axios'
import {encode} from 'js-base64'
import {Loading} from 'element-ui'

Vue.use(Loading)

const baseURL = '/api'
const axiosInstance = axios.create({
    baseURL,
    timeout: 60000
})

let loadingService: any = null
axiosInstance.interceptors.request.use((config) => {
    config.headers = {
        'content-type': 'application/json',
        Authorization: baseEncode()
    }
    if (!config.params || !config.params.hideLoading) {
        loadingService = Loading.service({
            lock: true,
            background: 'rgba(0,0,0,.5)'
        })
    }
    return config
}, (e: any) => {
    loadingService && loadingService.close()
    return Promise.resolve({responseCode: 'E002', responseMsg: '请检查网络', e})
})

axiosInstance.interceptors.response.use((response: AxiosResponse) => {
    loadingService && loadingService.close()
    return response.data
}, e => {
    loadingService && loadingService.close()
    return Promise.resolve({responseCode: 'E002', responseMsg: '请检查网络', e})
})

let res: any = {}

res.before = () => {
}

Array.prototype.forEach.call(['post', 'get', 'put', 'delete'], item => {
    res[item] = function (url: string, data: any = {}, config: any = {}) {
        res.before(config)
        if (item === 'get') {
            // @ts-ignore
            return axiosInstance[item](url, {params: data, ...config})
        }
        data = data || {};
        // @ts-ignore
        return axiosInstance[item](url, data, config)
    }
})

function baseEncode() {
    const token = localStorage.getItem('token')
    const base64 = encode(token + ':')
    return 'Basic ' + base64;
}

export default res;

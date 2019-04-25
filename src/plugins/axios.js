'use strict'
import axios from 'axios'
import { baseUrl } from './env'
import qs from 'qs'
import store from '../store/store'
import { Message } from 'element-ui'
import { getToken } from './auth'
// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

function filterObj (obj = {}) {
  for (const key in obj) {
    const ot = Object.prototype.toString.call(obj[key])
    if (ot === '[object Array]' || ot === '[object Object]') {
      obj[key] = JSON.stringify(obj[key])
    }
  }
  return qs.stringify(obj)
}

let config = {
  baseURL: baseUrl,
  timeout: 60 * 1000, // Timeout
  withCredentials: true, // Check cross-site Access-Control
  method: 'post'
}

const _axios = axios.create(config)

_axios.interceptors.request.use(
  function (config) {
    if (store.state.token) {
      config.headers['userId'] = getToken()
    }
    config.headers['x-requested-with'] = 'XMLHttpRequest'
    if (config.data) {
      config.data = filterObj(config.data)
    }
    return config
  },
  function (error) {
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// Add a response interceptor
_axios.interceptors.response.use(
  function (response) {
    const res = response.data
    if (Number(res.errcode) !== 0) {
      Message({
        message: res.errmsg || '服务器开了个小差',
        type: 'error',
        duration: 5 * 1000
      })
      return res
    } else {
      return response.data
    }
  },
  function (error) {
    console.log('err' + error) // for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)
export default _axios
//
// Plugin.install = function (Vue, options) {
//   Vue.axios = _axios
//   window.axios = _axios
//   Object.defineProperties(Vue.prototype, {
//     axios: {
//       get () {
//         return _axios
//       }
//     },
//     $axios: {
//       get () {
//         return _axios
//       }
//     }
//   })
// }
//
// Vue.use(Plugin)
//
// export default Plugin

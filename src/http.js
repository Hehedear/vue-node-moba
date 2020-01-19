import axios from 'axios'
import Vue from 'vue'
import router from './router/index'
const http = axios.create({
  baseURL: process.env.VUE_APP_API_URL || '/admin/api'
  // baseURL: 'http://localhost:3000/admin/api'
})
http.interceptors.response.use(res => {
  return res
}, err => {
  Vue.prototype.$message({
    type: 'error',
    message: err.response.data.message
  })
  console.log(err.response)
  if (err.response.status === 401) {
    router.push('/login')
  }
  return Promise.reject(err)
})
if (sessionStorage.token) {
  http.interceptors.request.use(function (config) {
    config.headers.Authorization = 'Bearer ' + sessionStorage.token || ''
    return config
  }, function (error) {
    return Promise.reject(error)
  })
}
export default http

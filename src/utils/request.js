// 对axios进行封装
import axios from 'axios'
// 请求拦截器
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0' // 赋值给黑马头条的默认地址
// 请求拦截
axios.interceptors.request.use(function (config) {
  // 执行请求成功
  let token = window.localStorage.getItem('user-token') // 获取token
  config.headers.Authorization = `Bearer ${token}` // 统一注入token
  return config
}, function () {
  // 执行请求失败
})
// 响应拦截
console.log(axios.interceptors.response)
axios.interceptors.response.use(function (response) {
  // 成功时执行
  return response.data ? response.data : {} // 解决当data不存在时 then中读取数据报错问题
}, function () {
  // 失败时执行
})
export default axios // 导出axios

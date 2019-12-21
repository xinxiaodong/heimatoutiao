// 对axios进行封装
import axios from 'axios'
// 请求拦截器
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0' // 赋值给黑马头条的默认地址

axios.interceptors.request.use(function (config) {
  // 执行请求成功
  let token = window.localStorage.getItem('user-token') // 获取token
  config.headers.Authorization = `Bearer ${token}` // 统一注入token
  return config
}, function () {
  // 执行请求失败
}
)
export default axios // 导出axios

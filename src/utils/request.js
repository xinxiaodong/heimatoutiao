// 对axios进行封装
import axios from 'axios'
import router from '../router'
import { Message } from 'element-ui'
import JSONBig from 'json-bigint' // 引入第三方包
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
// 后台数据到达响应拦截前的一个函数
axios.defaults.transformResponse = [function (data) {
  // data有可能是一个空字符串 直接处理一下 保证不会报错
  return data ? JSONBig.parse(data) : {} // 保证数字的正确
}]
// 响应拦截
axios.interceptors.response.use(function (response) {
  // 成功时执行
  return response.data ? response.data : {} // 解决当data不存在时 then中读取数据报错问题
}, function (error) {
  // 失败时执行
  let status = error.response.status // 获取失败的状态码
  let message = '未知错误' // 提示信息
  switch (status) {
    case 400:
      message = '请求参数错误'
      break
    case 403:
      window.localStorage.removeItem('user-token') // 强制删除token
      router.push('/login')
      break
    case 401:
      window.localStorage.removeItem('user-token') // 强制删除token
      router.push('/login')
      break
    case 507:
      message = '服务器数据库异常'
      break
    case 404:
      message = '手机号不正确'
      break
    default:
      break
  }
  Message({ type: 'warning', message }) // 提示信息
  // 状态码提示
  return Promise.reject(error)
})
export default axios // 导出axios

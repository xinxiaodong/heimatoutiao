// 专门放置请求模块的逻辑
import request from '../utils/request'
import { API_ARTICLES, API_CHANNELS } from '../constant/api'
export function getArticles (params) {
  return request({
    url: API_ARTICLES,
    params
  })
}
export function getChannels () {
  return request({
    url: API_CHANNELS
  })
}

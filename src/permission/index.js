// 权限拦截
import router from '../router'
import progress from 'nprogress'
import 'nprogress/nprogress.css'
// 全局前置守卫
router.beforeEach(function (to, from, next) {
  progress.start() // 开启进度条
  if (to.path.startsWith('/home')) {
    // 进行权限判断
    let token = window.localStorage.getItem('user-token')
    if (token) {
      // 直接放过
      next()
    } else {
      next('/login') // 强制跳转到登录页
    }
  } else {
    next() // 直接放行
  }
})

// afterEach 关闭
router.afterEach(function () {
  progress.done()
  // setTimeout(() => progress.done(), 500) // 关闭进度条
})

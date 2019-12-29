import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home'
import Login from '../views/login'
import Home2 from '../views/home/home.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '*', // 匹配任何地址 但是如果其他的可以匹配 优先匹配其他 否则匹配该组件
    component: () => import('../views/404') // 配置404页面
  },
  {
    // 主页
    path: '/home',
    name: 'home',
    component: Home,
    children: [{
      path: '',
      component: Home2
    }, {
      // 二级路由表
      path: '/home/comment',
      component: () => import('../views/comment/index.vue')
    }, {
      path: 'material',
      component: () => import('../views/material') // 按需加载
    }, {
      path: 'articles',
      component: () => import('../views/articles')
    }, {
      path: 'publish/:articleId',
      component: () => import('../views/publish') // 按需加载
    }, {
      path: 'publish',
      component: () => import('../views/publish')
    }, {
      path: 'account',
      component: () => import('../views/account')
    }
    ]
  },
  {
    // 登录页
    path: '/login',
    component: Login
  }
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router

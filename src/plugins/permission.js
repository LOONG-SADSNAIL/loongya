import router from '../router/router'
import store from '../store/store'
import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css'// Progress 进度条样式
import { Message } from 'element-ui'
import { getToken } from '@/plugins/auth' // 验权
NProgress.inc(0.1)
// （如ease、linear、ease-in、ease-out、ease-in-out、cubic-bezier
NProgress.configure({ easing: 'ease-in', speed: 200, showSpinner: false })

router.beforeEach((to, from, next) => {
  NProgress.start()
  // removeToken()
  if (getToken()) {
    NProgress.done()
    if (to.path === '/login') {
      next({ path: '/' })
      NProgress.done()
      return false
    } else if (store.state.menu_data.length === 0 || localStorage.getItem('new')) {
      store.dispatch('setMenuData').then(res => {
        if (res.type === 1) {
          if (res.arr.length === 0) {
            Message.error('用户没有可用权限，请联系管理员！')
            NProgress.done()
            return false
          }
          localStorage.setItem('new', false)
        } else {
          store.dispatch('LogOut').then(() => {
            next({ path: '/login' })
            NProgress.done()
          })
          return false
        }
      }).catch(err => {
        store.dispatch('LogOut').then(() => {
          Message.error(err || '获取菜单失败，请重新登录！！')
          next({ path: '/login' })
          NProgress.done()
        })
      })
    }
    next()
    NProgress.done()
  } else {
    if (['/login'].indexOf(to.path) !== -1) {
      next()
    } else {
      // next(`/login?redirect=${to.path}`) // 否则全部重定向到登录页
      next(`/login`) // 否则全部重定向到登录页
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  NProgress.done() // 结束Progress
})

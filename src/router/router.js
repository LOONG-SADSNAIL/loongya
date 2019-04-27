import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/index/Home'
import login from './modules/login'
import demo from './modules/demo'
import sysuser from './modules/sysuser'
import sysrole from './modules/sysrole'
import sysbaseorgan from './modules/sysbaseorgan'

Vue.use(Router)

export const constantRouterMap = [
  {
    path: '/',
    component: Home,
    meta: { title: '首页' }
  },
  login,
  demo,
  sysuser,
  sysrole,
  sysbaseorgan
]

export default new Router({
  routes: constantRouterMap
})

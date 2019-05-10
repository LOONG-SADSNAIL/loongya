import Vue from 'vue'
import Router from 'vue-router'
import index from './modules/index'
import login from './modules/login'
import demo from './modules/demo'
import sysuser from './modules/sysuser'
import sysrole from './modules/sysrole'
import sysbaseorgan from './modules/sysbaseorgan'
import sysdict from './modules/sysdict'
import sysmenu from './modules/sysmenu'
import sysnotice from './modules/sysnotice'
import tjuser from './modules/tjuser'
import hovillage from './modules/hovillage'

Vue.use(Router)

export const constantRouterMap = [
  index,
  login,
  demo,
  sysuser,
  sysrole,
  sysbaseorgan,
  sysdict,
  sysmenu,
  sysnotice,
  tjuser,
  hovillage
]

export default new Router({
  routes: constantRouterMap
})

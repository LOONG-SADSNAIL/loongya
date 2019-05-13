import Home from '../../../views/index/Home'
import hwrecoverywaitIndex from '../../../views/hw/hwrecoverywait/index'

export const RouterMapHwRecoveryWait = {
  path: '/hwrecoverywait',
  component: Home,
  hidden: true,
  redirect: '/hwrecoverywaitindex',
  children: [
    {
      path: '/hwrecoverywaitindex',
      component: hwrecoverywaitIndex,
      name: 'hwrecoverywait',
      meta: { title: '预约回收管理' }
    }
  ]
}
export default RouterMapHwRecoveryWait

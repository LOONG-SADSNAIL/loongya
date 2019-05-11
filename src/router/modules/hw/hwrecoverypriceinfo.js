import Home from '../../../views/index/Home'
import hwrecoverypriceinfoIndex from '../../../views/hw/hwrecoverypriceinfo/index'

export const RouterMapHwRecoveryPriceInfo = {
  path: '/hwrecoverypriceinfo',
  component: Home,
  hidden: true,
  redirect: '/hwrecoverypriceinfoindex',
  children: [
    {
      path: '/hwrecoverypriceinfoindex',
      component: hwrecoverypriceinfoIndex,
      name: 'hwrecoverypriceinfo',
      meta: { title: '回收物价格管理' }
    }
  ]
}
export default RouterMapHwRecoveryPriceInfo

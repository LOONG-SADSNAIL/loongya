import Home from '../../../views/index/Home'
import hwrubbishdeliveryinfoIndex from '../../../views/hw/hwrubbishdeliveryinfo/index'

export const RouterMapHwRubbishDeliveryInfo = {
  path: '/hwrubbishdeliveryinfo',
  component: Home,
  hidden: true,
  redirect: '/hwrubbishdeliveryinfoindex',
  children: [
    {
      path: '/hwrubbishdeliveryinfoindex',
      component: hwrubbishdeliveryinfoIndex,
      name: 'hwrubbishdeliveryinfo',
      meta: { title: '巡检管理' }
    }
  ]
}
export default RouterMapHwRubbishDeliveryInfo

import Home from '../../../views/index/Home'
import hwrfidcoderelevanceIndex from '../../../views/hw/hwrfidcoderelevance/index'

export const RouterMapHwRfidCoderElevance = {
  path: '/hwrfidcoderelevance',
  component: Home,
  hidden: true,
  redirect: '/hwrfidcoderelevanceindex',
  children: [
    {
      path: '/hwrfidcoderelevanceindex',
      component: hwrfidcoderelevanceIndex,
      name: 'hwrfidcoderelevance',
      meta: { title: '垃圾袋入库管理' }
    }
  ]
}
export default RouterMapHwRfidCoderElevance

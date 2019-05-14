import Home from '../../../views/index/Home'
import hwreplenishmentinfoIndex from '../../../views/hw/hwreplenishmentinfo/index'

export const RouterMapHwReplenishMentInfo = {
  path: '/hwreplenishmentinfo',
  component: Home,
  hidden: true,
  redirect: '/hwreplenishmentinfoindex',
  children: [
    {
      path: '/hwreplenishmentinfoindex',
      component: hwreplenishmentinfoIndex,
      name: 'hwreplenishmentinfo',
      meta: { title: '补货详情管理' }
    }
  ]
}
export default RouterMapHwReplenishMentInfo

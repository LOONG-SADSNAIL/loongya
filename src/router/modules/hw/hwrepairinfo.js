import Home from '../../../views/index/Home'
import hwrepairinfoIndex from '../../../views/hw/hwrepairinfo/index'

export const RouterMapHwRepairInfo = {
  path: '/hwrepairinfo',
  component: Home,
  hidden: true,
  redirect: '/hwrepairinfoindex',
  children: [
    {
      path: '/hwrepairinfoindex',
      component: hwrepairinfoIndex,
      name: 'hwrepairinfo',
      meta: { title: '保修管理' }
    }
  ]
}
export default RouterMapHwRepairInfo

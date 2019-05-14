import Home from '../../../views/index/Home'
import hwtakegoodsinfoIndex from '../../../views/hw/hwtakegoodsinfo/index'

export const RouterMapHwTakeGoodsInfo = {
  path: '/hwtakegoodsinfo',
  component: Home,
  hidden: true,
  redirect: '/hwtakegoodsinfoindex',
  children: [
    {
      path: '/hwtakegoodsinfoindex',
      component: hwtakegoodsinfoIndex,
      name: 'hwtakegoodsinfo',
      meta: { title: '物品领用管理' }
    }
  ]
}
export default RouterMapHwTakeGoodsInfo

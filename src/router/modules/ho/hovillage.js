import Home from '../../../views/index/Home'
import HoVillageIndex from '../../../views/ho/hovillage/index'

export const RouterMapHoVillage = {
  path: '/hovillage',
  component: Home,
  hidden: true,
  redirect: '/hovillageindex',
  children: [
    {
      path: '/hovillageindex',
      component: HoVillageIndex,
      name: 'hovillage',
      meta: { title: '小区管理' }
    }
  ]
}
export default RouterMapHoVillage

import Home from '../../../views/index/Home'
import hovillageIndex from '../../../views/ho/hovillage/index'

export const RouterMapHoVillage = {
  path: '/hovillage',
  component: Home,
  hidden: true,
  redirect: '/hovillageindex',
  children: [
    {
      path: '/hovillageindex',
      component: hovillageIndex,
      name: 'hovillage',
      meta: { title: '小区管理' }
    }
  ]
}
export default RouterMapHoVillage

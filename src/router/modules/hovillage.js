import Home from '../../views/index/Home'
import HoVillageIndex from '../../views/ho/village/index'

export const RouterMapSysrole = {
  path: '/village/list',
  component: Home,
  hidden: true,
  redirect: '/hovillagelist',
  children: [
    {
      path: '/hovillagelist',
      component: HoVillageIndex,
      name: 'hovillage',
      meta: { title: '小区管理' }
    }
  ]
}
export default RouterMapSysrole

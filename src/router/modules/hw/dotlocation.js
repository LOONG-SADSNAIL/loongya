import Home from '../../../views/index/Home'
import dotlocationIndex from '../../../views/hw/dotlocation/index'

export const RouterMapDotLocation = {
  path: '/dotlocation',
  component: Home,
  hidden: true,
  redirect: '/dotlocationindex',
  children: [
    {
      path: '/dotlocationindex',
      component: dotlocationIndex,
      name: 'dotlocation',
      meta: { title: '网点定位管理' }
    }
  ]
}
export default RouterMapDotLocation

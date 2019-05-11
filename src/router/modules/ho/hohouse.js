import Home from '../../../views/index/Home'
import hohouseIndex from '../../../views/ho/hohouse/index'

export const RouterMapHoHouse = {
  path: '/hohouse',
  component: Home,
  hidden: true,
  redirect: '/hohouseindex',
  children: [
    {
      path: '/hohouseindex',
      component: hohouseIndex,
      name: 'hohouse',
      meta: { title: '业主管理' }
    }
  ]
}
export default RouterMapHoHouse

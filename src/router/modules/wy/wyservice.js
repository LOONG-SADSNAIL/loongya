import Home from '../../../views/index/Home'
import wyserviceIndex from '../../../views/wy/wyservice/index'

export const RouterMapWyService = {
  path: '/wyservice',
  component: Home,
  hidden: true,
  redirect: '/wyserviceindex',
  children: [
    {
      path: '/wyserviceindex',
      component: wyserviceIndex,
      name: 'wyservice',
      meta: { title: '终端管理' }
    }
  ]
}
export default RouterMapWyService

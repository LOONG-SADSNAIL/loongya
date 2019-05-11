import Home from '../../../views/index/Home'
import tjUserIndex from '../../../views/tj/tjuser/index'

export const RouterMapTjUser = {
  path: '/tjuser',
  component: Home,
  hidden: true,
  redirect: '/tjuserindex',
  children: [
    {
      path: '/tjuserindex',
      component: tjUserIndex,
      name: 'tjuser',
      meta: { title: '用户管理' }
    }
  ]
}
export default RouterMapTjUser

import Home from '../../views/index/Home'
import TjUserIndex from '../../views/tj/user/index'

export const RouterMapSysrole = {
  path: '/user/list',
  component: Home,
  hidden: true,
  redirect: '/tjuserlist',
  children: [
    {
      path: '/tjuserlist',
      component: TjUserIndex,
      name: 'tjuser',
      meta: { title: '用户管理' }
    }
  ]
}
export default RouterMapSysrole

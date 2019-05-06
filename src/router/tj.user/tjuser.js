import Home from '../../views/index/Home'
import SysRoleIndex from '../../views/tj/user/index'

export const RouterMapSysrole = {
  path: '/tjuser',
  component: Home,
  hidden: true,
  redirect: '/tjuserindex',
  children: [
    {
      path: '/sysroleindex',
      component: SysRoleIndex,
      name: 'tjuser',
      meta: { title: '用户管理' }
    }
  ]
}
export default RouterMapSysrole

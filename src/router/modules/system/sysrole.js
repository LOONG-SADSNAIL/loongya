import Home from '../../../views/index/Home'
import SysRoleIndex from '../../../views/system/sysrole/index'

export const RouterMapSysrole = {
  path: '/sysrole',
  component: Home,
  hidden: true,
  redirect: '/sysroleindex',
  children: [
    {
      path: '/sysroleindex',
      component: SysRoleIndex,
      name: 'sysrole',
      meta: { title: '系统角色管理' }
    }
  ]
}
export default RouterMapSysrole

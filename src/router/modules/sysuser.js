import Home from '../../views/index/Home'
import SysUserIndex from '../../views/system/sysuser/index'

export const RouterMapSysuser = {
  path: '/sysuser',
  component: Home,
  hidden: true,
  redirect: '/sysuserindex',
  children: [
    {
      path: '/sysuserindex',
      component: SysUserIndex,
      name: 'sysuser',
      meta: { title: '系统用户管理' }
    }
  ]
}
export default RouterMapSysuser

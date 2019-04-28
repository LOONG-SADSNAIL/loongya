import Home from '../../views/index/Home'
import SysMenuIndex from '../../views/system/sysmenu/index'

export const RouterMapSysmenu = {
  path: '/sysmenu',
  component: Home,
  hidden: true,
  redirect: '/sysmenuindex',
  children: [
    {
      path: '/sysmenuindex',
      component: SysMenuIndex,
      name: 'sysmenu',
      meta: { title: '系统菜单管理' }
    }
  ]
}
export default RouterMapSysmenu

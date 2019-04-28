import Home from '../../views/index/Home'
import SysNoticeIndex from '../../views/system/sysnotice/index'

export const RouterMapSysnotice = {
  path: '/sysnotice',
  component: Home,
  hidden: true,
  redirect: '/sysnoticeindex',
  children: [
    {
      path: '/sysnoticeindex',
      component: SysNoticeIndex,
      name: 'sysnotice',
      meta: { title: '系统通知管理' }
    }
  ]
}
export default RouterMapSysnotice

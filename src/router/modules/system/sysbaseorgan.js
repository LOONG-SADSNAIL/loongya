import Home from '../../../views/index/Home'
import SysBaseOrganIndex from '../../../views/system/sysbaseorgan/index'

export const RouterMapSysuser = {
  path: '/sysbaseorgan',
  component: Home,
  hidden: true,
  redirect: '/sysbaseorganindex',
  children: [
    {
      path: '/sysbaseorganindex',
      component: SysBaseOrganIndex,
      name: 'sysbaseorgan',
      meta: { title: '系统机构管理' }
    }
  ]
}
export default RouterMapSysuser

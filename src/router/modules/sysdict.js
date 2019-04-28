import Home from '../../views/index/Home'
import SysDictIndex from '../../views/system/sysdict/index'

export const RouterMapSysdict = {
  path: '/sysdict',
  component: Home,
  hidden: true,
  redirect: '/sysdictindex',
  children: [
    {
      path: '/sysdictindex',
      component: SysDictIndex,
      name: 'sysdict',
      meta: { title: '系统字典管理' }
    }
  ]
}
export default RouterMapSysdict

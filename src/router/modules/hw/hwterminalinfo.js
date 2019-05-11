import Home from '../../../views/index/Home'
import hwterminalinfoIndex from '../../../views/hw/hwterminalinfo/index'

export const RouterMapHwTerminalInfo = {
  path: '/hwterminalinfo',
  component: Home,
  hidden: true,
  redirect: '/hwterminalinfoindex',
  children: [
    {
      path: '/hwterminalinfoindex',
      component: hwterminalinfoIndex,
      name: 'hwterminalinfo',
      meta: { title: '终端管理' }
    }
  ]
}
export default RouterMapHwTerminalInfo

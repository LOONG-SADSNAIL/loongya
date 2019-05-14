import Home from '../../../views/index/Home'
import nrbuspayinfoIndex from '../../../views/nr/nrbuspayinfo/index'

export const RouterMapNrBusPayInfo = {
  path: '/nrbuspayinfo',
  component: Home,
  hidden: true,
  redirect: '/nrbuspayinfoindex',
  children: [
    {
      path: '/nrbuspayinfoindex',
      component: nrbuspayinfoIndex,
      name: 'nrbuspayinfo',
      meta: { title: '支付码管理' }
    }
  ]
}
export default RouterMapNrBusPayInfo

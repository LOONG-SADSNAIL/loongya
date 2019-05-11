import Home from '../../../views/index/Home'
import hwpassageinfoIndex from '../../../views/hw/hwpassageinfo/index'

export const RouterMapHwPassageInfo = {
  path: '/hwpassageinfo',
  component: Home,
  hidden: true,
  redirect: '/hwpassageinfoindex',
  children: [
    {
      path: '/hwpassageinfoindex',
      component: hwpassageinfoIndex,
      name: 'hwpassageinfo',
      meta: { title: '货道管理' }
    }
  ]
}
export default RouterMapHwPassageInfo

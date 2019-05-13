import Home from '../../../views/index/Home'
import nrbannerIndex from '../../../views/nr/nrbanner/index'

export const RouterMapNrBanner = {
  path: '/nrbanner',
  component: Home,
  hidden: true,
  redirect: '/nrbannerindex',
  children: [
    {
      path: '/nrbannerindex',
      component: nrbannerIndex,
      name: 'nrbanner',
      meta: { title: 'banner管理' }
    }
  ]
}
export default RouterMapNrBanner

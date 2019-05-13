import Home from '../../../views/index/Home'
import nrbooksIndex from '../../../views/nr/nrbooks/index'

export const RouterMapNrBooks = {
  path: '/nrbooks',
  component: Home,
  hidden: true,
  redirect: '/nrbooksindex',
  children: [
    {
      path: '/nrbooksindex',
      component: nrbooksIndex,
      name: 'nrbooks',
      meta: { title: '书库管理' }
    }
  ]
}
export default RouterMapNrBooks

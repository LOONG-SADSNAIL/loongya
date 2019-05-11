import Home from '../../../views/index/Home'
import NrGoodsInfoIndex from '../../../views/nr/nrgoodsinfo/index'

export const RouterMapNrGoodsInfo = {
  path: '/nrgoodsinfo',
  component: Home,
  hidden: true,
  redirect: '/nrgoodsinfoindex',
  children: [
    {
      path: '/nrgoodsinfoindex',
      component: NrGoodsInfoIndex,
      name: 'nrgoodsinfo',
      meta: { title: '商品管理' }
    }
  ]
}
export default RouterMapNrGoodsInfo

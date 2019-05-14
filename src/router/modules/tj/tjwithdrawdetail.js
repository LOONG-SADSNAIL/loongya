import Home from '../../../views/index/Home'
import tjwithdrawdetailIndex from '../../../views/tj/tjwithdrawdetail/index'

export const RouterMapTjWithdrawDetail = {
  path: '/tjwithdrawdetail',
  component: Home,
  hidden: true,
  redirect: '/tjwithdrawdetailindex',
  children: [
    {
      path: '/tjwithdrawdetailindex',
      component: tjwithdrawdetailIndex,
      name: 'tjwithdrawdetail',
      meta: { title: '体现明细管理' }
    }
  ]
}
export default RouterMapTjWithdrawDetail

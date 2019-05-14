import Home from '../../../views/index/Home'
import hwgoodsreceiveIndex from '../../../views/hw/hwgoodsreceive/index'

export const RouterMapHwGoodsReceive = {
  path: '/hwgoodsreceive',
  component: Home,
  hidden: true,
  redirect: '/hwgoodsreceiveindex',
  children: [
    {
      path: '/hwgoodsreceiveindex',
      component: hwgoodsreceiveIndex,
      name: 'hwgoodsreceive',
      meta: { title: '垃圾袋领用管理' }
    }
  ]
}
export default RouterMapHwGoodsReceive

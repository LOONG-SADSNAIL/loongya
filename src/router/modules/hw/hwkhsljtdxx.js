import Home from '../../../views/index/Home'
import hwkhsljtdxxIndex from '../../../views/hw/hwkhsljtdxx/index'

export const RouterMapHwKhsljtdxx = {
  path: '/hwkhsljtdxx',
  component: Home,
  hidden: true,
  redirect: '/hwkhsljtdxxindex',
  children: [
    {
      path: '/hwkhsljtdxxindex',
      component: hwkhsljtdxxIndex,
      name: 'hwkhsljtdxx',
      meta: { title: '回收明细管理' }
    }
  ]
}
export default RouterMapHwKhsljtdxx

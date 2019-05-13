import Home from '../../../views/index/Home'
import tjmessageIndex from '../../../views/tj/tjmessage/index'

export const RouterMapTjMessage = {
  path: '/tjmessage',
  component: Home,
  hidden: true,
  redirect: '/tjmessageindex',
  children: [
    {
      path: '/tjmessageindex',
      component: tjmessageIndex,
      name: 'tjmessage',
      meta: { title: '消息通知管理' }
    }
  ]
}
export default RouterMapTjMessage

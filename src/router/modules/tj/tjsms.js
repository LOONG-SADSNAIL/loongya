import Home from '../../../views/index/Home'
import tjsmsIndex from '../../../views/tj/tjsms/index'

export const RouterMapTjSms = {
  path: '/tjsms',
  component: Home,
  hidden: true,
  redirect: '/tjsmsindex',
  children: [
    {
      path: '/tjsmsindex',
      component: tjsmsIndex,
      name: 'tjsms',
      meta: { title: '版本管理' }
    }
  ]
}
export default RouterMapTjSms

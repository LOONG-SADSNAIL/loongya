import Home from '../../../views/index/Home'
import tjusertimingpushIndex from '../../../views/tj/tjusertimingpush/index'

export const RouterMapTjUserTimingPush = {
  path: '/tjusertimingpush',
  component: Home,
  hidden: true,
  redirect: '/tjusertimingpushindex',
  children: [
    {
      path: '/tjusertimingpushindex',
      component: tjusertimingpushIndex,
      name: 'tjusertimingpush',
      meta: { title: '定时推送管理' }
    }
  ]
}
export default RouterMapTjUserTimingPush

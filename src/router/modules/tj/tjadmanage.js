import Home from '../../../views/index/Home'
import tjadmanageIndex from '../../../views/tj/tjadmanage/index'

export const RouterMapTjAdmanage = {
  path: '/tjadmanage',
  component: Home,
  hidden: true,
  redirect: '/tjadmanageindex',
  children: [
    {
      path: '/tjadmanageindex',
      component: tjadmanageIndex,
      name: 'tjadmanage',
      meta: { title: '广告管理' }
    }
  ]
}
export default RouterMapTjAdmanage

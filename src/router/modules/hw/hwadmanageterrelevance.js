import Home from '../../../views/index/Home'
import hwadmanageterrelevanceIndex from '../../../views/hw/hwadmanageterrelevance/index'

export const RouterMapHwAdmanageTerrElevance = {
  path: '/hwadmanageterrelevance',
  component: Home,
  hidden: true,
  redirect: '/hwadmanageterrelevanceindex',
  children: [
    {
      path: '/hwadmanageterrelevanceindex',
      component: hwadmanageterrelevanceIndex,
      name: 'hwadmanageterrelevance',
      meta: { title: '广告管理' }
    }
  ]
}
export default RouterMapHwAdmanageTerrElevance

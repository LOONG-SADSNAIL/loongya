import Home from '../../../views/index/Home'
import tjincomerechargeIndex from '../../../views/tj/tjincomerecharge/index'

export const RouterMapTjIncomeRecharge = {
  path: '/tjincomerecharge',
  component: Home,
  hidden: true,
  redirect: '/tjincomerechargeindex',
  children: [
    {
      path: '/tjincomerechargeindex',
      component: tjincomerechargeIndex,
      name: 'tjincomerecharge',
      meta: { title: '收支明细管理' }
    }
  ]
}
export default RouterMapTjIncomeRecharge

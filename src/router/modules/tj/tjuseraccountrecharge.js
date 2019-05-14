import Home from '../../../views/index/Home'
import tjuseraccountrechargeIndex from '../../../views/tj/tjuseraccountrecharge/index'

export const RouterMapTjUserAccountRecharge = {
  path: '/tjuseraccountrecharge',
  component: Home,
  hidden: true,
  redirect: '/tjuseraccountrechargeindex',
  children: [
    {
      path: '/tjuseraccountrechargeindex',
      component: tjuseraccountrechargeIndex,
      name: 'tjuseraccountrecharge',
      meta: { title: '回收员充值' }
    }
  ]
}
export default RouterMapTjUserAccountRecharge

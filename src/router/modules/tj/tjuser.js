import Home from '../../views/index/Home'
import tjUserIndex from '../../views/tj/tj/index'

export const RouterMapSysrole = {
  path: '/tj',
  component: Home,
  hidden: true,
  redirect: '/tjuserindex',
  children: [
    {
      path: '/tjuserindex',
      component: tjUserIndex,
      name: 'tjuser',
      meta: { title: '用户管理' }
    }
  ]
}
export default RouterMapSysrole

import Home from '../../../views/index/Home'
import tjuserroleIndex from '../../../views/tj/tjuserrole/index'

export const RouterMapTjUserRole = {
  path: '/tjuserrole',
  component: Home,
  hidden: true,
  redirect: '/tjuserroleindex',
  children: [
    {
      path: '/tjuserroleindex',
      component: tjuserroleIndex,
      name: 'tjuserrole',
      meta: { title: '版本管理' }
    }
  ]
}
export default RouterMapTjUserRole

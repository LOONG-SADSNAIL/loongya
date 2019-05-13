import Home from '../../../views/index/Home'
import tjversionIndex from '../../../views/tj/tjversion/index'

export const RouterMapTjVersion = {
  path: '/tjversion',
  component: Home,
  hidden: true,
  redirect: '/tjversionindex',
  children: [
    {
      path: '/tjversionindex',
      component: tjversionIndex,
      name: 'tjversion',
      meta: { title: '版本管理' }
    }
  ]
}
export default RouterMapTjVersion

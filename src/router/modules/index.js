import Home from '../../views/index/Home'
import index from '../../views/index/index'

export const RouterMapIndex = {
  path: '/',
  component: Home,
  hidden: true,
  redirect: '/index',
  children: [
    {
      path: '/index',
      component: index,
      name: 'index',
      meta: { title: '首页' }
    }
  ]
}
export default RouterMapIndex

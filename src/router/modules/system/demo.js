import Home from '../../../views/index/Home'
import Demo from '../../../views/demo/demo'

export const RouterMapDemo = {
  path: '/demo',
  component: Home,
  hidden: true,
  redirect: '/demo1',
  children: [{
    path: '/demo1',
    component: Demo,
    name: 'demo1',
    meta: { title: '示例页面' }
  }
  ]
}
export default RouterMapDemo

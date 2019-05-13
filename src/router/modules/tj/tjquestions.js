import Home from '../../../views/index/Home'
import tjquestionsIndex from '../../../views/tj/tjquestions/index'

export const RouterMapTjQuestions = {
  path: '/tjquestions',
  component: Home,
  hidden: true,
  redirect: '/tjquestionsindex',
  children: [
    {
      path: '/tjquestionsindex',
      component: tjquestionsIndex,
      name: 'tjquestions',
      meta: { title: '题库管理' }
    }
  ]
}
export default RouterMapTjQuestions

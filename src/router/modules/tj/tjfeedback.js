import Home from '../../../views/index/Home'
import tjfeedbackIndex from '../../../views/tj/tjfeedback/index'

export const RouterMapTjFeedBack = {
  path: '/tjfeedback',
  component: Home,
  hidden: true,
  redirect: '/tjfeedbackindex',
  children: [
    {
      path: '/tjfeedbackindex',
      component: tjfeedbackIndex,
      name: 'tjfeedback',
      meta: { title: '意见反馈管理' }
    }
  ]
}
export default RouterMapTjFeedBack

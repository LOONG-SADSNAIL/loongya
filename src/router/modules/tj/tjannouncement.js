import Home from '../../../views/index/Home'
import tjannouncementIndex from '../../../views/tj/tjannouncement/index'

export const RouterMapTjAnnouncement = {
  path: '/tjannouncement',
  component: Home,
  hidden: true,
  redirect: '/tjannouncementindex',
  children: [
    {
      path: '/tjannouncementindex',
      component: tjannouncementIndex,
      name: 'tjannouncement',
      meta: { title: '公示公告管理' }
    }
  ]
}
export default RouterMapTjAnnouncement

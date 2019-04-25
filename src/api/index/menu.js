import request from '../../plugins/axios'

export function getMenuData () {
  return request({
    url: '/permisinterface/permislist.json',
    data: {
    }
  })
}

import request from '../../plugins/axios'

export function list (data) {
  return request({
    url: '/tjuser/list.json',
    data: data
  })
}

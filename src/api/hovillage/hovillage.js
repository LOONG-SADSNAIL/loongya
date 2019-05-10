import request from '../../plugins/axios'

export function list (data) {
  return request({
    url: '/hovillage/list.json',
    data: data
  })
}

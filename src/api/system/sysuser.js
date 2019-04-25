import request from '../../plugins/axios'

export function list (data) {
  return request({
    url: '/sysuser/list.json',
    data: data
  })
}

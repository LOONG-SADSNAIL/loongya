import request from '../../plugins/axios'

export function list (data) {
  return request({
    url: '/sysnotice/list.json',
    data: data
  })
}

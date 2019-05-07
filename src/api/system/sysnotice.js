import request from '../../plugins/axios'

export function list (data) {
  return request({
    url: '/sysnotice/list.json',
    data: data
  })
}
export function edit (data) {
  return request({
    url: '/sysnotice/edit.json',
    data: data
  })
}
export function del (data) {
  return request({
    url: '/sysnotice/del.json',
    data: data
  })
}

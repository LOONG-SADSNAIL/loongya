import request from '../../plugins/axios'

export function list (data) {
  return request({
    url: '/hohouse/list.json',
    data: data
  })
}
export function edit (data) {
  return request({
    url: '/hohouse/edit.json',
    data: data
  })
}
export function del (data) {
  return request({
    url: '/hohouse/del.json',
    data: data
  })
}

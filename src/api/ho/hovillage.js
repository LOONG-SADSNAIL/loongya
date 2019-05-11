import request from '../../plugins/axios'

export function list (data) {
  return request({
    url: '/hovillage/list.json',
    data: data
  })
}
export function edit (data) {
  return request({
    url: '/hovillage/edit.json',
    data: data
  })
}
export function del (data) {
  return request({
    url: '/hovillage/del.json',
    data: data
  })
}

import request from '../../plugins/axios'

export function list (data) {
  return request({
    url: '/tjsms/list.json',
    data: data
  })
}
export function edit (data) {
  return request({
    url: '/tjsms/edit.json',
    data: data
  })
}
export function del (data) {
  return request({
    url: '/tjsms/del.json',
    data: data
  })
}

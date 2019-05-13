import request from '../../plugins/axios'

export function list (data) {
  return request({
    url: '/tjmessage/list.json',
    data: data
  })
}
export function edit (data) {
  return request({
    url: '/tjmessage/edit.json',
    data: data
  })
}
export function del (data) {
  return request({
    url: '/tjmessage/del.json',
    data: data
  })
}

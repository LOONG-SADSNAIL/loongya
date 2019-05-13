import request from '../../plugins/axios'

export function list (data) {
  return request({
    url: '/tjversion/list.json',
    data: data
  })
}
export function edit (data) {
  return request({
    url: '/tjversion/edit.json',
    data: data
  })
}
export function del (data) {
  return request({
    url: '/tjversion/del.json',
    data: data
  })
}

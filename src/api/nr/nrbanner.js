import request from '../../plugins/axios'

export function list (data) {
  return request({
    url: '/nrbanner/list.json',
    data: data
  })
}
export function edit (data) {
  return request({
    url: '/nrbanner/edit.json',
    data: data
  })
}
export function del (data) {
  return request({
    url: '/nrbanner/del.json',
    data: data
  })
}

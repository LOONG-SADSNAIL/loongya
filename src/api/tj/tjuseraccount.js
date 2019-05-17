import request from '../../plugins/axios'

export function list (data) {
  return request({
    url: '/tjuseraccount/list.json',
    data: data
  })
}
export function edit (data) {
  return request({
    url: '/tjuseraccount/edit.json',
    data: data
  })
}
export function del (data) {
  return request({
    url: '/tjuseraccount/del.json',
    data: data
  })
}

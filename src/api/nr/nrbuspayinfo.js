import request from '../../plugins/axios'

export function list (data) {
  return request({
    url: '/nrbuspayinfo/list.json',
    data: data
  })
}
export function edit (data) {
  return request({
    url: '/nrbuspayinfo/edit.json',
    data: data
  })
}
export function del (data) {
  return request({
    url: '/nrbuspayinfo/del.json',
    data: data
  })
}

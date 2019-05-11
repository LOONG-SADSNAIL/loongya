import request from '../../plugins/axios'

export function list (data) {
  return request({
    url: '/hwterminalinfo/list.json',
    data: data
  })
}
export function edit (data) {
  return request({
    url: '/hwterminalinfo/edit.json',
    data: data
  })
}
export function del (data) {
  return request({
    url: '/hwterminalinfo/del.json',
    data: data
  })
}

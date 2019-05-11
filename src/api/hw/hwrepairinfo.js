import request from '../../plugins/axios'

export function list (data) {
  return request({
    url: '/hwrepairinfo/list.json',
    data: data
  })
}
export function edit (data) {
  return request({
    url: '/hwrepairinfo/edit.json',
    data: data
  })
}
export function del (data) {
  return request({
    url: '/hwrepairinfo/del.json',
    data: data
  })
}

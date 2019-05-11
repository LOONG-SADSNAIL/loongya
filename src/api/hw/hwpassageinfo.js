import request from '../../plugins/axios'

export function list (data) {
  return request({
    url: '/hwpassageinfo/list.json',
    data: data
  })
}
export function edit (data) {
  return request({
    url: '/hwpassageinfo/edit.json',
    data: data
  })
}
export function del (data) {
  return request({
    url: '/hwpassageinfo/del.json',
    data: data
  })
}

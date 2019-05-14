import request from '../../plugins/axios'

export function list (data) {
  return request({
    url: '/hwreplenishmentinfo/list.json',
    data: data
  })
}
export function edit (data) {
  return request({
    url: '/hwreplenishmentinfo/edit.json',
    data: data
  })
}
export function del (data) {
  return request({
    url: '/hwreplenishmentinfo/del.json',
    data: data
  })
}

import request from '../../plugins/axios'

export function list (data) {
  return request({
    url: '/hwrubbishdeliveryinfo/list.json',
    data: data
  })
}
export function edit (data) {
  return request({
    url: '/hwrubbishdeliveryinfo/edit.json',
    data: data
  })
}
export function del (data) {
  return request({
    url: '/hwrubbishdeliveryinfo/del.json',
    data: data
  })
}

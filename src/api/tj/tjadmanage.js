import request from '../../plugins/axios'

export function list (data) {
  return request({
    url: '/tjadmanage/list.json',
    data: data
  })
}
export function edit (data) {
  return request({
    url: '/tjadmanage/edit.json',
    data: data
  })
}
export function del (data) {
  return request({
    url: '/tjadmanage/del.json',
    data: data
  })
}

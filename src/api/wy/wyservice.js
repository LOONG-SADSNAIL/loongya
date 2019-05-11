import request from '../../plugins/axios'

export function list (data) {
  return request({
    url: '/wyservice/list.json',
    data: data
  })
}
export function edit (data) {
  return request({
    url: '/wyservice/edit.json',
    data: data
  })
}
export function del (data) {
  return request({
    url: '/wyservice/del.json',
    data: data
  })
}

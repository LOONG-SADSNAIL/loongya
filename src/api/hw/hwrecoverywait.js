import request from '../../plugins/axios'

export function list (data) {
  return request({
    url: '/hwrecoverywait/list.json',
    data: data
  })
}
export function edit (data) {
  return request({
    url: '/hwrecoverywait/edit.json',
    data: data
  })
}
export function del (data) {
  return request({
    url: '/hwrecoverywait/del.json',
    data: data
  })
}

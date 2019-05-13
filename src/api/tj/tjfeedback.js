import request from '../../plugins/axios'

export function list (data) {
  return request({
    url: '/tjfeedback/list.json',
    data: data
  })
}
export function edit (data) {
  return request({
    url: '/tjfeedback/edit.json',
    data: data
  })
}
export function del (data) {
  return request({
    url: '/tjfeedback/del.json',
    data: data
  })
}

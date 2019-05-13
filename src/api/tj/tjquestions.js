import request from '../../plugins/axios'

export function list (data) {
  return request({
    url: '/tjquestions/list.json',
    data: data
  })
}
export function edit (data) {
  return request({
    url: '/tjquestions/edit.json',
    data: data
  })
}
export function del (data) {
  return request({
    url: '/tjquestions/del.json',
    data: data
  })
}

import request from '../../plugins/axios'

export function list (data) {
  return request({
    url: '/tjannouncement/list.json',
    data: data
  })
}
export function edit (data) {
  return request({
    url: '/tjannouncement/edit.json',
    data: data
  })
}
export function del (data) {
  return request({
    url: '/tjannouncement/del.json',
    data: data
  })
}

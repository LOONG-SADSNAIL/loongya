import request from '../../plugins/axios'

export function list (data) {
  return request({
    url: '/tjusertimingpush/list.json',
    data: data
  })
}
export function edit (data) {
  return request({
    url: '/tjusertimingpush/edit.json',
    data: data
  })
}
export function del (data) {
  return request({
    url: '/tjusertimingpush/del.json',
    data: data
  })
}

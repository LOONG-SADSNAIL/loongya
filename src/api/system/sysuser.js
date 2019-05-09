import request from '../../plugins/axios'

export function list (data) {
  return request({
    url: '/sysuser/list.json',
    data: data
  })
}
export function getUserByOrganno (data) {
  return request({
    url: '/sysuser/getUserByOrganno.json',
    data: data
  })
}
export function edit (data) {
  return request({
    url: '/sysuser/edit.json',
    data: data
  })
}
export function del (data) {
  return request({
    url: '/sysuser/del.json',
    data: data
  })
}

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

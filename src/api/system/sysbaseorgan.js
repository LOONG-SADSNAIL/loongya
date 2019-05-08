import request from '../../plugins/axios'

export function list (data) {
  return request({
    url: '/sysBaseOrgan/list.json',
    data: data
  })
}
export function edit (data) {
  return request({
    url: '/sysBaseOrgan/edit.json',
    data: data
  })
}
export function del (data) {
  return request({
    url: '/sysBaseOrgan/del.json',
    data: data
  })
}
export function treeList (data) {
  return request({
    url: '/sysBaseOrgan/treeList.json',
    data: data
  })
}
export function getByOrganno (data) {
  return request({
    url: '/sysBaseOrgan/getByOrganno.json',
    data: data
  })
}

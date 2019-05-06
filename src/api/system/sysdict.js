import request from '../../plugins/axios'

export function list (data) {
  return request({
    url: '/sysdict/list.json',
    data: data
  })
}
export function edit (data) {
  return request({
    url: '/sysdict/edit.json',
    data: data
  })
}
export function del (data) {
  return request({
    url: '/sysdict/del.json',
    data: data
  })
}
export function treeList (data) {
  return request({
    url: '/sysdict/treeList.json',
    data: data
  })
}

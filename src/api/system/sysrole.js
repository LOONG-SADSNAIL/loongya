import request from '../../plugins/axios'

export function list (data) {
  return request({
    url: '/sysrole/list.json',
    data: data
  })
}
export function edit (data) {
  return request({
    url: '/sysrole/edit.json',
    data: data
  })
}
export function del (data) {
  return request({
    url: '/sysrole/del.json',
    data: data
  })
}

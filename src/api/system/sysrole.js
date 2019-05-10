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
export function bindRole (data) {
  return request({
    url: '/sysrole/bindRole.json',
    data: data
  })
}
export function rolebindmenu (data) {
  return request({
    url: '/sysrole/rolebindmenu.json',
    data: data
  })
}
export function getRoleId (data) {
  return request({
    url: '/sysrole/getRoleId.json',
    data: data
  })
}

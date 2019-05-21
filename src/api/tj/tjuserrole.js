import request from '../../plugins/axios'

export function list (data) {
  return request({
    url: '/tjuserrole/list.json',
    data: data
  })
}
export function edit (data) {
  return request({
    url: '/tjuserrole/edit.json',
    data: data
  })
}
export function del (data) {
  return request({
    url: '/tjuserrole/del.json',
    data: data
  })
}

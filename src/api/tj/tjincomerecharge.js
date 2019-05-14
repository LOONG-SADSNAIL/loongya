import request from '../../plugins/axios'

export function list (data) {
  return request({
    url: '/tjincomerecharge/list.json',
    data: data
  })
}
export function edit (data) {
  return request({
    url: '/tjincomerecharge/edit.json',
    data: data
  })
}
export function del (data) {
  return request({
    url: '/tjincomerecharge/del.json',
    data: data
  })
}

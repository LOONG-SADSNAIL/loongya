import request from '../../plugins/axios'

export function list (data) {
  return request({
    url: '/hwkhsljtdxx/list.json',
    data: data
  })
}
export function edit (data) {
  return request({
    url: '/hwkhsljtdxx/edit.json',
    data: data
  })
}
export function del (data) {
  return request({
    url: '/hwkhsljtdxx/del.json',
    data: data
  })
}

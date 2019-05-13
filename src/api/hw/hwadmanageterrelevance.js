import request from '../../plugins/axios'

export function list (data) {
  return request({
    url: '/hwadmanageterrelevance/list.json',
    data: data
  })
}
export function edit (data) {
  return request({
    url: '/hwadmanageterrelevance/edit.json',
    data: data
  })
}
export function del (data) {
  return request({
    url: '/hwadmanageterrelevance/del.json',
    data: data
  })
}
